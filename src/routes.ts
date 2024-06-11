import Home from "./routes/Home.svelte"
import CheatSheet from "./routes/CheatSheet.svelte";

import Week1 from "./routes/week1/Week1.svelte";
import ChallengesW1 from "./routes/week1/Challenges.svelte";

import Week2 from "./routes/week2/Week2.svelte";
import ChallengesW2 from "./routes/week2/Challenges.svelte";

import Week3 from "./routes/week3/Week3.svelte";
import ChallengesW3 from "./routes/week3/Challenges.svelte";

import Platypus from "./routes/Platypus.svelte";

const routes = {
    "/": Home,
    "/platypus": Platypus,
    "/cheat-sheet": CheatSheet,

    "/week1": Week1,
    "/week1/challenges": ChallengesW1,

    "/week2": Week2,
    "/week2/challenges": ChallengesW2,

    "/week3": Week3,
    "/week3/challenges": ChallengesW3
};

export default routes;
