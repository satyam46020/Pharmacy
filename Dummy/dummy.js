let data1 = [{

    name : "Zingavita Omega 3 Fish Oil 1000mg for Brain & Joint Health | Soft Gelatin Capsule",
    image : "https://onemg.gumlet.io/images/w_150,c_fit,q_auto,f_auto,h_150/069c103e240f447192f161494b78bf27/zingavita-omega-3-fish-oil-1000mg-for-brain-joint-health-soft-gelatin-capsule.jpg",
    price : 499,
    problem : "Immunity",
    product_form : "tablets"
}]
const ul = document.querySelector('ul');
let allPages = 3;
let liActive;
let pageLength;
let page = 1;

function elem(allPages, page){
    let li = '';

    let beforePages = page - 1;
    let afterPages = page + 1;
    

    if(page > 1){
        li += `<li class="btn" onclick="elem(allPages, ${page-1})" ><i class="fas fa-angle-left"></i></li>`;
    }

    for (pageLength = beforePages; pageLength <= afterPages; pageLength++){

        if(pageLength > allPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }

        if(page == pageLength){
            liActive = 'active';
        }else{
            liActive = '';
        }

        li += `<li class="numb ${liActive}" onclick="elem(allPages, ${pageLength})" ><span class = "active_span">${pageLength}</span></li>`
    }

    if(page < allPages){
        li += `<li class="btn" onclick="elem(allPages, ${page+1})" ><i class="fas fa-angle-right"></i></li>`;
    }

    ul.innerHTML = li;
    if(page == 1){
        showItems(data1)
    }else if(page == 2){
        showItems(data2)
    }else{
        showItems(data3)
    }
}
elem(allPages, page);

const merge = (first, second) => {
    for(let i=0; i<second.length; i++) {
      first.push(second[i]);
    }
    return first;
  }

var filterData1 = merge(merge(data1, data2), data3);
var filterData2 = filterData1
var sort_data = filterData1;
var cart = JSON.parse(localStorage.getItem('cart')) || []
var wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

// showItems(data)

function showItems(data){
    document.getElementById("container").innerHTML = ""
    data.map(function(Element, index){
        var image = document.createElement("img")
        image.setAttribute("src", Element.image)
        image.addEventListener("click",()=>{details(Element)})
        var description = document.createElement("p")
        description.innerHTML = Element.name
        var price = document.createElement("p")
        price.innerHTML = "₹" + Element.price
        var cart = document.createElement("button")
        cart.innerHTML = "Add to cart"
        cart.addEventListener("click", function(){
            addToCart(Element)
        } )
        var wl = document.createElement("button")
        wl.innerHTML = "Add to WishList"
        wl.addEventListener("click", function(){
            addToWishlist(Element)
        } )
        var child = document.createElement("div")
        child.setAttribute("id", "child")
        child.addEventListener("click",()=>{details(Element)})
        
        var childs_child = document.createElement("div")
        childs_child.setAttribute("id", "childs-child")
        var container = document.getElementById("container")
        childs_child.append(cart, wl)
        child.append(image, description, price, childs_child)
        container.append(child)
    })

}

function details(ele)
{
    localStorage.setItem("details",JSON.stringify(ele))
    window.location.assign("../product_details/details.html")
}

function addToCart(Element){
    cart.push(Element)
    localStorage.setItem("cart", JSON.stringify(cart))
}

function addToWishlist(Element){
    wishlist.push(Element)
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
}

let low = document.getElementById("low")
low.addEventListener("click", lowFuntion)

function lowFuntion(){
    sort_data = sort_data.sort((a,b) => +a.price - + b.price)
    console.log(sort_data)
    showItems(sort_data)
    document.querySelector(".wrapper").innerHTML = ""
}

let high = document.getElementById("high")
high.addEventListener("click", highFuntion)

function highFuntion(){
    sort_data = sort_data.sort((a,b) => +b.price - + a.price)
    console.log(sort_data)
    showItems(sort_data)
    document.querySelector(".wrapper").innerHTML = ""

}

let problem = document.getElementById("problem")
problem.addEventListener("change", ()=>{
    let filtered = filterData2.filter((ele)=>{
        if(ele.problem == problem.value){
            return ele
        }
    })
    showItems(filtered)
    document.querySelector(".wrapper").innerHTML = ""
})

let pf = document.getElementById("product_form")
pf.addEventListener("change", ()=>{
    let filtered = filterData1.filter((ele)=>{
        if(ele.product_form == pf.value){
            return ele
        }
    })
    showItems(filtered)
    document.querySelector(".wrapper").innerHTML = ""
})