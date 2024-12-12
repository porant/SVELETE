<script lang="ts" >
    import { onMount } from "svelte";



    let api_url = "https://mcapi.us/server/status?ip=porant.de"

 

    let mc_status:string
    let mc_players_now:number
    let mc_players_max:number
    let mc_version:string
    let mc_favicon:string

    onMount(() => {
        callAPI();
    });

    function callAPI() {
        fetch(api_url)
        .then(response => response.json())
        .then(data => {
            console.log("APIcall")
            mc_status = data.status
            mc_players_now = data.players.now
            mc_players_max = data.players.max
            mc_version = data.server.name
            mc_favicon = data.favicon


        }).catch(error => {
            console.log(error);
            return [];
        });
    };



    

</script>



{#if mc_status === "success"}
        <a class="chip variant-filled" href="https://file.porant.de/s/rGq2xF5EadkcQcK">
            <i class="fa-solid fa-cube" /> _FORGE v{mc_version} porant.de {mc_players_now}/{mc_players_max}
            <span class="chip"><i class="fa-solid fa-download" /></span>
        </a>
{:else}
        <a class="chip variant-filled placeholder" href="https://file.porant.de/s/rGq2xF5EadkcQcK">
            Loading...
            <span class="chip"><i class="fa-solid fa-download" /></span>
        </a>
{/if}
