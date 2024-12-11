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
	import McApi from "./MCApi.svelte";

	let menu_value = 1;



</script>
<head>
    <link href="./../node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet"> 
</head>
<Header bind:menu_value/>
<body>
	

		{#if menu_value == 0}
		<MyAnims />
		{/if}

		{#if menu_value != 0}
			<span out:fly={{delay: 500, x:-100, duration:200}}><Logo /></span>
		{/if}

		{#if menu_value == 2}
			
			<div class="construction" in:fly={{ y: 200, duration: 2000 }} out:fade><span class=""><i class="fa-solid fa-skull" /> UNDER CONSTRUCTION <i class="fa-solid fa-skull" /></span>
				<section class="card w-full">
					<div class="p-4 space-y-4" >
						<McApi />
						<div class="placeholder" />
						<div class="grid grid-cols-3 gap-8">
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
						</div>
						<div class="grid grid-cols-4 gap-4">
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
							<div class="placeholder" />
						</div>
					</div>
				</section>
				<span class=""><i class="fa-solid fa-skull" /> UNDER CONSTRUCTION <i class="fa-solid fa-skull" /></span>
			</div>
		{/if}

	
</body>
<Bottom />
<style>


	.construction{
		color: rgb(238, 255, 0);
		background-color: rgb(71, 12, 12);
		
		display: grid;
		position: absolute;
		top: 200px;
		width: 100%;
		text-align: center;
	}
</style>