<script lang="ts">
	import Header from "./Header.svelte";
	import Bottom from "./Bottom.svelte";
	import Logo from "./Logo.svelte";
	import MyAnims from "./MyAnims.svelte";
	import {
		blur,
		crossfade,
		draw,
		fade,
		fly,
		scale,
		slide
	} from 'svelte/transition';

	import MyApps from "./MyApps.svelte";

	let menu_value = 2;

	

</script>
<head>
    <link href="./../node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet"> 
</head>
<Header bind:value={menu_value} />
<body>
	

		{#if menu_value == 0}
			<MyAnims />
		{/if}

		{#if menu_value != 0}
			<span out:fly={{delay: 500, x:-100, duration:200}}><Logo /></span>
		{/if}

		{#if menu_value == 2}
			<MyApps />
		{/if}

	
</body>
<Bottom />
<style>

</style>