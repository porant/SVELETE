
<script>
	import { fade, fly } from "svelte/transition";
    import McApi from "./MCApi.svelte";
	import MyFileCloud from "./myFileCloud.svelte";

</script>


<div class="construction" in:fly={{ y: 200, duration: 2000 }} out:fade><span class=""><i class="fa-solid fa-skull" /> UNDER CONSTRUCTION <i class="fa-solid fa-skull" /></span>
    <section class="card w-full">
        <div class="p-4 space-y-4" >
            Minecraft server:
            <McApi />
        </div>
        <div class="p-4 space-y-4" >
            File cloud:
            <MyFileCloud />
        </div>
    </section>
    <span class=""><i class="fa-solid fa-skull" /> UNDER CONSTRUCTION <i class="fa-solid fa-skull" /></span>
</div>

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