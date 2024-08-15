const generateStringButton = document.getElementById("generate-button");

generateStringButton.addEventListener("click", () => {
    const worker = new Worker("./workers/generator-worker.js");
    worker.postMessage({});
    worker.addEventListener("message", (e) => {
        const generatorInfo = document.getElementById("generator-info");
        generatorInfo.textContent = e.data;
        worker.terminate();
    });
});
