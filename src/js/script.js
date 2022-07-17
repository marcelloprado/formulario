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
    const emailvalue = email.value.trim();
    const telefoneValue = telefone.value.trim();
    const mensagenvalue = mensagen.value.trim();
    // trim => serve para retirar os espaços do inicio e do fim do input deixado pelo usuário.

     if(nomeValue === '') {
       // Mostrar erro
       // Adicionar a classe error
       erroValidacao(nome, 'Campo Obrigatório')
    } else {
        // adicionar a classe de sucesso
    }
}

function erroValidacao(input, message) {
    // const inputs = input.parentElement;
    let small = document.querySelector('small')

   nome.classList = 'inputs erro'

   small.classList = 'inputs erro'
    // small.className = 'inputs erro'
//    small.innerText = 'inputs erro'
        console.log(small.classList);
   
}