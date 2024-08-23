function cargarcabecera(){
fetch("/html/pie-pagina.html")
.then(Response =>  Response.text() )
.then(data =>{
    document.getElementById("pie-pagina-menu").innerHTML =data;
}).catch(error => console.log("error al cargar el html: ", error))
}

cargarcabecera()