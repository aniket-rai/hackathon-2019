var email
var password


document.addEventListener("DOMContentLoaded", function(){
    //store('employees', [{'email': 'andreyborro@gmail.com', 'firstname': 'Andrey', 'lastname':'Borro', 'password': 'yeet', 'scores': [5,5,5,4,3,5,3,1]}])
    if(load('current_user')){
        window.location.href = 'dashboard.html'
    }
})

document.getElementById('LoginButton').addEventListener("click", function(){
   
});




function store(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key){
    return JSON.parse(localStorage.getItem(key))
}