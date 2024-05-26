import Home from "./routes/Home.svelte"
import ChallengesW1 from "./routes/week1/Challenges.svelte";
import Week1 from "./routes/week1/Week1.svelte";
import Week2 from "./routes/week2/Week2.svelte";
import CheatSheet from "./routes/week2/CheatSheet.svelte";
import ChallengesW2 from "./routes/week2/Challenges.svelte";
import Platypus from "./routes/Platypus.svelte";

const routes = {
    "/": Home,
    "/platypus": Platypus,

    "/week1": Week1,

    "/week2": Week2,
    "/week2/cheat-sheet": CheatSheet,
    "/week2/challenges": ChallengesW2,

    "/challenges": ChallengesW1
};

export default routes;
