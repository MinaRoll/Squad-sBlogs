var miembros = document.getElementById('miembros');
var datos = [];

function miembroSquad(id, nombre, apellido, edad, hobbies){//constructor de propiedades con datos de los miembros del Squad 
    this.id = id; //id de cada miembro del Squad
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hobbies = hobbies; //lo guardo en un arreglo
    this.fotos = new Image(); //foto de cada miembro del Squad
    this.fotos.src = "js/fotos/" + this.apellido + ".jpg"; //nombro la carpeta don están guardadas las fotos y le sumo el apellido de cada miembro del Squad (nombre con el que se guardaron las fotos en mi carpeta) más la extensión del archivo
}

function comentar(idMiembros, comentario, likes){//función para comentar por cada  miembro de Squad
    this.idMiembros = idMiembros;
    this.comentario = comentario;
    this.likes = 0;
}

function ficha() {//guardo los hobbies en arreglos
    var datosSquad = [new miembroSquad(1,'Vanessa', 'Perez', '35', ['Hacer karate do', 'Canatar y pasarlo bien', 'Disfrutar a mis 6 hijos']),
        new miembroSquad(2,'Constanza', 'Carrasco', '23', ['Hacer manualidades', 'Escuchar música', 'Perrear']),
        new miembroSquad(3,'Natalia', 'Garrido', '27', ['Jugar con mis gatos', 'Ver series', 'Comida']),
        new miembroSquad(4,'Natalia', 'Vivanco', '27', ['Manualidades', 'Jardinear', 'Leer']),
        new miembroSquad(5,'Paola', 'Urra', '28', ['Jugar xbox', 'Ver Netflix', 'Dormir']),
        new miembroSquad(6,'Katherine', 'Sandoval', '24', ['Arte', 'Literatura', 'Música']),
        new miembroSquad(7,'Paulina', 'Gonzalez', '26', ['Ver series/anime', 'Dormir', 'Hacer manualidades y sacar la vuelta']),
        new miembroSquad(8,'Sou-Elene', 'Cruces', '33', ['Dormir','Carretear', 'Patear y reconciliar a mi pololo']),
        new miembroSquad(9,'Romina', 'Torres', '31', ['Componer, cantar, tocar batería, bajo y guitarra', 'Leer', 'Ver Netflix y beber cerveza'])
    ];

    var agreg = ''
    for(var i = 0; i < datosSquad.length; i++){//para recorrer el arreglo miembroSquad
        agreg += '<section> <img width=200 src="' + 
            datosSquad[i].fotos.src + '" > </br> <strong> Nombre: </strong>' + //muestra las fotos por cada miembro del squad
            datosSquad[i].nombre + '</br>' + ' <strong> Apellido: </strong>' +//muestra el nombre por cada miembro del Squad
            datosSquad[i].apellido + '</br>' + '<strong> edad: </strong>' +//muestra el apellido por cada miembro del Squad
            datosSquad[i].edad + '</br>' + "Hobbies : "//muestra la edad por cada miembro del Squad

        agreg += '<ul>'//porque necesito crear un  ul q me meta los li

        for(var j = 0; j < datosSquad[i].hobbies.length; j++){//recorre el arreglo con los hobbies
            agreg += '<li>' + datosSquad[i].hobbies[j] + '</li>'
        }
        agreg += "</ul>";
        agreg += '<textarea id="comment_' + datosSquad[i].id + '"></textarea></br>';
        agreg += '<button type="button" atributo-id="'+ datosSquad[i].id +'"onclick="agregarComentarios(this)" class="button_comment">Comentar</button>';
        agreg += '<div id="message_' + datosSquad[i].id + '"></div></br>';
        agreg += "</section><br/>";
    }
    miembros.innerHTML = agreg; //imprime en HTML?

}

function agregarComentarios(add) {//funcion para agregar comentarios 
    var id = add.getAttribute("atributo-id");
    var container = document.getElementById("comment_" + id);//alamacenar comentarios
    var addComment = container.value;//agregar comentarios
    addComment += '<img onclick="agregarLikes(' + id + ')" src="js/fotos/corazon.png" width="150" height="100" style="background-position:"right"></img>';
    addComment += '<div id="like_' + id + '"></div>';
    document.getElementById("message_" + id).innerHTML = addComment;
    var comentario = new comentar(id, container.value, 0);
    datos.push(comentario);
    console.log(datos);
}

function agregarLikes(miemb){//contador de likes
    var likeComentario = (datos.filter(container => container.idMiembros == miemb))[0];
    likeComentario.likes++;
    document.getElementById("like_" + miemb).innerHTML = likeComentario.likes;
}