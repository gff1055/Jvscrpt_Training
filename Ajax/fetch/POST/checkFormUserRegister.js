password 					= document.getElementById('password');
checkPassword 				= document.getElementById('checkPassword');
submitUserRegister 			= document.getElementById('submitUserRegister');		
submitUserRegister.disabled = true;
passwordWarning 			= document.getElementById('passwordWarning');
inputBirthday 				= document.getElementById('inputBirthday');

formRegister 				= document.querySelector('.formRegister');



function fieldRequiredEmpty(field){if(field == "") return true; return false;}


checkPassword.addEventListener("keyup",

/**
 * Funcao: Anonima associada ao evento de pressionamento de tecla
 * Objetivo: Checar se a senha foi digitada corretamente nos campos 'senha' e 'confirmar senha'
 */
function(){
	feedbackPassword();
},false);




password.addEventListener("keyup",

/**
 * Funcao: Anonima associada ao evento de pressionamento de tecla
 * Objetivo: Checar se a senha foi digitada corretamente nos campos 'senha' e 'confirmar senha'
 */
function(){
	feedbackPassword();
},false);



feedbackPassword = function(){

	if(checkValue(password.value, checkPassword.value)){

		if(password.value == ""){
			submitUserRegister.disabled = true;
		}

		else{
			submitUserRegister.disabled = false;
			passwordWarning.innerHTML = "";
		}

	}

	else if(checkValue(password.value, checkPassword.value) == false){
		submitUserRegister.disabled = true;
		passwordWarning.style.color = "#ff0000";
		passwordWarning.style.fontSize = "0.8em";
		passwordWarning.innerHTML = "*As senhas nao coincidem ou nao foram preenchidas<br>";
	}
}



checkValue = function(d1, d2){
	if(d1 == d2) return true;
	else return false;	
}


function checkEmptyFieldRequired(pRequiredField, pRequiredFieldLabel){
	emptyFieldCounter = 0;						// Variavel que conta os campos que estao em branco
	for(var i = 0; i < pRequiredField.length; i++){
		if(fieldRequiredEmpty(pRequiredField[i].value)){
			pRequiredField[i].style.borderColor = "red";
			pRequiredField[i].style.borderWidth = "thin";
			pRequiredFieldLabel[i].style.color = "red";
			emptyFieldCounter++;
		}
		else{
			pRequiredField[i].style.borderColor = "";
			pRequiredField[i].style.borderWidth = "";
			pRequiredFieldLabel[i].style.color = "black";
		}
	}

	if(emptyFieldCounter) return true;
	else return false;
}


pegaDados = function(){

	/**
	 * dadoCampo 	= querySelector('#idCampo');
	 * dadoCampo2 	= querySelector('#idCampo2');
	 * dadoCampo3 	= querySelector('#idCampo3');
	 * */

	/*return {
		nomeCampo	: dadoCampo,
		nomeCampo2	: dadoCampo2,
		nomeCampo3	: dadoCampo3
	}
	*/
};



formRegister.addEventListener("submit", function(event){

	event.preventDefault();

	var requireField 		= document.querySelector(".requiredField");
	var requireFieldLabel 	= document.querySelector(".requiredFieldLabel");

	if(checkEmptyFieldRequired(requiredField, requiredFieldLabel)){
		alert("Existem campos obrigatorios não preenchidos")
	}

	else{

		feedbackUserName 	= document.querySelector("#feedbackUserName");
		feedbackEmail		= document.querySelector("#feedbackEmail");

		if(feedbackEmail[0].textContent!="") feedbackEmail.html("");
		
	}

	fetch("/user", {
		method	:'POST',
		body	:JSON.stringify(pegaDados())
	})
	.then(function(response){
		return response.json();
	})
	.then(function(response){
		if(response[0].success==false){
			alert("Um ou mais campos possuem informações não válidas. Verifique");

			// O array de resposta é percorrido 
			// afim de coletar todos as mensagens de feedback
			for(var ind = 0; ind < answer.length; ind++)
			{
				// Se o nome de usuario informado ja estiver sendo usado em outra conta,
				// os dados sao apagados no formulario e
				// é enviado um alerta para o usuario
				if(answer[ind].code == '55418313')
				{
					idInputUserName = $('#idInputUserName');
					idInputUserName.css("border-color","red");
					idInputUserName[0].value = "";

					feedbackUserName.css("color","red");
					feedbackUserName.html("  (ERRO: Já existe uma conta cadastrada com o nome de usuario informado. Digite outro)");
				}

				// O mesmo acontece com o email... 
				else if(answer[ind].code == '341313')
				{
					idInputEmail = $('#idInputEmail');
					idInputEmail.css("border-color","red");
					idInputEmail[0].value = "";

					feedbackEmail.css("color","red");
					feedbackEmail.html("  (ERRO: Já existe uma conta cadastrada com o Email informado. Digite outro)");

				}

				// No caso de ocorrer outra falha...
				else console.log("FALHA GERAL....");
			}
		}
	})
	.catch(function(response){
		console.log(response);
	})

})
