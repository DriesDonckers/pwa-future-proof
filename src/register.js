const register = (swUrl, config) => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(swUrl, config);
        console.log("registered");
    }
    else {
        console.log("serviceworker not able to be registered");
    }
}

export default register;