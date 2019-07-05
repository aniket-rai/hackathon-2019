document.addEventListener("DOMContentLoaded", function(){
    updateScore()
    updateRating()
    //store('employees', [{'email': 'andreyborro@gmail.com', 'firstname': 'Andrey', 'lastname':'Borro', 'password': 'yeet', 'scores': [3, 4]}])
});






function updateScore(){
    document.getElementById('perf').textContent = 'rate your performance today [ ' + document.getElementById('slider').value + ' / 5 ]'
}

function updateRating(){
    scores = load('current_user').scores
    sum = scores.reduce(function(a,b){
        return a + b
    })

    document.getElementById('rating').textContent = (sum/scores.length).toFixed(2)
}


function store(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key){
    return JSON.parse(localStorage.getItem(key))
}