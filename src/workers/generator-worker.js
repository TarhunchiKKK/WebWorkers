function generateString() {
    let result = "";
    for (let i = 0; i < 100; i++) {
        result += String(Math.floor(Math.random() * 9));
    }
    return result;
}

self.addEventListener("message", () => {
    const result = generateString();
    self.postMessage(result);
});
