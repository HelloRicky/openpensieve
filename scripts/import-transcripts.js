#!/usr/bin/env node
import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const transcriptsPath = process.env.TRANSCRIPTS_PATH;

if (!supabaseUrl || !supabaseKey) {
	console.error('❌ Missing Supabase credentials in .env');
	process.exit(1);
}

if (!transcriptsPath) {
	console.error('❌ Missing TRANSCRIPTS_PATH in .env');
	console.error('   Example: TRANSCRIPTS_PATH=/home/user/.openclaw/transcripts');
	process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function importTranscripts() {
	console.log('📂 Importing transcripts from:', transcriptsPath);
	console.log('');

	try {
		const files = readdirSync(transcriptsPath).filter(f => f.endsWith('.jsonl'));
		
		if (files.length === 0) {
			console.log('⚠️  No .jsonl files found in transcripts directory');
			return;
		}

		console.log(`📝 Found ${files.length} transcript files\n`);

		for (const file of files) {
			console.log(`Processing: ${file}`);
			const filePath = join(transcriptsPath, file);
			const content = readFileSync(filePath, 'utf8');
			const lines = content.trim().split('\n');

			// Parse session metadata (this is a placeholder - adjust based on actual JSONL format)
			let sessionId = null;
			let messageCount = 0;

			for (const line of lines) {
				try {
					const entry = JSON.parse(line);
					
					// Create session if not exists
					if (!sessionId) {
						const { data: session } = await supabase
							.from('sessions')
							.insert({
								session_id: file.replace('.jsonl', ''),
								started_at: entry.timestamp || new Date().toISOString(),
								message_count: 0
							})
							.select()
							.single();
						
						sessionId = session?.id;
					}

					// Insert message
					if (sessionId && entry.role && entry.content) {
						await supabase.from('messages').insert({
							session_id: sessionId,
							role: entry.role,
							content: entry.content,
							timestamp: entry.timestamp || new Date().toISOString()
						});
						messageCount++;
					}
				} catch (err) {
					console.error(`   ⚠️  Failed to parse line: ${err.message}`);
				}
			}

			// Update session message count
			if (sessionId) {
				await supabase
					.from('sessions')
					.update({ message_count: messageCount })
					.eq('id', sessionId);
			}

			console.log(`   ✅ Imported ${messageCount} messages\n`);
		}

		console.log('✅ Import complete!');
	} catch (err) {
		console.error('❌ Import failed:', err.message);
		process.exit(1);
	}
}

importTranscripts();
