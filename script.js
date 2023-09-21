const apiUrl = "http://api.screenshotlayer.com/api/capture?access_key=85f73396c55c387bb5bffa86214aed1e";

let captureUrl = [];

const fetchScreen = async (url) => {
    try {
        const dt = await fetch(url);
        const data = await dt.json();
        captureUrl = data.results;
        
    }catch{
        console.log(error);
    }
}

console.log("http://api.screenshotlayer.com/api/capture?access_key=85f73396c55c387bb5bffa86214aed1e");

// document.getElementById("capture").addEventListener("click", (e) => {
//     const {value} = e.target;


// })