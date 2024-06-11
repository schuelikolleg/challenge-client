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
      description={"Das sieht mir Lateinisch aus: cvpbPGS{arkg_gvzr_V'yy_gel_2_ebhaqf_bs_ebg13_Ncualgvd}"}
      flag={"picoCTF{next_time_I'll_try_2_rounds_of_rot13_Aphnytiq}"}
    />
    <Challenge
      name="Interencdec"
      description={"Wir mögen Basen und so \n Flag-Format: picoCTF{…}"}
      flag={"picoCTF{caesar_d3cr9pt3d_b204adc6}"}
      file="/week3/enc_flag"
    />
    <Challenge
      name="Can you read the flag?"
      description={"⠏⠊⠉⠕⠉⠞⠋{⠃⠗⠁⠂⠇⠇⠑⠸⠊⠎⠸⠲⠸⠉⠴⠕⠇⠸⠂⠝⠧⠒⠝⠞⠊⠴⠝}"}
      flag={"picoCTF{bra1lle_is_4_c0ol_1nv3nti0n}"}
    />
    <Challenge
      name="First Greps"
      description={"Ich glaube, da gab es ein Terminal Command, um in Dateien zu suchen."}
      flag={"picoCTF{grep_is_good_to_find_things_dba08a45}"}
      file="/week3/searchMe"
    />
    <Challenge
      name="Where are the robots?"
      description={"Google, Bing & Co sind nicht in der Lage, diese Flag zu finden 😔"}
      flag={"picoCTF{ca1cu1at1ng_Mach1n3s_1bb4c}"}
      link="https://jupiter.challenges.picoctf.org/problem/56830/"
    />
    <Challenge
      name="Empty Text"
      description="Leerzeichen sind nicht gleich Leerzeichen..."
      flag={"CTFlearn{If_y0u_r3/d_thi5_you_pa553d}"}
      file="/week2/TheMessage.txt"
    />
    <Challenge
      name="Tab, Tab, Attack"
      description="Tab-Completion ist schon eine feine Sache"
      flag={"picoCTF{l3v3l_up!_t4k3_4_r35t!_76266e38}"}
      file="/week3/Addadshashanammu.zip"
    />
    <Challenge
      name="Wave a flag"
      flag={"picoCTF{et_tu?_1ac5f3d7920a85610afeb2572831daa8}"}
      file="/week3/warm"
    />
    <Challenge
      name="Rock 'n' roll"
      description="Wir haben einen Song geschrieben! Nur war er in seiner Originalsprache nicht sehr erfolgreich, deswegen haben wir ihn übersetzt."
      flag={"picoCTF{rrrocknrn0113r}"}
      file="/week3/lyrics.txt"
    />
    <Challenge
      name="Tux!"
      description="And I would walk 500 miles..."
      flag={"CTFlearn{Linux_Is_Awesome}"}
      file="/week2/tux.jpg"
    />
    <Challenge
      name="New Caesar"
      description={"Eine ganz neue Art der Verschlüsselung! Setze deine Entzifferung am Ende in picoCTF{…}.\n mlnklfnknljflfjljnjijjmmjkmljnjhmhjgjnjjjmmkjjmijhmkjhjpmkmkmljkjijnjpmhmjjgjj"}
      flag={"picoCTF{b1scu1ts_4nd_gr4vy_30e77291}"}
      file="week3/new_caesar.py"
    />
    <Challenge
      name="Abandoned Place"
      description="Der Schlüssel liegt in der Auflösung."
      flag={"CTFlearn{urban_exploration}"}
      file="/week2/abandonedStreet.jpg"
    />
  </section>
</main>

<style>
</style>
