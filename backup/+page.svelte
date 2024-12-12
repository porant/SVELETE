<script lang="ts">
	import Header from "./Header.svelte";
	import Bottom from "./Bottom.svelte";
	import Logo from "./Logo.svelte";
	
	import MyApps from "./MyApps.svelte";

	import {
		blur,
		crossfade,
		draw,
		fade,
		fly,
		scale,
		slide
	} from 'svelte/transition';
	import MyAnims from "./MyAnims.svelte";

	

	let menu_value = 2;

	

</script>
<head>
    <link href="./../node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet"> 
</head>
<Header bind:value={menu_value} />

<body>


	

		{#if menu_value == 1}
			<MyAnims />
		{/if}
		{#if menu_value == 2}
			<MyApps />
			<span out:fly={{delay: 500, x:-100, duration:200}}><Logo /></span>
		{/if}

	
</body>
<Bottom />
<style>

</style>