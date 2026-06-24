<script lang="ts">
    import { navigate } from "svelte-routing";
    import { electroview } from "../main";

    async function checkIfItIsInstalled() {
        const res = await electroview.rpc?.request.check_is_installed({ appName: "ollama" });
        window.alert(`Is Ollama installed? ${res?.isInstalled}`);
    }

    function fireNotification() {
        electroview.rpc?.send.trigger_native_notification({
            title: "Task Completed!",
            body: "Your background compilation completed successfully.",
        });
    }
</script>

<div class="min-h-screen bg-[linear-gradient(135deg,#ff3e00_0%,#ff6b35_100%)] px-5 py-10">
    <div class="mx-auto max-w-200">
        <h1 class="mb-2 text-center text-5xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
            Svelte + Electrobun
        </h1>
        <p class="mt-0 mb-10 text-center text-xl text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
            A fast desktop app with hot module replacement
        </p>

        <div class="mb-5 rounded-xl bg-white p-7.5 shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
            <h2 class="mt-0 mb-3.75 text-[#ff3e00]">Some Functionality</h2>
            <div class="mt-5 flex gap-3">
                <button
                    class="cursor-pointer rounded-lg border-none bg-[#ff3e00] px-6 py-3 text-base font-medium text-white shadow-[0_2px_4px_rgba(255,62,0,0.3)] transition-all duration-200 ease-in hover:-translate-y-px hover:bg-[#e63600] hover:shadow-[0_4px_8px_rgba(255,62,0,0.4)]"
                    onclick={checkIfItIsInstalled}
                >
                    Check if Ollama is installed
                </button>
                <button
                    class="cursor-pointer rounded-lg border-none bg-[#ff3e00] px-6 py-3 text-base font-medium text-white shadow-[0_2px_4px_rgba(255,62,0,0.3)] transition-all duration-200 ease-in hover:-translate-y-px hover:bg-[#e63600] hover:shadow-[0_4px_8px_rgba(255,62,0,0.4)]"
                    onclick={() => navigate("/about")}
                >
                    Go to About Page
                </button>
                <button
                    class="cursor-pointer rounded-lg border-none bg-[#ff3e00] px-6 py-3 text-base font-medium text-white shadow-[0_2px_4px_rgba(255,62,0,0.3)] transition-all duration-200 ease-in hover:-translate-y-px hover:bg-[#e63600] hover:shadow-[0_4px_8px_rgba(255,62,0,0.4)]"
                    onclick={fireNotification}
                >
                    Send Desktop Notification
                </button>
            </div>
        </div>

        <div class="mb-5 rounded-xl bg-white p-7.5 shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
            <h2 class="mt-0 mb-3.75 text-[#ff3e00]">Getting Started</h2>
            <ul class="m-0 list-none p-0">
                <li class="flex items-start gap-2.5 py-2.5 text-[#666]">
                    <span class="font-bold text-[#ff3e00]">1.</span>
                    Run
                    <code class="rounded bg-[#f5f5f5] px-2 py-0.5 font-mono text-[0.9em] text-[#555]">bun run dev</code>
                    for development without HMR
                </li>
                <li class="flex items-start gap-2.5 py-2.5 text-[#666]">
                    <span class="font-bold text-[#ff3e00]">2.</span>
                    Run
                    <code class="rounded bg-[#f5f5f5] px-2 py-0.5 font-mono text-[0.9em] text-[#555]"
                        >bun run dev:hmr</code
                    > for development with hot reload
                </li>
                <li class="flex items-start gap-2.5 py-2.5 text-[#666]">
                    <span class="font-bold text-[#ff3e00]">3.</span>
                    Run
                    <code class="rounded bg-[#f5f5f5] px-2 py-0.5 font-mono text-[0.9em] text-[#555]"
                        >bun run build</code
                    > to build for production
                </li>
            </ul>
        </div>

        <div class="mb-5 rounded-xl bg-white p-7.5 shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
            <h2 class="mt-0 mb-3.75 text-[#ff3e00]">Stack</h2>
            <div class="grid grid-cols-4 gap-3.75 max-[600px]:grid-cols-2">
                <div class="rounded-lg bg-[#fafafa] px-2.5 py-5 text-center">
                    <span class="mb-2 block text-2xl">⚡</span>
                    <span>Electrobun</span>
                </div>
                <div class="rounded-lg bg-[#fafafa] px-2.5 py-5 text-center">
                    <span class="mb-2 block text-2xl">🔶</span>
                    <span>Svelte 5</span>
                </div>
                <div class="rounded-lg bg-[#fafafa] px-2.5 py-5 text-center">
                    <span class="mb-2 block text-2xl">🔥</span>
                    <span>Vite HMR</span>
                </div>
                <div class="rounded-lg bg-[#fafafa] px-2.5 py-5 text-center">
                    <span class="mb-2 block text-2xl">📦</span>
                    <span>Bun</span>
                </div>
            </div>
        </div>
    </div>
</div>
