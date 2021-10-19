<script>
	import '../app.css';
</script>

<main class="flex flex-col justify-center items-center h-screen overflow-y-auto bg-gradient-to-br from-pink-300 via-indigo-400 to-blue-600">
	<slot />
	<footer class="mb-12 mt-12 lg:mt-auto">
		<p class="text-white">
			made with 
			<span class="text-red-600">&hearts;</span> 
			by 
			<a class="hover:underline" href="https://www.linkedin.com/in/tiago-lima-rocha-linkd" target="_blank">Tiago Lima Rocha</a>
		</p>
	</footer>
</main>
