<script lang="ts">
  import Challenge from "../../lib/Challenge.svelte";
</script>

<main>
  <section>
    <h2>Woche 3 - Challenges</h2>
  </section>
  <section>
    <Challenge
      name="Mod 26"
      description={"TODO Beschreibung fehlt: cvpbPGS{arkg_gvzr_V'yy_gel_2_ebhaqf_bs_ebg13_Ncualgvd}"}
      flag={"picoCTF{next_time_I'll_try_2_rounds_of_rot13_Aphnytiq}"}
    />
    <Challenge
      name="Interencdec"
      description={"Wir mögen Basen und so Flag-Format: picoCTF{…}"}
      flag={"picoCTF{caesar_d3cr9pt3d_b204adc6}"}
      file="/week3/enc_dec"
    />
    <Challenge
      name="Can you read the flag?"
      description={"⠏⠊⠉⠕⠉⠞⠋{⠃⠗⠁⠂⠇⠇⠑⠸⠊⠎⠸⠲⠸⠉⠴⠕⠇⠸⠂⠝⠧⠒⠝⠞⠊⠴⠝} - Hinweis: CyberChef ist ein sehr cooles Tool"}
      flag={"picoCTF{bra1lle_is_4_c0ol_1nv3nti0n}"}
    />
    <Challenge
      name="Tux!"
      description="And I would walk 500 miles..."
      flag={"CTFlearn{Linux_Is_Awesome}"}
      file="/week2/tux.jpg"
    />
    <Challenge
      name="Abandoned Place"
      description="Der Schlüssel liegt in der Auflösung."
      flag={"CTFlearn{urban_exploration}"}
      file="/week2/abandonedStreet.jpg"
    />
    <Challenge
      name="New Caesar"
      description={"Eine ganz neue Art der Verschlüsselung! Setze deine Entzifferung am Ende in picoCTF{…}. mlnklfnknljflfjljnjijjmmjkmljnjhmhjgjnjjjmmkjjmijhmkjhjpmkmkmljkjijnjpmhmjjgjj  (TODO fehlt hier die Python Datei?"}
      flag={"picoCTF{et_tu?_1ac5f3d7920a85610afeb2572831daa8}"}
    />
  </section>
</main>

<style>
</style>
