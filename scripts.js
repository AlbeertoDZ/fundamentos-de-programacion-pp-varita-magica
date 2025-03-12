//1 Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const enlacesSinVisita = document.querySelectorAll("a");

for (let i = 0; i < enlacesSinVisita.length; i++) {
    console.log(enlacesSinVisita[i].innerHTML);
    enlacesSinVisita[i].href = "";
}

//2.Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

/*const getRandom = (array) => array[Math.floor(Math.random() * array.length)];

  document.getElementsByClassName("kg-image").forEach(function (fotos) {
    fotos.addEventListener("click", function() {
      const gifs = assets/getRandom ("src", "*");
      gifs.src = 
      fotos.setAttribute(gifs);
    })
  });
*/
  document.getElementsByClassName("kg-image")[0].addEventListener("click", function(){
    document.getElementsByClassName("kg-image")[0].setAttribute("src", "assets/magic-1.gif");
  })

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
/*document.querySelector("p").addEventListener("click",function(){
    document.querySelector("p").style.color = "blue";
      document.querySelector("p").style.backgroundColor = "yellow";
    });
*/
    document.querySelectorAll("p").forEach(function(parrafo){
      parrafo.addEventListener("click", function(){
        parrafo.style.color="blue";
        parrafo.style.background="yellow";
      })
    })

//2.3 Bloques de article o section: Cambia el color de fondo.

    document.querySelectorAll("article").forEach(function (articulo) {
      articulo.addEventListener("click", function () {
        articulo.style.background="green";
      })
    })

//3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

    //3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.
    document.querySelectorAll("img").forEach(function(imagenes) {
      imagenes.addEventListener("mouseover", function () {
        imagenes.setAttribute("src", "assets/abracadabra.gif");
      })
    })

    //3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
    document.querySelectorAll("p").forEach(function(parrafo) {
      parrafo.addEventListener("mouseover", function() {
        parrafo.style.color="pink";
        parrafo.style.background="black";
      })
    });

    //3.3 Bloques de `article` o `section`: Color de fondo distinto al de párrafo.

    document.querySelectorAll("article").forEach(function(articulo){
      articulo.addEventListener("mouseover", function() {
        articulo.style.background="red";
      })
    })

//4. 4. Crea una función de nombre `getRandom` que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

const colors = ['red', 'blue', 'green'];

const getRandom = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}
console.log(getRandom(colors));