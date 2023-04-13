import { Router } from "express";
import ProductosManager from "../../manager/productosManager.js";

const router = Router();
const manager = new ProductosManager();

let product = {
  titulo: "Portillo Malbec",
  descripcion: "Color rojo violeta intenso brillante, nariz frutada donde prevalece frutas rojas frescas (ciruelas y moras) sin aromas cocido o mermeladas; boca: entrada fresca debido a su acidez natural, sensación frutal, taninos redondos o maduros, final dulce y largo. Equilibrado e intenso con carácter varietal claro.",
  precio: 1250,
  thumbnail: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/portillo-malbecc1-03c650826290e6aee715949251039734-480-0.jpg",
  code: 633,
  stock: 12,
  status: true,
  category: "vinos"
};

router.get("/", async (req, res) => {
  let productos = await manager.getProducts();
  const products = req.query.products;

  if (!products) {
    res.send({ productos });
  }

  let productsFiltrados = productos.filter((produc) => produc.id <= products);

  res.send({ productsFiltrados });
});

router.get("/:pid", async (req, res) => {
  let productos = await manager.getProducts();
  const pid = parseInt(req.params.pid);

  let productoSolicitado = productos.find((produc) => produc.id === pid);

  res.send({ productoSolicitado });
});

router.post("/", async (req, res) => {
  if (
    product.titulo == "" ||
    product.descripcion == "" ||
    product.category == "" ||
    product.precio == 0 ||
    product.code == 0
  ) {
    console.log("Todos los campos son obligatorios");
  } else if (product.stock == 0) {
    console.log("No hay stock");
  }

  let productNuevo = await manager.addProducts(product);

  res.send({ productNuevo });
});

router.put("/:pid", async (req, res) => {
  let productos = await manager.getProducts();
  const pid = parseInt(req.params.pid);

  let productoSolicitado = productos.find((produc) => produc.id === pid);
  let actualizarProducto = await manager.updateProduct(
    productoSolicitado.id,
    "Johnnie Walker Red Label 750 Ml",
		"La mezcla es en parte arte y en parte ciencia. Es una habilidad de la Familia Walker desarrollada a lo largo de muchas generaciones. Etiqueta roja, con su combinación de whiskies claros de la oscura costa este de Escocia y whiskies de la punta de la costa oeste, creó una mezcla con una extraordinaria profundidad de sabor. El sabor viaja en toda su paladar para ofrecer una experiencia que ni siquiera otros whiskies no ordinarios pueden igualar. El carácter del whisky se define por una intensa, picante y marcada sensación de sabores. Una ráfaga de etiqueta roja golpea el paladar con la frescura del agua de una ola al estrellarse, seguido por el sabor de las especias aromáticas y, finalmente, un largo y persistente, acabado humeante. La sensación en la boca es compleja - 'picante dulce' es una buena descripción de este gusto y la sensación de hormigueo en la lengua.",
		8530,
		"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/red-label-750-ml1-2cc5c0a70f3e86311016262835929050-1024-1024.jpg",
		2003,
		8,
		 true,
		"whisky",
  );

  res.send({ actualizarProducto });
});

router.delete("/:pid", async (req, res) => {
  let productos = await manager.getProducts();
  const pid = parseInt(req.params.pid);

  let productoSolicitado = productos.find((produc) => produc.id === pid);

  await manager.deleteProduct(productoSolicitado.id);
  res.send(`El producto fue eliminado.`);
});

export default router;
