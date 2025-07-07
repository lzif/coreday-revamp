<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@html `<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>`}
{@render children()}
