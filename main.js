const botao = document.querySelector('#botao')
const botao2 = document.querySelector('#botao2')
const botao3 = document.querySelector('#botao3')
const botao4 = document.querySelector('#botao4')

botao.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})

botao2.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})

botao3.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight*2, behavior: "smooth"})
})

botao4.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight*2, behavior: "smooth"})
})

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 3000)


function nextImage (){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}