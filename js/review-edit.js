document.addEventListener("DOMContentLoaded", function(){
    q = load('questions')
    document.getElementById('q1').value = q[0]
    document.getElementById('q2').value = q[1]
    document.getElementById('q3').value = q[2]
})

document.getElementById('save').addEventListener("click", function(){
    
})

function saveFunction(){
    document.getElementById('q1').readOnly = true; 
    document.getElementById('q2').readOnly = true; 
    document.getElementById('q3').readOnly = true;
    q = load('questions')
    q[0] = document.getElementById('q1').value
    q[1] = document.getElementById('q2').value
    q[2] = document.getElementById('q3').value
    store('questions', q);
}


function store(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key){
    return JSON.parse(localStorage.getItem(key))
}