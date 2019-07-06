document.addEventListener("DOMContentLoaded", function(){
    g = load('goals')
    document.getElementById('g1').textContent = g[0];
    document.getElementById('g2').textContent = g[1];
    document.getElementById('g3').textContent = g[2];

    divs = load('divisions')
    c = load('current_user')

    divs.forEach(function(item){
        if(item.name == c.div){
            document.getElementById('d1').textContent = '[' + c.div + '] ' + item.goals[0];
            document.getElementById('d2').textContent = '[' + c.div + '] ' + item.goals[1];
            document.getElementById('d3').textContent = '[' + c.div + '] ' + item.goals[2];
        }
    })
});