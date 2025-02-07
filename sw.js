self.addEventListener("install", (event) => {
    console.log("Service Worker Installed");
});

self.addEventListener("fetch", (event) => {
    // Can be used for caching if needed
});
