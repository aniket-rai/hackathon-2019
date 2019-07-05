var email
var password


document.addEventListener("DOMContentLoaded", function(){
    if(load('current_user')){
        window.location.href = 'dashboard.html'
    }
})

document.getElementById('LoginButton').addEventListener("click", function(){
    email = document.getElementById('Email-2').value
    password = document.getElementById('Password').value
    emp = load('employees')
    if(emp){
        emp.forEach(function(item){
            if(item.email === email && item.password === password){
                store('current_user', item)
                window.location.href = 'dashboard.html'
            }
        })
    }
});




function store(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key){
    return JSON.parse(localStorage.getItem(key))
}