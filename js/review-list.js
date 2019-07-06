document.addEventListener("DOMContentLoaded", function(){
      //store('employees', [{'email': 'andreyborro@gmail.com', 'firstname': 'Andrey', 'lastname':'Borro', 'password': 'yeet', 'scores': [5,5,5,4,3,5,3,1]}])
      
      e = load('employees')

      e.forEach(function(item){
        if(!item.submitted_monthly){
            return
        }
        d = document.createElement('div')
        d.className = 'section-8'
        d.style = 'margin-left: 20%; margin-right: 30%; margin-top: 20px; font-size: 20px; text-align: left;'
        a = document.createElement('a')
        a.href = '#'

        d2 = document.createElement('div')
        d2.style.display = 'inline'
        d2.textContent = item.firstname + ' ' + item.lastname

        d3 = document.createElement('div')
        d3.style = 'margin-left: 80%; display: inline;'
        d3.textContent = getRating(item)

        a.appendChild(d2)
        a.appendChild(d3)
        d.appendChild(a)

        d4 = document.createElement('div')
        d4.className = 'section-6'
        d4.style.width = '50%'

        b = document.getElementById('topdiv')
        b.appendChild(d)
        b.appendChild(d4)
    })
  })


  function getRating(item){
    scores = item.scores
    sum = scores.reduce(function(a,b){
        return a + b
    })

    return (sum/scores.length).toFixed(2)
}

    
  
  function store(key, val){
      localStorage.setItem(key, JSON.stringify(val))
  }
  
  function load(key){
      return JSON.parse(localStorage.getItem(key))
  }

  /*<div class="section-8" style="margin-left: 20%; margin-right: 30%; margin-top: 20px; font-size: 20px; text-align: left;">
    <a href="#">
      <div id="name1" style="display: inline;">Aniket Rai</div>
      <div id="rating1" style="margin-left: 80%; display: inline;">4.7</div>
    </a>
  </div>
  <div class="section-6"     width: 50%;></div>*/



