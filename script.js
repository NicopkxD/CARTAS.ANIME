/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Anime",
        imagen: "https://elpalomitron.com/wp-content/uploads/2018/10/that-time-i-got-reincarnated-as-a-slime-elpalomitron-destacada.jpg",
        descripcion: "top 1 anime que mas me gusta",
    },
    {
        id: 2,
        nombre: "Anime",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjx_5PC-Pgt6etiN1Tw6gADU1f65RwCFCNg&usqp=CAU",
        descripcion: "top 2 anime que mas me gusta",
    },
    {
        id: 3,
        nombre: "Anime",
        imagen: "https://i.pinimg.com/originals/fc/da/7f/fcda7f8cec355435eeac9805b2364041.jpg",
        descripcion: "top 3 anime que mas me gusta",
    },
    {
        id: 4,
        nombre: "Anime",
        imagen: "https://w0.peakpx.com/wallpaper/691/372/HD-wallpaper-anime-the-rising-of-the-shield-hero-naofumi-iwatani.jpg",
        descripcion: "top 4 anime que mas me gusta",
    },
    {
        id: 5,
        nombre: "Anime",
        imagen: "https://peru21.pe/resizer/CjyfmWCeXP98rQ76ew6cEpQNHgQ=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/OK2KOFFUDVCERCTD3RW37NSQTQ.jpg",
        descripcion: "top 5 anime que mas me gusta",
    },
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")

/* Función que recorre el listado de las cartas */
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



