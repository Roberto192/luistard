<script>
    import { integrantes } from "$lib";
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

<slot/>