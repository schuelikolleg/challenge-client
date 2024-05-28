<script lang="ts">
  import Fa from 'svelte-fa';
  import { faLink, faDownload } from '@fortawesome/free-solid-svg-icons'


  import { push } from "svelte-spa-router";

  export let name: string;
  export let description: string = "";
  export let link: string = "";
  export let flag: string;
  export let file: string = "";

  let inFlag = "";
  let incorrect = false;

  function submit() {
    if (inFlag.trim() === flag) {
      push("#/platypus");
    } else {
      incorrect = true;
      setTimeout(() => {
        incorrect = false;
      }, 3000);
    }
  }
</script>

<div>
  <div>
    <a><h3>{name}</h3></a>
    {#if link !== ""}
      <a href={link} target="_blank">
        <Fa icon="{faLink}" />
      </a>
    {/if}
    {#if file !== ""}
      <a
        href={file}
        download={file.split("/").at(-1)}
        class="download-btn button"><Fa icon="{faDownload}" /></a
      >
    {/if}
  </div>

  <div class:challenge-border={description !== ""} class="challenge">
    {#if description !== ""}
      <p>
        {description}
      </p>
    {/if}
    <form class="form">
      <input type="text" placeholder="Enter flag" bind:value={inFlag} />
      <button type="submit" on:click={submit}>Submit</button>
    </form>
    <div class:hidden={!incorrect} class="error">INCORRECT FLAG</div>
  </div>
</div>

<style>
  .download-btn {
    align-items: center;
    justify-content: center;
    padding: 12px 19px 12px 12px;
    cursor: pointer;
    font-size: 20px;
  }
</style>
