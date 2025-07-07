<script lang="ts">
	import AddHabitForm from '$lib/components/habits/AddHabitForm.svelte';
	import HabitList from '$lib/components/habits/HabitList.svelte';
	import { db } from '$lib/db';
	import { liveQuery } from 'dexie';

	// Reactive state for today's date, calculated once
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	// Live query to get all habits from the database
	const habits = liveQuery(() => db.habits.orderBy('createdAt').toArray());

	// Live query to get all entries for today
	const entries = liveQuery(() => db.habitEntries.where('date').equals(today).toArray());

	// Derived state to create a Set of completed habit IDs for today for quick lookups
	const values = entries?.getValue?.() ?? [];
	const habitIds = values.map((entry) => entry.habitId);
	const completedHabitIds = $derived(new Set(habitIds));

	/**
	 * Adds a new habit to the database.
	 * @param {string} name - The name of the new habit.
	 */
	async function handleAddHabit(name: string) {
		console.log(name);
		if (!name.trim()) return;
		await db.habits.add({
			name: name.trim(),
			frequency: 'daily', // MVP focuses on daily habits
			createdAt: new Date()
		});
	}

	/**
	 * Deletes a habit and all its associated entries from the database.
	 * @param {number} id - The ID of the habit to delete.
	 */
	async function handleDeleteHabit(id: number) {
		// Dexie transactions ensure both operations succeed or fail together
		await db.transaction('rw', db.habits, db.habitEntries, async () => {
			await db.habits.delete(id);
			await db.habitEntries.where('habitId').equals(id).delete();
		});
	}

	/**
	 * Toggles a habit's completion status for today.
	 * @param {number} habitId - The ID of the habit to toggle.
	 * @param {boolean} isCompleted - The current completion status.
	 */
	async function handleToggleHabit(habitId: number, isCompleted: boolean) {
		if (isCompleted) {
			// If it's already completed, find and delete the entry
			const entry = await db.habitEntries
				.where({ habitId })
				.and((e) => e.date.getTime() === today.getTime())
				.first();

			if (entry?.id) {
				await db.habitEntries.delete(entry.id);
			}
		} else {
			// If it's not completed, add a new entry for today
			await db.habitEntries.add({
				habitId,
				date: today
			});
		}
	}
</script>

<div class="p-4 sm:p-6 lg:p-8">
	<header class="mb-8">
		<h1 class="text-3xl font-bold text-gray-900 md:text-4xl">Habit Tracker</h1>
		<p class="mt-2 text-base text-gray-600">
			Lacak kebiasaan harian Anda dan bangun rutinitas positif.
		</p>
	</header>

	<main class="space-y-8">
		<AddHabitForm onAdd={handleAddHabit} />

		<HabitList
			habits={$habits ?? []}
			completedIds={completedHabitIds}
			onToggle={(e) => handleToggleHabit(e.id, e.isCompleted)}
			onDelete={(e) => handleDeleteHabit(e.id)}
		/>
	</main>
</div>
