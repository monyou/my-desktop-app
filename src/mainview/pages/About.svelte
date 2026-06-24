<script>
    import { link } from "svelte-routing";
</script>

<div class="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
    <!-- Hero Section -->
    <div class="relative overflow-hidden pt-20 pb-28">
        <div class="absolute inset-0 opacity-10">
            <div
                class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
            ></div>
            <div
                class="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
            ></div>
        </div>

        <div class="relative max-w-6xl mx-auto px-6 text-center">
            <h1 class="text-6xl font-bold text-white mb-6 tracking-tight">About Our Application</h1>
            <p class="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                A modern desktop application built with cutting-edge technologies
            </p>
        </div>
    </div>

    <!-- Features Section -->
    <div class="max-w-6xl mx-auto px-6 py-20">
        <h2 class="text-4xl font-bold text-white text-center mb-16">Key Features</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div
                class="group bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300 transform hover:-translate-y-1"
            >
                <div
                    class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition"
                >
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                <p class="text-slate-400">Optimized performance for seamless user experience</p>
            </div>

            <!-- Feature 2 -->
            <div
                class="group bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition duration-300 transform hover:-translate-y-1"
            >
                <div
                    class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition"
                >
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-3">Secure</h3>
                <p class="text-slate-400">Enterprise-grade security for your peace of mind</p>
            </div>

            <!-- Feature 3 -->
            <div
                class="group bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-pink-500 transition duration-300 transform hover:-translate-y-1"
            >
                <div
                    class="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-600 transition"
                >
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-3">Beautiful Design</h3>
                <p class="text-slate-400">Stunning UI with intuitive user interface</p>
            </div>
        </div>
    </div>

    <!-- Team Section -->
    <div class="max-w-6xl mx-auto px-6 py-20">
        <h2 class="text-4xl font-bold text-white text-center mb-16">Our Team</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each Array(4) as _, i (i)}
                <div
                    class="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition"
                >
                    <div class="w-full h-40 bg-linear-to-br from-blue-500 to-purple-600"></div>
                    <div class="p-6 text-center">
                        <h3 class="text-lg font-semibold text-white mb-1">Team Member</h3>
                        <p class="text-sm text-slate-400 mb-4">Developer</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Footer -->
    <div class="border-t border-slate-700 bg-slate-900 py-12 px-6">
        <div class="max-w-6xl mx-auto text-center text-slate-400">
            <p>&copy; 2024 My Desktop App. All rights reserved.</p>
            <div class="flex justify-center gap-6 mt-4">
                <a href="/" use:link class="hover:text-white transition">Home</a>
            </div>
        </div>
    </div>
</div>
