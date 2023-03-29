const Conteiner =require("./desafio2.js")
const productos = new Conteiner("./productos.json")

async function ejecutar(){
    const producto1={
        title: "Portillo Malbec",
        price: 920,
        code: 111,
        stock: 7,
        description:"Color rojo violeta intenso brillante, nariz frutada donde prevalece frutas rojas frescas (ciruelas y moras) sin aromas cocido o mermeladas; boca: entrada fresca debido a su acidez natural, sensación frutal, taninos redondos o maduros, final dulce y largo. Equilibrado e intenso con carácter varietal claro.",
        thumbnail:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/portillo-malbecc1-03c650826290e6aee715949251039734-480-0.jpg"

    }
    const producto2={
        title: "Johnnie Walker Red Label 750 Ml",
        price: 5.925,
        code: 222,
        stock: 8,
        description:"La mezcla es en parte arte y en parte ciencia. Es una habilidad de la Familia Walker desarrollada a lo largo de muchas generaciones. Etiqueta roja, con su combinación de whiskies claros de la oscura costa este de Escocia y whiskies de la punta de la costa oeste, creó una mezcla con una extraordinaria profundidad de sabor. El sabor viaja en toda su paladar para ofrecer una experiencia que ni siquiera otros whiskies no ordinarios pueden igualar. El carácter del whisky se define por una intensa, picante y marcada sensación de sabores. Una ráfaga de etiqueta roja golpea el paladar con la frescura del agua de una ola al estrellarse, seguido por el sabor de las especias aromáticas y, finalmente, un largo y persistente, acabado humeante. La sensación en la boca es compleja - 'picante dulce' es una buena descripción de este gusto y la sensación de hormigueo en la lengua.",
        thumbnail:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/red-label-750-ml1-2cc5c0a70f3e86311016262835929050-1024-1024.jpg"

    }
    const producto3={
        title: "Fernet Branca 1 Lt",
        price: 1.800,
        code: 333,
        stock: 10,
        description:"El Fernet es una bebida alcohólica amarga del tipo amaro elaborada a partir de varios tipos de hierbas (mirra, ruibarbo, manzanilla, cardamomo y azafrán, entre otras), que son maceradas en alcohol de uva, filtradas y añejadas en toneles de roble durante un período que puede ser de seis a doce meses. Posee un color oscuro, un aroma intenso y una graduación alcohólica de 45° grados.",
        thumbnail:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/fernet-fernet1-91d5664bb3aba475a316190256095692-1024-1024.jpg"

    }
await productos.getProductsById(1).then(id=>console.log(id))

}
ejecutar()