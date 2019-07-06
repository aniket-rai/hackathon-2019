document.addEventListener("DOMContentLoaded", function(){
    
});

function submitEmployee(){
    load('employees').forEach(function(element){
        if(element.email === document.getElementById('user_email').value){
            window.location.reload()
        }
    })

    fn = document.getElementById('first_name').value
    ln = document.getElementById('last_name').value
    e = document.getElementById('user_email').value
    p = document.getElementById('temp_pass').value

    if(fn && ln && e && p){
        emp = load('employees')
        emp.push({
            'firstname': fn, 
            'lastname': ln, 
            'password': p, 
            'email': e, 
            'scores': [3],
            'scores_m': [3],
            'manager': load('current_user').email,
            'inbox': [],
            'div': 'Sales',
            'answers' : [0,0,0],
            'submitted_daily': false,
            'submitted_monthly': false
        })
        store('employees', emp)
        window.location.href = 'dashboard.html'
    }
}

function autoFill() {
/* document.getElementById('temp_pass').value = generatePassword(); */
document.getElementById('temp_pass').value = "temp123456789012"
}

function generatePassword() {
var length = 16,
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    passGen = "";
for (var i = 0, n = chars.length; i < length; ++i) {
    passGen += chars.charAt(Math.floor(Math.random() * n));
}
return passGen;
}

function store(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key){
    return JSON.parse(localStorage.getItem(key))
}