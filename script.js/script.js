
const hamB = document.querySelector("#hamburger");
const List = document.querySelector(".list")

hamB.addEventListener("click",()=> {
    List.classList.toggle("db")
    console.log(List.classList)
})