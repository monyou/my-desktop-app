export type MainWindowRPCType = {
    bun: {
        requests: {
            check_is_installed: {
                params: {
                    appName: string;
                };
                response: Promise<{ isInstalled: boolean }>;
            };
        };
        messages: {
            trigger_native_notification: {
                title: string;
                body?: string;
            };
        };
    };
    webview: {
        requests: {};
        messages: {
            navigate: {
                key: "home" | "back" | "forward";
            };
        };
    };
};
