if (localStorage.getItem("basket")!=null) {
let arr=JSON.parse(localStorage.getItem("basket"));
let tdicon;

let totalPrice=document.getElementById("total")
let total=0;
      
let table=document.getElementById("table")
arr.forEach(product => {
let tr=document.createElement("tr")
let tdimage=document.createElement("td")
let image=document.createElement("img");
image.setAttribute("src",product.ImageURL);
image.style.width="100px"
tdimage.append(image);
let tdname=document.createElement("td");
tdname.innerText=product.Name
let tdprice=document.createElement("td");
tdprice.innerText=product.Price
let tdcount=document.createElement("td");
tdcount.innerText=product.Count;
let tdicon=document.createElement("td");
tdicon.innerHTML='<i class="fa-solid fa-circle-xmark"></i>'
tr.append(tdimage,tdcount,tdname,tdprice,tdicon)
table.lastElementChild.append(tr)
console.log(product.Price);
total+=product.Count*product.Price
totalPrice.innerText=total
tdicon.style.cursor = "pointer";
tdicon.addEventListener("click",function(e){
 tdicon.parentElement.remove()
})
});
}
