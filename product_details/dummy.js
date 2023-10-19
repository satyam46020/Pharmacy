var arr=[
    {
        name:"Allen Solly Solid T-shirt",
        category:"T-Shirts",
        description:"Allen Solly Sea Green Collar Neck  Polo T Shirt,  ADIDAS, Tshirts,",
        price:1234,
        img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7812367/2018/12/8/5c8940d1-cb9a-44a1-ad5b-267186b7f7081544259175329-Allen-Solly-Men-Teal-Solid-Polo-Collar-T-shirt-3631544259174-1.jpg",
        color:"Green",
        gender:"Men",
        neck:"Collar",
        brand:"Allen Solly",
        fabric:"100% polyester",
        discount:15,
        xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"
    
    },
    {
        name:"Lacoste Blue T-shirt",
        category:"T-Shirts",
        description:"Lacoste Men Blue Printed Round Neck T-shirt 100% Cotton",
        price:4300,
        img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/1/22/b3c8495b-a6db-41fc-9a64-5f3c568352001548130390356-1.jpg",
    
        color:"Blue",
        gender:"Men",
        neck:"Round",
        brand:"Lacoste",
        fabric:"100% Cotton",
        discount:5,
        xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"
    
    
    },
    {
        name:"Levis Striped T-shirt",
        category:"T-Shirts",
        description:"Levis Men Orange Striped Round Neck T-shirt 70% Cotton 30% Mix-blend",
        img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6841037/2018/8/28/b3fe90a4-7613-4d72-9045-b6d042328ede1535448696890-Levis-Men-Rust-Striped-Round-Neck-T-shirt-5571535448696713-1.jpg",
        price:4999,
        color:"Orange",
        gender:"Men",
        neck:"Round",
        brand:"Levis",
        fabric:"70% Cotton 30% Mix-blend",
        discount:14,
        xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"
    
    
    },
]
mensData.forEach((val)=>{
    const card=document.createElement("div");
    const image=document.createElement("img");
    const brand=document.createElement("p");
    const name=document.createElement("p");
    const priceDiv=document.createElement("div");
    const price=document.createElement("span");
    const strikePrice=document.createElement("span");
    const discount=document.createElement("span");
    const AddToCart=document.createElement("button");
  
    image.addEventListener("click",function(){
      setDetails(val);
    })
    name.addEventListener("click",function(){
      setDetails(val);
    })
})

function setDetails(a){
    localStorage.setItem("details",JSON.stringify(a));
    window.location.assign("details.html");
    }