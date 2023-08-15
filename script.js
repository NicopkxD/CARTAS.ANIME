/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Anime",
        imagen: "https://elpalomitron.com/wp-content/uploads/2018/10/that-time-i-got-reincarnated-as-a-slime-elpalomitron-destacada.jpg",
        descripcion: "Tensei Shitara Slime Datta Ken",
    },
    {
        id: 2,
        nombre: "Anime",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjx_5PC-Pgt6etiN1Tw6gADU1f65RwCFCNg&usqp=CAU",
        descripcion: "Sword Art Online",
    },
    {
        id: 3,
        nombre: "Anime",
        imagen: "https://i.pinimg.com/originals/fc/da/7f/fcda7f8cec355435eeac9805b2364041.jpg",
        descripcion: "Kage no Jitsuryokusha ni Naritakute",
    },
    {
        id: 4,
        nombre: "Anime",
        imagen: "https://w0.peakpx.com/wallpaper/691/372/HD-wallpaper-anime-the-rising-of-the-shield-hero-naofumi-iwatani.jpg",
        descripcion: "The Rising of the Shield Hero",
    },
    {
        id: 5,
        nombre: "Anime",
        imagen: "https://peru21.pe/resizer/CjyfmWCeXP98rQ76ew6cEpQNHgQ=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/OK2KOFFUDVCERCTD3RW37NSQTQ.jpg",
        descripcion: "The Seven Deadly Sins",
    },
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")

/* Función que recorre el listado de las cartas */
function recorrerCartas(){
    contenedorCartas.innerHTML = ""
    listadoCartas.forEach(
        (carta) => contenedorCartas.innerHTML += `
        <article class="card">
            <img src="${carta.imagen}" alt="Imagen del proyecto">
            <div class="info">
              <h2>${carta.nombre}</h2>
              <p>${carta.descripcion}</p>
            </div>
        </article>
    `
    )
}

function agregarCarta(){
    const nombre = prompt("nombre")
    const imagen = prompt("imagen")
    const descripcion = prompt("descripcion")

    const carta = {nombre,imagen,descripcion}
    listadoCartas.push(carta)
    recorrerCartas()
}
recorrerCartas()


