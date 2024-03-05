let text = document.getElementById('text')
let lefttree = document.getElementById('left-tree')
let righttree = document.getElementById('right-tree')
let leftgate = document.getElementById('left-gate')
let rightgate = document.getElementById('right-gate')

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;
    
    text.style.marginTop = value * 2.5 + 'px'
    lefttree.style.left = value * -1.5 + 'px'
    righttree.style.left = value * 1.5 + 'px'
    leftgate.style.left = value * .5 + 'px'
    rightgate.style.left = value * -.5 + 'px'
})
