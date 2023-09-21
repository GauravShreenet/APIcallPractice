const apiUrl = "http://api.screenshotlayer.com/api/capture?access_key=85f73396c55c387bb5bffa86214aed1e";


// let captureUrl = [];

// const fetchScreen = async (url) => {
//     try {
//         const dt = await fetch(url);
//         const data = await dt.json();
//         captureUrl = data.results;
        
//     }catch{
//         console.log(error);
//     }
// }
    let str = ""

    const screenShot = document.getElementById("captureScreen");
    const urlText = document.getElementById("urlText").value;

    document.getElementById("capture").addEventListener("click", () => {
        str = `<img src="${apiUrl}&url=${urlText}" class="img-fluid" alt="url-screenshot"></img>`

        screenShot.innerHTML = str;
    });

    
