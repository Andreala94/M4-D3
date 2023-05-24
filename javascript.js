const ApiUrl = "https://api.pexels.com/v1";
const APIKey = "Nzko9a1jt52L7mcLauKoRCRApQDhFHcIlaMI1clvwRxXYz1RTG0TLWnX";
const card = document.getElementById("main")


// //! 1) fare chiamata ajax

// const getAlbum = () =>{
//     fetch(ApiUrl + "/search?query=TRAVEL", {
//         headers: {
//              Authorization: APIKey }
//     })
//    .then((res) => {
//     return res.json()
//    })
//    .then((res2) => {
//     console.log(res2.photos)
//    })
//    .catch((err) =>{console.log("Hai un errore:" + err)});
    
// }
// getAlbum();
const apiurl = "https://api.pexels.com/v1";
const apiKey = "Nzko9a1jt52L7mcLauKoRCRApQDhFHcIlaMI1clvwRxXYz1RTG0TLWnX";
const albumContainer = document.getElementById("album-container");

// problema 2) fare chiamata ajax

const getAlbum = () => {
    return fetch(apiurl + "/search?query=travel", {
        headers: {
            Authorization: apiKey 
        }
    })
        .then((res) => {
            return res.json()
    })
        .then((res2) => {
            albumCard(res2.photos)
        })
        .catch((err) => {console.error("Hai un errore: " + err)});
}


// //! 2) funzione creare un dom con gli oggetti degli api

// const albumCard = (photos) => {
    
//    photos.forEach(photo => {
//     const img = document.createElement("img");
//         img.src = photo.src.small;
//         card.appendChild(img)
        
//    });   
    

// }


//problema 1) funzione creare un DOM con gli oggetti degli API

const albumCard = (photos) => {
    console.log(photos)
    photos = photos.filter (item => {return item.width <= 4000} )
    const domElements = photos.map(photo => {
      //  console.log(photo);
      const img = document.createElement("img");
      img.src = photo.src.small;
      //albumContainer.appendChild(img);
      return img
    });
    console.log(domElements)
    //albumContainer.append(domElements[0], domElements[1], domElements[2])
    albumContainer.append(...domElements)
}



getAlbum();

  