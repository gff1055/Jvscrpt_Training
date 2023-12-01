let nome = document.querySelector("#nome");
let trabalho = document.querySelector("#trabalho");
let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(event){
    
    event.preventDefault();

    let dados = {
        nome:       nome.value,
        trabalho:   trabalho.value
    }

    console.log(dados);

    fetch('https://reqres.in/api/users',{
        method: 'POST',
        body:   JSON.stringify(dados)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        alert("OK cadastro com sucesso")
    })

})