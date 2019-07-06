document.addEventListener("DOMContentLoaded", function(){
    q = load('questions')
    document.getElementById('q1').textContent= q[0]
    document.getElementById('q2').textContent= q[1]
    document.getElementById('q3').textContent= q[2]

    a = load('current_user').answers

    document.getElementById('field').textContent= a[0]
    document.getElementById('field-2').textContent= a[1]
    document.getElementById('field-3').textContent= a[2]

    if(load('current_user').submitted_monthly){
        document.getElementById('field').readOnly = true
        document.getElementById('field-2').readOnly = true
        document.getElementById('field-3').readOnly = true

        document.getElementById('submit').value = 'Submitted'
        document.getElementById('save').value = 'Saved'
        document.getElementById('save').disabled = true
        document.getElementById('submit').disabled = true
    }
})

function saveFunction(){
    if(load('current_user').submitted_monthly){return}
    c = load('current_user')
    e = load('employees')

    c.answers[0] = document.getElementById('field').value
    c.answers[1] = document.getElementById('field-2').value
    c.answers[2] = document.getElementById('field-3').value

    e.forEach(function(item){
        if(item.email === c.email){
            item.answers = c.answers
        }
    })

    store('current_user', c)
    store('employees', e)
}

function submitFunction(){
    if(load('current_user').submitted_monthly){return}
    saveFunction()
    c = load('current_user')
    c.submitted_monthly = true
    store('current_user', c)
    window.location.reload()
}

function store(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key){
    return JSON.parse(localStorage.getItem(key))
}