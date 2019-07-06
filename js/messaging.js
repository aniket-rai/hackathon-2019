var emails = [];

document.addEventListener("DOMContentLoaded", function(){
    i = load('current_user').inbox

    i.forEach(function(item){
        d = document.createElement('div')
        d.className = 'email'
        if(item.unread){
            d.className = d.className + ' unread'
        }

        t = document.createElement('h3')
        t.textContent = item.title
        a = document.createElement('p')
        a.textContent = item.author
        d.appendChild(t)
        d.appendChild(a)

        emails.push(d)

        d.addEventListener("click", my_callback(item))

        document.getElementById('inbox').appendChild(d)
    })
})


function my_callback(item){
    return function(){
        emails.forEach(function(it2){
            if(it2.className.includes('selected')){
                it2.className = 'email'
            }
        })

        item.className = item.className + ' selected'

        c = load('current_user')
        i = c.inbox
        i.forEach(function(it2){
            if(it2.msg === item.msg){
                it2.unread = false
            }
        })

        store('current_user', c)
    }
}


function store(key, val){
    localStorage.setItem(key, JSON.stringify(val))
}

function load(key){
    return JSON.parse(localStorage.getItem(key))
}