<script lang="ts">
  import Fa from "svelte-fa";
  import { faDownload } from "@fortawesome/free-solid-svg-icons";
</script>

<main>
  <section>
    <h2>Woche 2</h2>
    <ul>
      <li>Terminal</li>
      <li>
        Terminal Challenge
        <a
          href="/week2/terminal-challenge.zip"
          download={"/week2/terminal-challenge.zip".split("/").at(-1)}
          class="download-btn button"><Fa icon={faDownload} /></a
        >
      </li>
      <li>Forensics</li>
    </ul>
  </section>
  <section>
    <a class="button-style-link" href="#/week2/cheat-sheet">Cheat Sheets</a>

    <a class="button-style-link" href="#/week2/challenges">Challenges</a>

    <a class="button-style-link" href="http://172.20.20.10/" target="_blank">Zum Terminal</a>
  </section>
</main>

<style>
</style>
