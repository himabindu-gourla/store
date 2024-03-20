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
