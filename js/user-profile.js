document.addEventListener("DOMContentLoaded", function(){
    //store('employees', [{'email': 'andreyborro@gmail.com', 'firstname': 'Andrey', 'lastname':'Borro', 'password': 'yeet'}])
    c = load('current_user')
    if(c){
        document.getElementById('name').textContent = c.firstname + ' ' + c.lastname
        document.getElementById('email').textContent = c.email
    }
    else{
        window.location.href = 'index.html'
    }
});