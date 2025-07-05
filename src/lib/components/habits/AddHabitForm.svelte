<script lang="ts">
	// This component now uses a callback prop `onAdd` instead of dispatching events.
	let { onAdd }: { onAdd: (name: string) => void } = $props();

	// State for the input field
	let name = $state('');

	/**
	 * Handles form submission, calls the `onAdd` callback with the habit name,
	 * and resets the input field.
	 */
	function handleSubmit() {
		if (name.trim()) {
			onAdd(name.trim());
			name = ''; // Clear input after submission
		}
	}
</script>

<form onsubmit={handleSubmit} class="flex items-center gap-2">
	<input
		type="text"
		bind:value={name}
		placeholder="Contoh: Membaca buku..."
		class="block w-full rounded-lg border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
	/>
	<button
		type="submit"
		class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
		aria-label="Tambah kebiasaan baru"
		disabled={!name.trim()}
	>
		Tambah
	</button>
</form>
