<script lang="ts">
  import Fa from "svelte-fa";
  import { faDownload } from "@fortawesome/free-solid-svg-icons";
</script>

<main>
  <section>
    <h2>Cheat Sheets</h2>
    <ul>
      <li>
        Terminal Commands
        <a
          href="/week2/cheatSheetTerminalCommands.pdf"
          download={"/week2/cheatSheetTerminalCommands.pdf".split("/").at(-1)}
          class="download-btn button"><Fa icon={faDownload} /></a
        >
      </li>
      <li>
        Tools
        <a
          href="/week2/cheatSheetTools.pdf"
          download={"/week2/cheatSheetTools.pdf".split("/").at(-1)}
          class="download-btn button"><Fa icon={faDownload} /></a
        >
      </li>
    </ul>
  </section>
</main>

<style>
</style>
