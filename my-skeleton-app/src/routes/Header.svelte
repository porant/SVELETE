<script lang="ts">
	import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

    export let menu_value:number;


</script>

<header>
    <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
        <RadioItem bind:group={menu_value} name="justify" value={0}>ANIM</RadioItem>
	    <RadioItem bind:group={menu_value} name="justify" value={1}>HOME</RadioItem>
	    <RadioItem bind:group={menu_value} name="justify" value={2}>DEV</RadioItem>    
    </RadioGroup>
</header>


<style>
    header {
        z-index: 7;
        position: fixed;
        display: flex;
        justify-content: center;
        top: 30px;
        width: 100%;
        padding: 10px;
    }
    

</style>