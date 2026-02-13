<script lang="ts">
	// OpenPensieve Landing Page
	// A beautiful coming-soon page with Squad Status design influence
</script>

<svelte:head>
	<title>OpenPensieve - Your Digital Memory Palace</title>
	<meta name="description" content="Your digital memory palace — a personal reflection dashboard for reviewing conversations and thoughts over time." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-6 relative overflow-hidden">
	<!-- Background glow effects -->
	<div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
	<div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow-delayed"></div>

	<div class="max-w-4xl w-full relative z-10">
		<!-- Main Content -->
		<div class="text-center mb-12 animate-slide-up">
			<!-- Icon with gradient border -->
			<div class="relative inline-block mb-8">
				<div class="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse-subtle"></div>
				<div class="relative w-28 h-28 mx-auto rounded-full bg-slate-800/50 backdrop-blur-sm border-2 border-white/10 flex items-center justify-center shadow-xl">
					<div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 flex items-center justify-center">
						<span class="text-6xl">🧠</span>
					</div>
				</div>
			</div>

			<!-- Gradient Title -->
			<h1 class="text-6xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
				OpenPensieve
			</h1>

			<!-- Description -->
			<p class="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed font-light">
				Your digital memory palace
			</p>
			
			<p class="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
				A personal reflection dashboard for reviewing conversations and thoughts over time with AI-generated insights.
			</p>
		</div>

		<!-- Status Card with backdrop blur -->
		<div class="relative overflow-hidden bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8 mb-8 shadow-2xl animate-slide-up-delayed hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">
			<!-- Subtle glow -->
			<div class="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
			
			<div class="relative z-10 text-center">
				<!-- Status Badge -->
				<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 text-blue-300 text-sm font-medium mb-6 shadow-lg">
					<span class="relative flex h-2 w-2">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
					</span>
					Under Construction
				</div>
				
				<h2 class="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
					We're Building Something Special
				</h2>
				
				<p class="text-slate-300 mb-8 leading-relaxed">
					OpenPensieve is currently in development. We're crafting a thoughtful space for reviewing your digital memories and conversations.
				</p>

				<!-- Features Preview Grid -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
					<div class="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-blue-400/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
						<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
							<span class="text-3xl">✨</span>
						</div>
						<h3 class="text-base font-semibold text-white mb-2">AI Insights</h3>
						<p class="text-sm text-slate-400 leading-relaxed">Automatic tagging and smart suggestions</p>
					</div>
					
					<div class="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-purple-400/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
						<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
							<span class="text-3xl">📊</span>
						</div>
						<h3 class="text-base font-semibold text-white mb-2">Analytics</h3>
						<p class="text-sm text-slate-400 leading-relaxed">Track time and activity patterns</p>
					</div>
					
					<div class="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-pink-400/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
						<div class="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400/20 to-blue-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
							<span class="text-3xl">🔍</span>
						</div>
						<h3 class="text-base font-semibold text-white mb-2">Search</h3>
						<p class="text-sm text-slate-400 leading-relaxed">Find memories by tag or date</p>
					</div>
				</div>

				<!-- CTA Button -->
				<a 
					href="https://github.com/HelloRicky/openpensieve"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30 border border-white/20 hover:border-white/30 text-white font-medium transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 backdrop-blur-sm"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
					</svg>
					<span>View on GitHub</span>
					<svg class="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</div>

		<!-- Footer -->
		<div class="text-center text-sm text-slate-500 animate-fade-in">
			<p>Built with <span class="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">❤️</span> using SvelteKit & Supabase</p>
		</div>
	</div>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes pulseGlow {
		0%, 100% {
			opacity: 0.3;
			transform: scale(1);
		}
		50% {
			opacity: 0.6;
			transform: scale(1.05);
		}
	}

	.animate-slide-up {
		animation: slideUp 0.8s ease-out;
	}

	.animate-slide-up-delayed {
		animation: slideUp 0.8s ease-out 0.2s both;
	}

	.animate-pulse-glow {
		animation: pulseGlow 8s ease-in-out infinite;
	}

	.animate-pulse-glow-delayed {
		animation: pulseGlow 8s ease-in-out infinite 4s;
	}

	.animate-fade-in {
		animation: slideUp 1s ease-out 0.4s both;
	}

	.animate-pulse-subtle {
		animation: pulseGlow 3s ease-in-out infinite;
	}
</style>
