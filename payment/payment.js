
var form = document.querySelector("form").addEventListener("submit",formfn)
function formfn(e){
    e.preventDefault()
    var target=e.target
    var card=target.querySelector(".text").value
    var total=addressTotalObj.totalamt;
    var obj={
        card,
        total
    }
    localStorage.setItem("otp",JSON.stringify(obj))

    window.location="OTP.html"
}

var addressTotalObj = JSON.parse(localStorage.getItem("addressTotalObj"));
document.getElementById("totalmrp").innerText = addressTotalObj.totalmrp;
document.getElementById("totaldisc").innerText = addressTotalObj.totaldisc;
document.getElementById("totalamt").innerText = addressTotalObj.totalamt;
document.getElementById("priceDetails").innerText = addressTotalObj.totalItem;