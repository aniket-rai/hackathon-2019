var email
var password


document.addEventListener("DOMContentLoaded", function(){
    //store('employees', [{'email': 'andreyborro@gmail.com', 'firstname': 'Andrey', 'lastname':'Borro', 'password': 'yeet', 'scores': [5,5,5,4,3,5,3,1]}])
    q = load('questions')
    document.getElementById('q1').textContent = q[0]
    document.getElementById('q2').textContent = q[1]
    document.getElementById('q3').textContent = q[2]

    p = load('loaded_profile')

    document.getElementById('header').textContent = 'review - ' + p.firstname + ' ' + p.lastname + ' [ ' + p.scores_m.slice(-1)[0] + ' ] '

    a = p.answers

    document.getElementById('field').textContent= a[0]
    document.getElementById('field-2').textContent= a[1]
    document.getElementById('field-3').textContent= a[2]
})






function store(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key){
    return JSON.parse(localStorage.getItem(key))
}