document.addEventListener("DOMContentLoaded", function(){
    updateScore()
    updateRating()
    //store('employees', [{'email': 'andreyborro@gmail.com', 'firstname': 'Andrey', 'lastname':'Borro', 'password': 'yeet', 'scores': [3, 4]}])
    store('goals', ['Facilitate customer trust', 'Engage outdated methodologies', 'Nuture ethical work habits & mindsets'])

    g = load('goals')
    document.getElementById('g1').textContent = '• ' + g[0];
    document.getElementById('g2').textContent = '• ' + g[1];
    document.getElementById('g3').textContent = '• ' + g[2];

});



function submitReport(){
    c = load('current_user')
    c.scores.push(parseInt(document.getElementById('slider').value))
    store('current_user', c)
    emp = load('employees')
    emp.forEach(function(item){
        if(item.email === c.email){
            item.scores = c.scores
        }
    })
    store('employees', emp)
    updateRating()
    document.getElementById("slider").disabled = true;
    document.getElementById("f1").disabled = true;
    document.getElementById("f2").disabled = true;
    document.getElementById("f3").disabled = true;
    document.getElementById("button").style.display = "none";
}


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