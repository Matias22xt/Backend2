const fs=require("fs").promises

class productManager {
  constructor(path){
     this.path=path
}
async addProduct(producto){
  try{
    const leer=await fs.readFile(this.path,"utf-8");
    const data= JSON.parse(leer)
    let id;
           data.length == 0
           ? (id = 1)
           : (id = data[data.length - 1].id + 1);
           const newProduct = { ...producto, id};
           data.push(newProduct);
           await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
           return newProduct.id;
  }catch(e){
    console.log(e)
  }
   
}
async getProductsById(id){
try{
    const leer=await fs.readFile(this.path,"utf-8");
    const data= JSON.parse(leer)
    const obj= data.find(obj=>obj.id==id)
    if (!obj){
        return null
    } 
    return obj

}catch(e){
    console.log(e)
}

}
async getProducts(){
      const leer=await fs.readFile(this.path,"utf-8");
      return JSON.parse(leer)
}

async deleteProducts(){
  try{ 
    await fs.writeFile(this.path, JSON.stringify([], null, 2), "utf-8")
} catch (e){
    console.log(e)
      }
    }
}

module.exports=productManager