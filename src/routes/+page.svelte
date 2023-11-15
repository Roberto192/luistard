<script>
	import { list_pdfs, integrantes } from '$lib/index.js';
	import { Container } from 'postcss';
	let p = [''];
</script>

<nav class="bg-slate-50 border-gray-200 dark:bg-gray-900">
	<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<h1 class="text-3xl font-bold underline dark:text-gray-400">Mi web pages</h1>
		</a>
		<div class="flex items-center space-x-6 rtl:space-x-reverse">
			<a href="/integrantes" class="text-sm text-gray-500 dark:text-white hover:underline"
				>Integrantes</a
			>
		</div>
	</div>
</nav>

<div class="grid grid-cols-2 mx-10 my-3">
	<div class="grid grid-cols-1">
		<h2>Mi equipo es:</h2>
		<ul class="ml-10 space-y-1 text-gray-900 list-disc dark:text-gray-900">
			{#each integrantes as integrante}
				<li>
					<h3>
						<a href="integrantes/{integrante}">
							{integrante}
						</a>
					</h3>
				</li>
			{/each}
		</ul>
	</div>

	<ul class="max-w-md space-y-1 text-gray-900 list-disc list-inside dark:text-gray-900">
		{#each list_pdfs as pdf}
			<li class=""><a href={pdf}>{pdf.split('/').toReversed()[0]}</a></li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
