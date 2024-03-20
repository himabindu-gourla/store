function navSlide(){
  const nav = document.querySelector(".navbar");
  const menu = document.querySelector(".mainMenu");
  const burger = document.querySelector(".burger");


  burger.addEventListener("click",()=>{
    menu.classList.toggle("nav-active");


    burger.classList.toggle("toggle")
  })
}

navSlide();

// function createData(data) {
  
//     const {title,price,image,description} = data
// //   const cardData = {
// //     imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// //     heading: "Luggage bag",
// //     description: "it is made up of leather ",
// //   };
//   // Create card element
//   const card = document.createElement("div");
//   card.classList.add("card");

//   // Create image element
//   const imageEl = document.createElement("img");
//   imageEl.src = image;
//   card.appendChild(imageEl);

//   // Create heading element
//   const heading = document.createElement("h2");
//   heading.textContent = title;
//   card.appendChild(heading);

//   // Create description element
//   const descriptionEl = document.createElement("p");
//   descriptionEl.textContent = description;
//   card.appendChild(descriptionEl);

//   const priceEl = document.createElement("p");
//   priceEl.textContent = price;
//   card.appendChild(priceEl);

//   // Append card to container
//   const cardContainer = document.getElementById("cardContainer");
//   cardContainer.appendChild(card);
// }

// const fetchingData = function () {
// const url = "https://fakestoreapi.com/products";
// const productsData = fetch(url);
// productsData
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     for(let i=0;i<data.length;i++){
//       createData(data[i])
//     }
//   });
// };
// fetchingData()

// Function to display cards
// function displayCards(startIndex, count) {
//     for (let i = startIndex; i < startIndex + count; i++) {
//         if (i >= data.length) {
//             loadMoreBtn.style.display = "none";
//             break;
//         }
//         const card = document.createElement("div");
//         card.classList.add("card");
//         card.innerHTML = `
//         <img>${data[i].image}</img>
//                 <h2>${data[i].title}</h2>
//                 <p>${data[i].description}</p>
//                 <p>${data[i].price}</p>
           
//         `;
//         cardContainer.appendChild(card);
//     }
// }


// function displayCards(data) {
//   data.forEach(item => {
//       const card = document.createElement("div");
//       card.classList.add("card");
//       card.innerHTML = `
//           <img>${item.image}</img>
//           <h2>${item.title}</h2>
//           <p>${item.description}</p>
//           <p>${item.price}</p>

//       `;
//       cardContainer.appendChild(card);
//   });
// }


// let currentIndex = 0;
// const cardsPerLoad = 5;

// displayCards(currentIndex, cardsPerLoad);
// currentIndex += cardsPerLoad;

//  const loadmoreEl=document.getElementById("loadmore");
//  loadMoreBtn.addEventListener("click", function() {
//   displayCards(currentIndex, cardsPerLoad);
//   currentIndex += cardsPerLoad;
// });
const cardContainer = document.getElementById("cardContainer");

const loadmoreEl=document.getElementById("loadmore");

  const url = "https://fakestoreapi.com/products";
  let start=0;
  let itemsPerPage=5;
const fetchingData = function () {
  
  const productsData = fetch(url);
  productsData
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    
      for(let i=start;i<start+itemsPerPage;i++)
      {
        if(i<data.length){
          let item=data[i];
          let box=document.createElement("div");
          box.classList.add("box");
          let img=document.createElement("img");
          img.classList.add("image");
          img.src=item.image;
          box.appendChild(img);
          let heading=document.createElement("h2");
          heading.classList.add("title");
          heading.textContent=item.title;
          box.appendChild(heading);
          let descriptionEl=document.createElement("p");
          descriptionEl.classList.add("description");
          descriptionEl.textContent=item.description;
          box.appendChild(descriptionEl);
          let priceEl = document.createElement("p");
          priceEl.classList.add("price");
          priceEl.textContent=item.price;
          box.appendChild(priceEl);
          cardContainer.appendChild(box);
        }
        else{
          loadmoreEl.style.display="none";
           break; 

        }

      
      }
      start=start+itemsPerPage;


    })
    .catch((error)=>{
      console.log(error);
    })
    loadmoreEl.addEventListener('click',fetchingData)
};
fetchingData()
