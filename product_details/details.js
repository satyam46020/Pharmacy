
let getDetails =[];
getDetails.push(JSON.parse(localStorage.getItem("details")));
getDetails.forEach(val => {
    const image=document.querySelectorAll(".pic");
    image.forEach((bg)=>(bg.setAttribute("src", val.image)));
    const title=document.getElementById("name");
    title.textContent=val.name;
    const cost=document.querySelector("#price");
    cost.textContent=` ₹ ${val.price}`;
    // const strikedOffPrice=document.querySelector("s");
    // strikedOffPrice.textContent=`₹ ${Math.round(val.price + val.price*(val.discount/100))}`
    // const off=document.querySelector(".offer");
    // off.textContent=`(${val.discount} % Off)`
    // console.log(val);
    const fpt=document.querySelector(".fpt");
    const Spt=document.querySelector(".Spt");
    const Thpt=document.querySelector(".Thpt");
    fpt.textContent=`Maximum Retail Price: ₹ ${val.price} (Incl. of all taxes)`
    Spt.textContent=`Discount:  ${val.discount}% OFF`
    Thpt.textContent=`Selling Price:  ₹ ${Math.round(val.price + val.price*(val.discount/100))} (Incl. of all taxes)`
    const problem=document.querySelector(".problem");
    problem.textContent=val.problem;
    const description=document.querySelector(".product-detailsP");

    description.textContent=val.description;
    const AddToCart=document.querySelector("#bag");


    AddToCart.addEventListener("click",function(){
        addingToCart(val,this);
        // bagtot();
      })
 
    const wishBtn=document.querySelector("#wish");
    wishBtn.addEventListener("click",function(){
        wishBtn.classList.toggle("wish");
        console.log("hey")
    })
});

let items = JSON.parse(localStorage.getItem("cartData")) || [];
var sel_quantity=document.querySelector(".sel_quantity")
    sel_quantity.addEventListener("click",fn)
    function fn(){
    for(var i=1;i<=5;i++)
    {
      if(sel_quantity.innerHTML==i)
      {
        currFav.quantity==i
      }

    }}
function addingToCart(val,a){
    // const AddToCart=document.querySelector("button");
   const existingItem = items.find(item => item.name === val.name);
   if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1)+1;
  
   }
   else {
    const currFav = {
      image: val.img_url,
      name: val.name,
      price: val.price,
      problem: val.problem,
      product_form: val.product_form,
      quantity: 1, // Initialize quantity to 1 for new items
    };
    var sel_quantity=document.querySelector(".sel_quantity")
    sel_quantity.addEventListener("click",fn)
    function fn(){
    for(var i=1;i<=5;i++)
    {
      if(sel_quantity.innerHTML==i)
      {
        currFav.quantity==i
      }

    }}
    items.push(currFav);
    a.textContent="Added!";
    bagtot();
  }
         
  
     localStorage.setItem("cartData", JSON.stringify(items));
  }
  bagtot();
  function bagtot(){
  localStorage.setItem("cartTotalBag", JSON.stringify(items.length));
  var bagTotal = JSON.parse(localStorage.getItem("cartTotalBag"));
  if (bagTotal > 0) {
    var cartCurrentItemShow = document.getElementById("cartCurrentItemShow");
    cartCurrentItemShow.setAttribute("class", "desktop-badge desktop-melon");
    document.getElementById("cartCurrentItemShow").innerText = bagTotal;

    localStorage.setItem("cartTotalBag", JSON.stringify(bagTotal));
  }
}