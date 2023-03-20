class ProductManager{
    constructor(){
        this.products = []
    }

    getProducts(){
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        let id_product = (this.getProducts()).length;

        let product = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ++id_product
        }

        if(!product.title||
            !product.description||
            !product.price||
            !product.thumbnail||
            !product.code||
            !product.stock||
            !product.id
            ){
                return 'Todos los campos son obligatorios'
            }
        let codigo = this.products.find((prod) => prod.code == product.code)

        if(codigo){
            return 'El codigo ya existe, ingrese un nuevo codigo'
        }else {
            this.products.push(product);
            return this.products;
        }
    }

    getProductById(id_product){
        let product = this.products.find(product => product.id == id_product)

        if(product){
            return product
        }else{
            return 'Not Found'
        }

    }
}

const productos = new ProductManager()
productos.addProduct('Rutini Cabernet', 'Malbec', 4600, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/rutinicabernetmalbec1-3fc58d737b2682e9e216009597899196-640-0.jpg", "6113", 12)

console.log(productos.getProductById(1))
