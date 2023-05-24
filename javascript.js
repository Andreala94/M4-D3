const ApiUrl = "https://api.pexels.com/v1";
const APIKey = "Nzko9a1jt52L7mcLauKoRCRApQDhFHcIlaMI1clvwRxXYz1RTG0TLWnX";
let main = document.getElementById("main")


//! 1) fare chiamata ajax

const getAlbum = () =>{
    fetch(ApiUrl + "/search?query=TRAVEL", {
        headers: {
             Authorization: APIKey }
    })
   .then((res) => {
    return res.json()
   })
   .then((res2) => {
    console.log(res2.photos)
   })
   .catch((err) =>{console.log(err)});
    
}
getAlbum();

//! 2) funzione creare un dom con gli oggetti degli api

function albumCard(input) {
    console.log(input);
    for ( const photo of input){
        let img = document.createElement("img");
        img.innerHTML = resjson.APIKey.img;
        img.appendChild(img)
        // img.src = photo.src.medium;
        // document.main.appendChild(img);
    }

}