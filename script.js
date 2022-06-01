let btn=document.querySelectorAll(".btn")
let count=document.getElementById("count")
if (localStorage.getItem("basket")==null) {
    localStorage.setItem("basket",JSON.stringify([])) 
}
btn.forEach(element => {
    element.addEventListener("click",function(e)
    {
        if (localStorage.getItem("basket")==null) {
            localStorage.setItem("basket",JSON.stringify([])) 
        }
e.preventDefault();
let arr=JSON.parse(localStorage.getItem("basket"));
 let productId= this.parentElement.parentElement.getAttribute("data-id");
 let existProduct=arr.find(p=>p.Id==productId)
 if (existProduct==undefined) {
arr.push(
    {
       Id:productId,
       Price:this.previousElementSibling.innerText,
       ImageURL:this.parentElement.previousElementSibling.getAttribute("src"),
       Name:this.parentElement.firstElementChild.innerText,
       Count:1
    }
)
 }
 else{
existProduct.Count++
 }
 localStorage.setItem("basket",JSON.stringify(arr))
 WriteCount()
    })
});
function WriteCount(){
let arr=JSON.parse(localStorage.getItem("basket"));
count.innerText=arr.length
}