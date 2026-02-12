<script lang="ts">
	// OpenPensieve Landing Page
	// A beautiful coming-soon page with proper branding
</script>

<svelte:head>
	<title>OpenPensieve - Your Digital Pensieve</title>
	<meta name="description" content="Your digital Pensieve — a personal reflection dashboard for reviewing conversations and thoughts over time." />
</svelte:head>

<div class="min-h-screen bg-pensieve-bg-deep text-pensieve-text-primary flex items-center justify-center p-6">
	<div class="max-w-3xl w-full">
		<!-- Main Content -->
		<div class="text-center mb-12">
			<!-- Icon -->
			<div class="relative inline-block mb-8">
				<div class="absolute inset-0 bg-pensieve-primary/20 rounded-full blur-3xl animate-pulse-subtle"></div>
				<div class="relative w-24 h-24 mx-auto rounded-full bg-pensieve-bg-elevated border-2 border-pensieve-primary/30 flex items-center justify-center">
					<span class="text-5xl">🧠</span>
				</div>
			</div>

			<!-- Title -->
			<h1 class="text-5xl md:text-6xl font-light tracking-tight mb-6 bg-gradient-to-br from-pensieve-text-primary via-pensieve-primary-bright to-pensieve-shimmer bg-clip-text text-transparent">
				OpenPensieve
			</h1>

			<!-- Description -->
			<p class="text-xl md:text-2xl text-pensieve-text-secondary mb-4 leading-relaxed">
				Your digital Pensieve — a personal reflection dashboard
			</p>
			
			<p class="text-base text-pensieve-text-tertiary max-w-2xl mx-auto">
				Review your conversations and thoughts over time with AI-generated insights, smart tagging, and usage statistics.
			</p>
		</div>

		<!-- Status Card -->
		<div class="relative overflow-hidden bg-gradient-to-br from-pensieve-bg-elevated to-pensieve-primary/5 rounded-xl border border-pensieve-primary/20 p-8 mb-8">
			<!-- Subtle glow -->
			<div class="absolute -top-24 -right-24 w-48 h-48 bg-pensieve-primary/10 rounded-full blur-3xl"></div>
			
			<div class="relative z-10 text-center">
				<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pensieve-primary/10 border border-pensieve-primary/20 text-pensieve-primary-bright text-sm font-medium mb-4">
					<span class="relative flex h-2 w-2">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pensieve-primary-bright opacity-75"></span>
						<span class="relative inline-flex rounded-full h-2 w-2 bg-pensieve-primary-bright"></span>
					</span>
					Under Construction
				</div>
				
				<h2 class="text-2xl font-light text-pensieve-text-primary mb-3">
					We're Building Something Special
				</h2>
				
				<p class="text-pensieve-text-secondary mb-6">
					OpenPensieve is currently in development. We're crafting a thoughtful space for reviewing your digital memories and conversations.
				</p>

				<!-- Features Preview -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-left">
					<div class="bg-pensieve-bg-surface/50 rounded-lg p-4 border border-pensieve-border">
						<div class="text-2xl mb-2">✨</div>
						<h3 class="text-sm font-medium text-pensieve-text-primary mb-1">AI Insights</h3>
						<p class="text-xs text-pensieve-text-tertiary">Automatic tagging and smart suggestions</p>
					</div>
					
					<div class="bg-pensieve-bg-surface/50 rounded-lg p-4 border border-pensieve-border">
						<div class="text-2xl mb-2">📊</div>
						<h3 class="text-sm font-medium text-pensieve-text-primary mb-1">Analytics</h3>
						<p class="text-xs text-pensieve-text-tertiary">Track time and activity patterns</p>
					</div>
					
					<div class="bg-pensieve-bg-surface/50 rounded-lg p-4 border border-pensieve-border">
						<div class="text-2xl mb-2">🔍</div>
						<h3 class="text-sm font-medium text-pensieve-text-primary mb-1">Search</h3>
						<p class="text-xs text-pensieve-text-tertiary">Find memories by tag or date</p>
					</div>
				</div>

				<!-- CTA -->
				<a 
					href="https://github.com/HelloRicky/openpensieve"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-pensieve-primary/20 hover:bg-pensieve-primary/30 border border-pensieve-primary/30 hover:border-pensieve-primary/50 text-pensieve-primary-bright hover:text-pensieve-shimmer transition-all duration-200 group"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
					</svg>
					<span>View on GitHub</span>
					<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</div>

		<!-- Footer -->
		<div class="text-center text-sm text-pensieve-text-tertiary">
			<p>Built with <span class="text-pensieve-primary">❤️</span> using SvelteKit & Supabase</p>
		</div>
	</div>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
