<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import { onMount, onDestroy } from "svelte";
    import * as COOLIFY from "./COOLIFY.js";
	import { ProgressBar } from "@skeletonlabs/skeleton";


    let APPS: any[] = []


    let intervalId: NodeJS.Timeout;
    onMount(async () => {
        APPS = await COOLIFY.getAPPS()
        intervalId = setInterval(async () => {
            APPS = await COOLIFY.getAPPS()
        }, 10000);
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });
    

</script>

<div class="middle" in:fly={{ y: 200, duration: 2000 }} out:fade>
            {#if APPS.length == 0}
                <div class="placeh">
                    <ProgressBar />
                </div>
            {/if}
                
            {#each APPS as app}

                    <div class="app">
                        

                            {#if app.status == "running:healthy"}
                                <span class="badge variant-ghost-success">{app.name}</span>
                            {:else if app.status == "exited:unhealthy"}
                                <span class="badge variant-ghost-error">{app.name}</span>
                            {:else if app.status == "running:unhealthy"}
                                <span class="badge variant-ghost-warning">{app.name}</span>
                            {/if}
                            
                        
                    </div>

            {/each}
</div>



<style>

    .middle{        
        display: flex;
        padding: 5px;
        margin: 5px;
        size: 100%;

    }

    .app {
        display: flex;
        margin: 3px;
    }
    
    .placeh{
        inline-size: 100px;
    }




</style>