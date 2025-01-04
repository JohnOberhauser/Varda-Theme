console.error("varda extension running");

const port = browser.runtime.connectNative("io.obez.varda_native_host");

port.onMessage.addListener((message) => {
    console.error("Received from native app:", message);
});

port.onDisconnect.addListener(() => {
    console.error("Disconnected from native app.");
});

// Send a message to the native app
port.postMessage({ action: "greet" });
