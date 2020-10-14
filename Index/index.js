
document.addEventListener('mousemove',paralax)



function paralax(e){

    this.querySelectorAll('.layer').forEach(layers=>{
        const speed = layers.getAttribute('speed');
        const x= (window.innerWidth - e.pageX*speed)/25
        const y =(window.innerHeight- e.pageY*speed)/25
        layers.style.transform= `translateX(${x}px) translateY(${y}px)`;
    })
}