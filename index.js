if ("serviceWorker" in navigator) {
    navigator.serviceWorker("sw.js").then(registration => {
        console.log("SW Registered");
        console.log(registration);
    }).catch(error => {
        console.log("SW registration failed");
        console.log(error)
    })
}