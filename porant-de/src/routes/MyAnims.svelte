<script lang="ts">
    import {
		fade,
		fly,
	} from 'svelte/transition';

    class Anim {
        name = "";
        animation = "";
        text = "";
        link = "";

        constructor (name:string,animation:string,text:string,link:string) {
            this.animation = animation;
            this.link = link;
            this.name = name;
            this.text = text;
        }
    }

    const ANIMS = [
        {
            name:"Мастер Игорей",
            animation:"ANIMS/MI BG.mp4",
            text:"",
            link:""
        },
        {
            name:"BLACK CAT",
            animation:"ANIMS/BlackCat.mp4",
            text:"",
            link:""
        },
        {
            name:"Мастер Игорей",
            animation:"ANIMS/STINGER.mp4",
            text:"",
            link:""
        }
    ]

</script>
<section class="card_menu" in:fly={{ y: 200, duration: 2000 }} out:fade>
    {#each ANIMS as anim}
        <div class="block card card-hover p-4">
            <header class="card-header">
                <h1 class="h1">
                    <span class="code">
                        {anim.name}
                    </span>
                    <div>
                        <video src={anim.animation}
                            muted
                            autoplay
                            loop
                        ><track kind="captions" /></video>
                    </div>
                </h1>
            </header>
            <section class="p-4">
                <h4>
                    {anim.text}
                </h4>
            </section>
            {#if anim.link}
            <footer class="card-footer">
                <a href={anim.link} class="btn variant-filled" data-sveltekit-preload-data="hover">Link</a>
            </footer>
            {/if}

        </div>
        
    {/each}
</section>








<style>
    .card_menu {
        display: grid;
        padding: 10px;
    }
    .card {
        margin: 5px;
        text-align: center;
    }

</style>
