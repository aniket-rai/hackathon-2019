document.addEventListener("DOMContentLoaded", function(){
    
});





function store(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key){
    return JSON.parse(localStorage.getItem(key))
}