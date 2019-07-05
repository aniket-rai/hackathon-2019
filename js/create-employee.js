document.addEventListener("DOMContentLoaded", function(){
    
});

function submitEmployee(){
    load('employees').forEach(function(element){
        if(element.email === document.getElementById('user_email').value){
            return
        }
    })

    fn = document.getElementById('first_name').value
    ln = document.getElementById('last_name').value
    e = document.getElementById('user_email').value
    p = document.getElementById('temp_pass').value

    if(fn && ln && e && p){
        emp = load('employees')
        emp.push({'firstname': fn, 'lastname': ln, 'password': p, 'email': e})
        store('employees', emp)
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