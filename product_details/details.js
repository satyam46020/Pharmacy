
let getDetails =[];
getDetails.push(JSON.parse(localStorage.getItem("details")));
getDetails.forEach(val => {
    const image=document.querySelectorAll(".pic");
    image.forEach((bg)=>(bg.setAttribute("src", val.image)));
    const title=document.getElementById("name");
    title.textContent=val.name;
    const cost=document.querySelector("#price");
    cost.textContent=` ₹ ${val.price}`;
    const fpt=document.querySelector(".fpt");
    const Spt=document.querySelector(".Spt");
    const Thpt=document.querySelector(".Thpt");
    fpt.textContent=`Maximum Retail Price: ₹ ${val.price} (Incl. of all taxes)`
    Spt.textContent=`Discount:  ${val.discount}% OFF`
    Thpt.textContent=`Selling Price:  ₹ ${Math.round(val.price + val.price*(val.discount/100))} (Incl. of all taxes)`
    const problem=document.querySelector(".problem");
    problem.textContent=val.problem;
    const foot=document.querySelector(".foot");
    foot.textContent=val.problem;
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
function addingToCart(val,a){
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
      quantity: 1,
    };
    
    items.push(currFav);
    a.textContent="Added!";
    bagtot();
    document.getElementById("num1").addEventListener("click", function () {
      var num = parseInt(event.target.innerText);
      multiplyQty(element, num, getDetails, i);
})
document.getElementById("num2").addEventListener("click", function () {
    var num = parseInt(event.target.innerText);
    multiplyQty(element, num, getDetails, i);
})
document.getElementById("num3").addEventListener("click", function () {
    var num = parseInt(event.target.innerText);
    multiplyQty(element, num, getDetails, i);
  })
  document.getElementById("num4").addEventListener("click", function () {
    var num = parseInt(event.target.innerText);
    multiplyQty(element, num, getDetails, i);
  })
  document.getElementById("num5").addEventListener("click", function () {
    var num = parseInt(event.target.innerText);
    multiplyQty(element, num, getDetails, i);
  })
  
}
  function multiplyQty(element, num, getDetails, i) {
    var num1 = parseInt(getDetails[i].quantity);
    getDetails[i].quantity = num;
    var price = parseInt(getDetails[i].price);
    
    document.getElementById("price").innerText = price * num;
    
    var strikedOffPrice = parseInt(getDetails[i].strikedOffPrice);
    
    document.getElementById("strikedOffPrice").innerText = strikedOffPrice * num;
    localStorage.setItem("cartData", JSON.stringify(getDetails));
    console.log(totalamt + "totalamtqty");
    displayData(getDetails);

    element = {};
    index = 0;
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