import App from "./App.svelte";
import { mount } from "svelte";
import { MainWindowRPCType } from "../bun/types";
import { Electroview } from "electrobun/view";
import { navigate } from "svelte-routing";
import "./app.css";

export const electroview = new Electroview({
    rpc: Electroview.defineRPC<MainWindowRPCType>({
        handlers: {
            requests: undefined,
            messages: {
                navigate: (data) => {
                    console.log("Received navigate message:", data.key);
                    switch (data.key) {
                        case "home":
                            navigate("/");
                            break;
                        case "back":
                            window.history.back();
                            break;
                        case "forward":
                            window.history.forward();
                            break;
                    }
                },
            },
        },
    }),
});

const app = mount(App, {
    target: document.getElementById("app")!,
});

export default app;
