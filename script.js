const apiUrl = "http://api.screenshotlayer.com/api/capture?access_key=85f73396c55c387bb5bffa86214aed1e";

const screenShot = document.getElementById("captureScreen");


document.getElementById("capture").addEventListener("click", async () => {
    const urlText = document.getElementById("urlText").value;
    try {
        const response = await fetch(`${apiUrl}&url=${urlText}&viewport=1440x900&width=250`);
        if (response.ok) {
            const screenshotUrl = await response.json();
            const str = `<img src="${screenshotUrl}" class="img-fluid" alt="url-screenshot"></img>`;
            screenShot.innerHTML = str;
        } else {
            console.error("failed to fetch screenshot");
        }
    } catch (error) {
        console.error(error)
    }
});

app.use(cors());