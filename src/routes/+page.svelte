<script lang="ts">
	const features = [
		{
			emoji: '💸',
			title: 'Finance Tracker',
			description: 'Log income & expenses, manage budgets, and view interactive stats.'
		},
		{
			emoji: '📆',
			title: 'Time & Task Manager',
			description: 'A daily planner, calendar, and to-do lists with projects and subtasks.'
		},
		{
			emoji: '🪴',
			title: 'Habit Tracker',
			description: 'Use daily/weekly checklists to build streaks and stay motivated.'
		},
		{
			emoji: '💰',
			title: 'Saving Progress',
			description: 'Set savings goals and visualize your progress toward them.'
		},
		{
			emoji: '📝',
			title: 'Note & Daily Journal',
			description: 'Keep structured daily entries and notes with Markdown and tags.'
		}
	];

	const roadmap = [
		{
			emoji: '🪞',
			title: 'Reflective Journal / Mood Tracker',
			description: 'Log daily moods and write short reflective notes.'
		},
		{
			emoji: '📊',
			title: 'Insight & Analytic Engine',
			description: 'Get automatic analysis of your habits, finances, and mood.'
		},
		{
			emoji: '⏱️',
			title: 'Pomodoro Timer + Focus Mode',
			description: 'A "no distraction" mode to help you concentrate on a single task.'
		},
		{
			emoji: '🧩',
			title: 'Widget Dashboard',
			description: 'A modular, drag-and-drop dashboard for a quick overview.'
		},
		{
			emoji: '📦',
			title: 'Export & Backup',
			description: 'Export your data to JSON, CSV, or PDF with local backup options.'
		},
		{
			emoji: '🎯',
			title: 'Goal Planning',
			description: 'Break down big goals into subtasks with timelines and milestones.'
		}
	];
</script>

<div class="flex min-h-screen flex-col bg-gray-50 text-gray-900">
	<header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
		<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
			<a href="/" class="flex items-center gap-2">
				<img src="/favicon.svg" alt="Coreday Logo" class="h-8 w-8" />
				<span class="text-xl font-bold tracking-tighter text-blue-600">Coreday</span>
			</a>
			<nav class="hidden items-center gap-6 text-sm font-medium md:flex">
				<a href="#features" class="text-gray-600 hover:text-blue-600">Features</a>
				<a href="#roadmap" class="text-gray-600 hover:text-blue-600">Roadmap</a>
				<a
					href="https://github.com/lzif/coreday"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-600 hover:text-blue-600"
				>
					GitHub
				</a>
			</nav>
			<div class="flex items-center gap-4">
				<a
					href="/habits"
					class="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
				>
					Get Started
				</a>
			</div>
		</div>
	</header>

	<main class="flex-1">
		<div class="flex flex-col">
			<section class="w-full bg-white py-20 md:py-32 lg:py-40">
				<div class="container mx-auto max-w-7xl px-4 text-center">
					<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
						Manage Your Life, Own Your Data
					</h1>
					<p class="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
						Coreday is a simple, powerful, offline-first application to help you organize your
						finances, tasks, habits, and more. All your data stays on your device.
					</p>
					<div class="mt-10 flex items-center justify-center gap-4">
						<a
							href="/habits"
							class="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-base font-semibold text-white shadow-md transition-colors hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
						>
							Get Started
						</a>
						<a
							href="https://github.com/your-username/coreday"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-transparent px-8 text-base font-semibold text-gray-700 transition-colors hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:outline-none"
						>
							View on GitHub
						</a>
					</div>
				</div>
			</section>

			<section id="features" class="w-full py-20 md:py-28">
				<div class="container mx-auto max-w-7xl px-4">
					<div class="mb-12 text-center">
						<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Key Features
						</h2>
						<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
							Everything you need to get organized, all in one place.
						</p>
					</div>
					<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{#each features as feature}
							<div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
								<div
									class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl"
								>
									{feature.emoji}
								</div>
								<h3 class="text-xl font-semibold text-gray-900">{feature.title}</h3>
								<p class="mt-2 text-base text-gray-600">{feature.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</section>

			<section id="roadmap" class="w-full bg-white py-20 md:py-28">
				<div class="container mx-auto max-w-7xl px-4">
					<div class="mb-12 text-center">
						<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							On the Horizon
						</h2>
						<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
							We're always working on new features. Here's what's coming next.
						</p>
					</div>
					<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{#each roadmap as item}
							<div class="rounded-xl border border-gray-200 p-6">
								<div
									class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl"
								>
									{item.emoji}
								</div>
								<h3 class="text-xl font-semibold text-gray-900">{item.title}</h3>
								<p class="mt-2 text-base text-gray-600">{item.description}</p>
							</div>
						{/each}
					</div>
				</div>
			</section>
		</div>
	</main>

	<footer class="border-t border-gray-200 bg-white">
		<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<p class="text-sm text-gray-500">
					&copy; {new Date().getFullYear()} Coreday. All rights reserved.
				</p>
				<p class="text-sm text-gray-500">Your data is your own. Offline-first, forever.</p>
			</div>
		</div>
	</footer>
</div>

