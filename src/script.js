function gerarLink(e){
    var salve = document.querySelector('a#salve');
    var name = document.querySelector("input#inputName").value;
    var phoneNumber = document.querySelector("input#inputNumber").value;
    var checkOrcamento = document.querySelector("input#orcamento");
    var checkPedido = document.querySelector("input#pedido");

    var text;
    if(checkOrcamento.checked){
        text = `Olá ${name}! Estamos enviando seu Orçamento. `;
    }
    if(checkPedido.checked){
        text = `Olá ${name}! Estamos enviando a segunda via do seu Pedido.`;
    }
    text=text.split(' ').join('%20');

    var url=`https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${text}`;
    
    salve.setAttribute("href",url);
}