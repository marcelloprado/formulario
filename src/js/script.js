let nome = document.getElementById('nome');
let email = document.getElementById('email');
let telefone = document.getElementById('telefone');
let mensagen = document.getElementById('mensagen');


let nomeValue = nome.value
form.addEventListener('submit', function (event) {
    if(nomeValue == "") {
       alert('campo vazio');
       console.log('campo vazio');
    } else {
        
    }
});



























// const form = document.getElementById('form')
// const nome = document.getElementById('nome')
// const email = document.getElementById('email')
// const telefone = document.getElementById('telefone')
// const mensagen = document.getElementById('mensagen')


// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     checkInputs()
// });

// function checkInputs() {

//     // trim => serve para retirar os espaços do inicio e do fim do input deixado pelo usuário.

//   const nomeValue = nome.Value.trim() 
//   const emailValue = email.Value.trim()
//   const telefoneValue = telefone.Value.trim()
//   const mensagenValue = mensagen.Value.trim()


//   if(nomeValue === '') {
//     // Mostrar erro
//     // Adicionar a classe error

//     errorValidation(nome, 'Campo obrigatório')
//   } else {

//   }

// }