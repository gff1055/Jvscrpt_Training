function ajax(){
    var xmlHttp;

    //if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest;
    //}

    /*else{
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }*/

    xmlHttp.onreadystatechange = function(){

        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            console.log(xmlHttp.responseText);
        }

    }

    xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    xmlHttp.send();
}

