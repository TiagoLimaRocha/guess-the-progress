<script>
	import ProgressBar from '../components/ProgressBar/index.svelte';
	import Confetti from '../components/Confetti/index.svelte';
	import { progressStore } from '$lib/stores';
	import { toInt, rng, durstenfeldShuffle } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	const value = rng(0, 101);
	progressStore.set(value);

	let visible;
	let ready;
	let values = [];
	let guessedCorrectly;

	onMount(() => {
		visible = true;
	});

	for (let i = 0; i < 4; i++) {
		if (i === 0) values.push(toInt($progressStore));

		let next = false;
		while (!next) {
			const newValue = toInt(rng(0, 101));
			if (!values.includes(newValue)) {
				values.push(newValue);
				next = true;
			}
		}
	}
	durstenfeldShuffle(values);

	const checkGuess = (guess) => {
		guessedCorrectly = guess === toInt($progressStore);
		setTimeout(() => {
			ready = true;
		}, 1000);
	};
</script>

{#if guessedCorrectly}
	<Confetti />
{/if}

<section
	class="relative top-12 lg:top-0 w-full mt-32 mb-12 lg:mt-0 {typeof guessedCorrectly !== 'undefined' && !guessedCorrectly && 'animate-shake'}"
>
	{#if visible}
		<h1
			transition:fade
			class="text-center uppercase text-2xl md:text-5xl lg:text-6xl mx-auto py-12 text-white font-semibold"
		>
			Guess the progress
		</h1>
		<div class="px-10 lg:px-40 lg:mt-24">
			<ProgressBar />
		</div>
		{#if typeof guessedCorrectly !== 'undefined' && !guessedCorrectly}
			{#if ready}
				<div class="flex w-full justify-center my-24">
					<button
						on:click={() => location.reload()}
						transition:fade
						class="text-white text-2xl mx-auto p-12 border border-white hover:border-none hover:bg-indigo-500 shadow rounded-md"
					>
						Try again ¯\_(ツ)_/¯
					</button>
				</div>
			{/if}
		{:else}
			<div
				transition:fade
				class="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center mx-auto mt-12 lg:mt-24 w-1/2 lg:w-3/4"
			>
				<button
					on:click={() => checkGuess(values[0])}
					class="bg-yellow-500 hover:bg-yellow-300 hover:cursor-pointer w-full py-12 lg:py-24 shadow text-center text-white rounded-md"
					>{values[0]}</button
				>
				<button
					on:click={() => checkGuess(values[1])}
					class="bg-blue-500 hover:bg-blue-300 hover:cursor-pointer w-full py-12 lg:py-24 shadow text-center text-white rounded-md"
					>{values[1]}</button
				>
				<button
					on:click={() => checkGuess(values[2])}
					class="bg-green-500 hover:bg-green-300 hover:cursor-pointer w-full py-12 lg:py-24 shadow text-center text-white rounded-md"
					>{values[2]}</button
				>
				<button
					on:click={() => checkGuess(values[3])}
					class="bg-red-500 hover:bg-red-300 hover:cursor-pointer w-full py-12 lg:py-24 shadow text-center text-white rounded-md"
					>{values[3]}</button
				>
			</div>
		{/if}
	{/if}
</section>
