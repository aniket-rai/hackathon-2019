function funcLeft(){
    fn = document.getElementById('f_name').value
    ln = document.getElementById('l_name').value
    msg = document.getElementById('msg').value
    anon = document.getElementById('l_checkbox').checked

    if(fn && ln && msg){
        emp = load('employees')
        emp.forEach(function(item){
            if(item.firstname + item.lastname === fn + ln){
                c = load('current_user')
                author = ''
                if(!anon){author = c.firstname + ' ' + c.lastname}
                else{author = 'Anonymous'}
                item.inbox.push({
                    'title' : 'You got a Shoutout!',
                    'author' : author,
                    'msg' : msg,
                    'unread' : true
                })
                store('employees', emp)
            }
        })
    }
}

function funcRight(){
    msg = document.getElementById('field-2').value
    anon = document.getElementById('r_checkbox').checked

    if(msg){
        m = load('current_user').manager
        emp = load('employees')
        emp.forEach(function(item){
            if(item.email === m){
                author = ''
                if(!anon){author = c.firstname + ' ' + c.lastname}
                else{author = 'Anonymous'}
                item.inbox.push({
                    'title' : "You've received feedback",
                    'author' : author,
                    'msg' : msg,
                    'unread' : true
                })
                store('employees', emp)
            }
        })
    }
}




function store(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key){
    return JSON.parse(localStorage.getItem(key))
}