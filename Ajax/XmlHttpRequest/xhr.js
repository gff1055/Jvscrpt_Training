/*---GET--*/
var xhr = new XMLHttpRequest();
var documento;

xhr.responseType = "json";

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        documento = xhr.response;
        console.log(documento);
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");


xhr.send();


/*---POST--*/

var xhrPost = new XMLHttpRequest();
var documentoPost = {
    "userId": 4444,
    "id": 44,
    "title": "Exclusive news",
    "body": "He got crazy"
}


xhrPost.onreadystatechange = function(){
    if(xhrPost.readyState == 4){
        console.log(xhrPost);
    }
}

xhrPost.open("POST", "https://jsonplaceholder.typicode.com/posts")
xhrPost.send(documentoPost);


