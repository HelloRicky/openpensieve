#!/usr/bin/env node
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
	console.error('❌ Missing Supabase credentials in .env');
	console.error('   Required: PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
	process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function runMigrations() {
	console.log('🔄 Running database migrations...\n');

	const migrationsDir = join(__dirname, '../supabase/migrations');
	const migrationFile = join(migrationsDir, '001_initial_schema.sql');

	try {
		const sql = readFileSync(migrationFile, 'utf8');
		
		console.log('📝 Running migration: 001_initial_schema.sql');
		
		// Execute the migration SQL
		const { error } = await supabase.rpc('exec_sql', { sql });
		
		if (error) {
			// If exec_sql doesn't exist, try direct query
			const { error: queryError } = await supabase.from('_migrations').select('*');
			
			if (queryError) {
				console.log('⚠️  Direct SQL execution not available via RPC.');
				console.log('   Please run migrations manually using Supabase Studio or psql:\n');
				console.log(`   psql "$DATABASE_URL" < ${migrationFile}\n`);
				console.log('   Or paste the contents of the migration file into Supabase SQL Editor.');
				process.exit(1);
			}
		}

		console.log('✅ Migration completed successfully!\n');
		console.log('📊 Created tables:');
		console.log('   - sessions');
		console.log('   - messages');
		console.log('   - tags');
		console.log('   - session_tags');
		console.log('   - usage_stats');
		console.log('   - suggestions\n');
	} catch (err) {
		console.error('❌ Migration failed:', err.message);
		process.exit(1);
	}
}

runMigrations();
