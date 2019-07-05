function newPass(){
    p1 = document.getElementById('pass1').value
    p2 = document.getElementById('pass2').value

    if(p1 && p2 && p1 === p2){
        u = load('current_user')
        u.password = p1
        store('current_user', u)
        emp = load('employees')
        emp.forEach(function(item){
            if(item.email === u.email){
                item.password = u.password
                store('employees', emp)
                window.location.href = 'dashboard.html'
            }
        })
    }
    else{
        alert('invalid')
    }
}

function store(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key){
    return JSON.parse(localStorage.getItem(key))
}