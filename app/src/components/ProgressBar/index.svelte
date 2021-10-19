<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { progressStore } from '$lib/stores'; 

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
	progress.set($progressStore);
</script>

<progress value={$progress}></progress>

<style>
	progress {
		display: block;
		width: 100%;
}
</style>