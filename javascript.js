 //! 1) fare chiamata ajax


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
            console.log(res2)
        })
        .catch((err) => {console.error("Hai un errore: " + err)});
}


// //! 2) funzione creare un dom con gli oggetti degli api

const albumCard = (photos) => {
    let row = document.createElement("div")
    row.classList.add("row")
    albumContainer.appendChild(row)
   
    
    
   photos.forEach(photo => {
    let col = document.createElement("div")
    col.classList.add("col-md-3")
    let card = document.createElement("card")
    card.classList.add("card")

    let img = document.createElement("img");
        img.src = photo.src.small;
        card.appendChild(img)
        col.appendChild(card)
        row.appendChild(col)
   });   
    

}

getAlbum();







//problema 1) funzione creare un DOM con gli oggetti degli API

// const albumCard = (photos) => {
//     console.log(photos)
//     photos = photos.filter (item => {return item.width <= 4000} )
//     const domElements = photos.map(photo => {
//       //  console.log(photo);
//       const img = document.createElement("img");
//       img.src = photo.src.small;
//       //albumContainer.appendChild(img);
//       return img
//     });
//     console.log(domElements)
//     //albumContainer.append(domElements[0], domElements[1], domElements[2])
//     albumContainer.append(...domElements)
// }





  