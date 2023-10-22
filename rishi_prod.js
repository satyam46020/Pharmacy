
let url = `https://apilink-ldn3.onrender.com`;
let urlProduct = `https://apilink-ldn3.onrender.com/Products`;


let mainSection = document.getElementById("right");
let paginationWrapper = document.getElementById("pagination-wrapper");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let liquid = document.getElementById("liquid");
let soap = document.getElementById("soap");
let tablet = document.getElementById("tablet");
let cream = document.getElementById("cream");
let syrup = document.getElementById("syrup");
let acidity = document.getElementById("acidity");
let immunity = document.getElementById("immunity");
let diabetes = document.getElementById("diabetes");

liquid.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`product_form=liquid`)
})

tablet.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`product_form=tablets`)
})

cream.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`product_form=cream`)
})

syrup.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`product_form=strips`)
})

acidity.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`problem=Acidity`)
})

immunity.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`problem=Immunity`)
})

diabetes.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`problem=Diabetes`)
})

soap.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`product_form=soap`)
})


sortAtoZBtn.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`_sort=price&_order=asc`);
  })
  sortZtoABtn.addEventListener("click",()=>{
    fetchData(`${urlProduct}?_page=1&_limit=6`,`_sort=price&_order=desc`);
  })

async function fetchData(url,quaryParams =""){
    try{
     console.log(url+"&"+quaryParams);
  
     let res = await fetch(url+"&"+quaryParams)
      pagination(res.headers.get("X-Total-count"),5,quaryParams);
     console.log("Total items:-" + res.headers.get("X-Total-count"));
     let data = await res.json();
     console.log(data);
     displayData(data);
    }
  
   catch(err){
   console.log(err);
   }
   }
  
  
  fetchData(`${urlProduct}?_page=1&_limit=6`);
  
  function pagination(total,limit,quaryParams){
     let totalpage = Math.ceil(total/limit);
      paginationWrapper.innerHTML="";
  
     for(let i=1;i<=totalpage;i++){
       let btn = document.createElement("button");
       btn.className = "pagination-button";
    //    btn.dataset.id = i;
       btn.innerHTML = i;
       btn.addEventListener("click",()=>{
         fetchData(`${urlProduct}?_page=${i}&_limit=6`,quaryParams)
            paginationWrapper.append(btn);
       })
       paginationWrapper.append(btn);
     }
  
   }
  
   function displayData(data){
   mainSection.innerHTML="";
   let outer = document.createElement("div");
   outer.setAttribute("class","card-list");
  
  data.map((item)=>{
  
    let card = document.createElement("div");
    card.setAttribute("class","card");
    
  
    let cardImg = document.createElement("div");
    cardImg.setAttribute("class","card-img");
    cardImg.addEventListener("click",()=>{
        window.location.href = "desc.html";
    })
  
    let image = document.createElement("img");
  
    image.setAttribute("alt","art");
    image.src = `${item.image}`;
  
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");
  
    let h5 = document.createElement("h5");
    h5.setAttribute("class","card-title");
    h5.textContent = ` ${item.name}`;
  
  
    let cprice = document.createElement("p");
    cprice.setAttribute("class","card-price");
    cprice.textContent = item.price;
  
    
  
    let a = document.createElement("button");
    a.setAttribute("class","card-link");
    
   
    a.textContent = "Add To Cart";
    a.addEventListener("click",()=>{
        addToCart(item);
    })
  
 
    cardImg.append(image);
    cardBody.append(h5,cprice,a);
    card.append(cardImg,cardBody);
    outer.append(card);
    mainSection.append(outer);
    
  
  })

   }

   var cart = JSON.parse(localStorage.getItem('cart')) || []
//    var wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

function addToCart(Element){
    cart.push(Element)
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(Element)
}

// function addToWishlist(Element){
//     wishlist.push(Element)
//     localStorage.setItem("wishlist", JSON.stringify(wishlist))
// }

// navbar

let nav_button=document.getElementById("nav_btn");

nav_button.addEventListener("click",function(){
    window.location.href="index.html";
});

let cart_icon=document.querySelector("i");

cart_icon.addEventListener("click",function(){
    window.location.href="cart.html";
});


