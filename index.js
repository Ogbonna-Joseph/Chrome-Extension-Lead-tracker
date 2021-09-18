let inputbtn = document.getElementById("input-btn")
let mylead = []
const inputEl = document.getElementById("input-el")


inputbtn.addEventListener("click", function(){
    mylead.push(inputEl.value)
    console.log(mylead)
})
