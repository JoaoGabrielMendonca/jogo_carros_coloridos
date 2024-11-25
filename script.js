function corBranca () {
    document.body.style.backgroundColor = 'white';
    resultado=document.getElementById('result');
    resultado.innerHTML='Branco';
    resultado.style.color='black';
    const H1 = document.querySelectorAll('h1');
    H1.forEach(H1=> {
        H1.style.color='black'
    })
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.color = 'black';
    });
}


function corVermelha () {
    document.body.style.backgroundColor = 'red';
    resultado=document.getElementById('result');
    resultado.innerHTML='Vermelho';
}  

function acelerar() {
    const branco=document.getElementById('white');
    branco.style.width='20px';
    branco.style.height='20px'
    branco.style.left='235px'
    branco.style.top='30px'
    const vermelho=document.getElementById('red')
    vermelho.style.width='20px';
    vermelho.style.height='20px'
    vermelho.style.right='235px'
    vermelho.style.top='30px'
}

function  resetar(){
    location.reload();
}

function desacelerar(){
    const branco=document.getElementById('white');
    branco.style.width='80px';
    branco.style.height='80px'
    branco.style.left='190px'
    branco.style.top='70px'
    const vermelho=document.getElementById('red')
    vermelho.style.width='80px';
    vermelho.style.height='80px'
    vermelho.style.right='190px'
    vermelho.style.top='65px'
}