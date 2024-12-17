<script lang="ts">
    import MyApps from "./MyApps.svelte";
</script>

<header>
    <MyApps />
</header>


<style>
    header {
        z-index: 7;
        position: absolute;
        display: flex;
        justify-content: center;
        top: 10px;
        width: 100%;
        padding: 10px;
    }
    

</style>