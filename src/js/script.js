let form = document.getElementById('form')
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let telefone = document.getElementById('telefone');
let mensagen = document.getElementById('mensagen');


form.addEventListener('submit', function (event) {
    event.preventDefault();

    verificarInputs();

});

function verificarInputs() {
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const telefoneValue = telefone.value.trim();
    const mensagenvalue = mensagen.value.trim();
    // trim => serve para retirar os espaços do inicio e do fim do input deixado pelo usuário.

     if(nomeValue === '') {
       // Mostrar erro
       // Adicionar a classe error
       erroValidacao(nome, '*Campo Obrigatório')
    } else {
        // adicionar a classe de sucesso
        sucessoValidacao(nome)
    }

    if (emailValue === '') {
        erroValidacao(email, '*Campo Obrigatório')

    } else {
        sucessoValidacao(email)
    }

    if (telefoneValue === '') {
        erroValidacao(telefone, '*Campo Obrigatório')

    } else {
        sucessoValidacao(telefone)
    }

    if (mensagenvalue === '') {
        erroValidacao(mensagen, '*Campo Obrigatório')

    } else {
        sucessoValidacao(mensagen)
    }
}

function erroValidacao(input, message) {
    
    input.className = 'inputs erro'
    
    // Validação "Campo obrigatório"
    
    const formControl = input.parentElement;
    let small = formControl.querySelector('small')
    
    small.innerText = message
    
    

}

function sucessoValidacao(input) {
    const formControl = input.parentElement;
    let small = formControl.querySelector('small')
    
    input.classList = 'inputs sucesso'
    
    small.className = 'small'

    small.remove('small erro')
    
}