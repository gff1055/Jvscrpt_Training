

formRegister = document.querySelector('.formRegister');

formRegister.addEventListener("submit", function(event){

    event.preventDefault();

    var requiredField 		= document.querySelectorAll('.requiredField');	// Variavel que recebe a referencia dos campos obrigatorios do formulario
    var requiredFieldLabel 	= document.querySelectorAll('.requiredFieldLabel');

    if(checkEmptyFieldRequired(requiredField, requiredFieldLabel)){
        alert("Existem campos obrigatorios não preenchidos");
    }

    else{
        feedbackUserName    = document.querySelector('#feedbackUserName');					// Exibe avisos sobre o username 
        feedbackEmail       = document.querySelector('#feedbackEmail'); 						// Exibe avisos sobre o Email 

		// Resetando a area de avisos no rotulo dos formular
		if(feedbackEmail.textContent!="") feedbackEmail.html("");


        var xhr = new XMLHttpRequest();
        var documento = {
            "userId": 4444,
            "id": 44,
            "title": "Exclusive news",
            "body": "He got crazy"
        };

        xhr.responseType = "json";

        xhrPost.open("POST", "/user");
        xhrPost.send(documento);

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                if(xhr.response.success == false){

                }
                else{
                    alert("funcionou")
                }
            }
        }
    }
});

