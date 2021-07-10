window.onload = () => {

    const jiraya = {    

    nome : "Jiraya",
    tedio : true,
    imagem1 : "https://i.pinimg.com/736x/9d/80/98/9d8098cf08a641eb1c8d4f6663d55432.jpg",
    imagem2 : "https://pa1.narvii.com/6253/ba9143026ec55dcf20f18f0c3cd77bfc1ddbd10e_hq.gif",
    texto1 : "JIRAYA ESTÁ ENTEDIADO",
    texto2 : "JIRAYA ES....TA i RADO"
    }

    const imagem = document.getElementById("imagem");

    const paragrafo = document.getElementById("paragrafo");



    const trocaDados = () =>{

        if (jiraya.tedio){

            paragrafo.innerHTML = jiraya.texto1;
            imagem.src= jiraya.imagem1;
        }else{
            paragrafo.innerHTML = jiraya.texto2;
            imagem.src= jiraya.imagem2;
        }
        

    }
    /* usando em js dicionario */
    trocaDados();
    

    const botao = document.getElementById("botao")    
    botao.addEventListener("click", () =>{
        jiraya.tedio = !jiraya.tedio;
        trocaDados()
        
       

    })

}
