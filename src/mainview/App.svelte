<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import About from "./pages/About.svelte";

    export let url = "/";
</script>

<Router {url}>
    <Route path="/about"><About /></Route>
    <Route path="/"><Home /></Route>
</Router>
