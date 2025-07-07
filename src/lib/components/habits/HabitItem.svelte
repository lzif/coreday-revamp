<script lang="ts">
	import type { Habit } from '$lib/db';

	// Using callback props for events, aligning with Svelte 5 conventions.
	let {
		habit,
		isCompleted,
		onToggle,
		onDelete
	}: {
		habit: Habit;
		isCompleted: boolean;
		onToggle: (payload: { id: number; isCompleted: boolean }) => void;
		onDelete: (payload: { id: number }) => void;
	} = $props();

	function handleToggle() {
		onToggle({ id: habit.id!, isCompleted });
	}

	function handleDelete() {
		if (confirm(`Yakin ingin menghapus kebiasaan "${habit.name}"?`)) {
			onDelete({ id: habit.id! });
		}
	}
</script>

<div
	class="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md"
>
	<div class="flex items-center gap-4">
		<button
			onclick={handleToggle}
			class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors {isCompleted
				? 'border-green-500 bg-green-500 text-white'
				: 'border-gray-300 bg-transparent text-transparent hover:bg-gray-100'}"
			aria-label={isCompleted
				? `Tandai "${habit.name}" sebagai belum selesai`
				: `Tandai "${habit.name}" sebagai selesai`}
		>
			<!-- Checkmark Icon -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="h-5 w-5"
			>
				<path
					fill-rule="evenodd"
					d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<span
			class="text-base font-medium text-gray-800 {isCompleted ? 'text-gray-400 line-through' : ''}"
		>
			{habit.name}
		</span>
	</div>

	<button
		onclick={handleDelete}
		class="rounded-md p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-600"
		aria-label="Hapus kebiasaan"
	>
		<!-- Trash Icon -->
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
			<path
				fill-rule="evenodd"
				d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.58.22-2.365.468a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
</div>
