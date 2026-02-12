<script lang="ts">
	// Pensieve - Personal Reflection Dashboard
	// This is the main landing page
</script>

<svelte:head>
	<title>Pensieve - Your Personal Reflection Dashboard</title>
</svelte:head>

<div class="container">
	<header>
		<h1>🧠 Pensieve</h1>
		<p>Your personal reflection dashboard</p>
	</header>

	<main>
		<section class="placeholder">
			<h2>Welcome to Pensieve</h2>
			<p>
				Review your conversations and thoughts over time with AI-generated insights,
				smart tagging, and usage statistics.
			</p>
			<p class="notice">
				⚠️ This is a scaffold. Features are being built. Check back soon!
			</p>
		</section>
	</main>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, -apple-system, sans-serif;
	}

	header {
		text-align: center;
		margin-bottom: 3rem;
	}

	h1 {
		font-size: 3rem;
		margin: 0;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	header p {
		color: #666;
		font-size: 1.2rem;
	}

	.placeholder {
		background: #f8f9fa;
		border: 2px dashed #ddd;
		border-radius: 8px;
		padding: 3rem;
		text-align: center;
	}

	.notice {
		background: #fff3cd;
		color: #856404;
		padding: 1rem;
		border-radius: 4px;
		margin-top: 1.5rem;
	}
</style>
