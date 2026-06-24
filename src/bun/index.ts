import Electrobun, { ApplicationMenu, BrowserView, BrowserWindow, Updater, Utils } from "electrobun/bun";
import { MainWindowRPCType } from "./types";

const DEV_SERVER_PORT = 5173;
const DEV_SERVER_URL = `http://localhost:${DEV_SERVER_PORT}`;

// Check if Vite dev server is running for HMR
async function getMainViewUrl(): Promise<string> {
    const channel = await Updater.localInfo.channel();
    if (channel === "dev") {
        try {
            await fetch(DEV_SERVER_URL, { method: "HEAD" });
            console.log(`HMR enabled: Using Vite dev server at ${DEV_SERVER_URL}`);
            return DEV_SERVER_URL;
        } catch {
            console.log("Vite dev server not running. Run 'bun run dev:hmr' for HMR support.");
        }
    }
    return "views://mainview/index.html";
}

// Create the main application window
const url = await getMainViewUrl();

export const mainWindow = new BrowserWindow({
    title: "Svelte App",
    url,
    frame: {
        width: 900,
        height: 700,
        x: 200,
        y: 200,
    },
    rpc: BrowserView.defineRPC<MainWindowRPCType>({
        handlers: {
            requests: {
                check_is_installed: async (data: { appName: string }) => {
                    console.log("Received check-is-installed:", data.appName, process.platform);
                    const isWin = process.platform === "win32";

                    if (isWin) {
                        // Windows: Query the registry via PowerShell for installed apps
                        const psCommand = `Get-ItemProperty HKLM:\\Software\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\* | Select-Object DisplayName | Where-Object {$_.DisplayName -like '*${appName}*'}`;
                        const proc = Bun.spawn(["powershell", "-Command", psCommand]);
                        const output = await new Response(proc.stdout).text();
                        return { isInstalled: output.trim().length > 0 };
                    } else {
                        // macOS/Linux: Check if the binary exists in the user's PATH or Applications folder
                        const proc = Bun.spawn(["which", data.appName]);
                        const exitCode = await proc.exited;

                        // On Mac, you can also check the /Applications folder directly
                        if (process.platform === "darwin" && exitCode !== 0) {
                            const macProc = Bun.spawn(["ls", "/Applications"]);
                            const macOutput = await new Response(macProc.stdout).text();
                            return { isInstalled: macOutput.toLowerCase().includes(data.appName.toLowerCase()) };
                        }

                        return { isInstalled: exitCode === 0 };
                    }
                },
            },
            messages: {
                trigger_native_notification: async (data: { title: string; body?: string }) => {
                    console.log("Received trigger-native-notification:", data.title, data.body);
                    Utils.showNotification({
                        title: data.title,
                        body: data.body || "",
                        silent: false,
                    });
                },
            },
        },
    }),
});

ApplicationMenu.setApplicationMenu([
    {
        submenu: [{ label: "Quit", role: "quit" }],
    },
    {
        label: "Navigate",
        submenu: [
            {
                label: "Go Home",
                action: "navigate-go-home",
                tooltip: "Go to the Home page",
            },
            {
                label: "Go Back",
                action: "navigate-go-back",
                tooltip: "Go back to the previous page",
            },
            {
                label: "Go Forward",
                action: "navigate-go-forward",
                tooltip: "Go forward to the next page",
            },
            { type: "separator" },
        ],
    },
]);

Electrobun.events.on("application-menu-clicked", (e) => {
    switch (e.data.action) {
        case "navigate-go-home":
            mainWindow.webview.rpc?.send.navigate({ key: "home" });
            break;
        case "navigate-go-back":
            mainWindow.webview.rpc?.send.navigate({ key: "back" });
            break;
        case "navigate-go-forward":
            mainWindow.webview.rpc?.send.navigate({ key: "forward" });
            break;
        default:
            console.log("Unknown action:", e.data.action);
    }
});
