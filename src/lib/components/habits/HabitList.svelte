<script lang="ts">
	import type { Habit } from '$lib/db';
	import HabitItem from './HabitItem.svelte';

	let {
		habits,
		completedIds,
		onToggle,
		onDelete
	}: {
		habits: Habit[];
		completedIds: Set<number>;
		onToggle: (payload: { id: number; isCompleted: boolean }) => void;
		onDelete: (payload: { id: number }) => void;
	} = $props();
</script>

<div class="space-y-3">
	{#if habits.length > 0}
		{#each habits as habit (habit.id)}
			<HabitItem
				{habit}
				isCompleted={completedIds.has(habit.id!)}
				{onToggle}
				{onDelete}
			/>
		{/each}
	{:else}
		<div class="rounded-lg border border-dashed border-gray-300 p-8 text-center">
			<h3 class="text-lg font-semibold text-gray-900">Belum Ada Kebiasaan</h3>
			<p class="mt-1 text-sm text-gray-500">Mulai lacak dengan menambahkan kebiasaan baru di atas.</p>
		</div>
	{/if}
</div>
