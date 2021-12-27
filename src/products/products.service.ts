import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
@Injectable()
export class ProductsService {
  
   private products: Product[] = []; 

   insertProduct(title:string , desc: string , price:number):string{
       const prodId = Math.random().toString();
       const newProduct = new Product(prodId, title , desc , price);
       this.products.push(newProduct);
       return prodId; 
   }

   getAllProducrs(){
     return [...this.products];
   }

   getSingleProduct(productId :string){
      const product = this.findProduct(productId)[0];
      if(!product){
       throw new NotFoundException('Could not find product');
      }
      return {...product };
   }

   updateProduct(productId :string , title:string , description:string , price:number){
      const [product , index] = this.findProduct(productId);
      if(!product){
         throw new NotFoundException('Could not find product');
      }
      const updatedProduct = {...product};
      if(title){
        updatedProduct.title = title;
      }
      if(description){
        updatedProduct.description=description;
      }
      if(price){
        updatedProduct.price = price;
      }
      this.products[index] = updatedProduct;
      
   }

   deleteProduct(productId:string) {
    const [product , index] = this.findProduct(productId);
    if(!product){
       throw new NotFoundException('Could not find product');
    }
   }

   private findProduct(id:string):[Product,number]{
      const productIndex = this.products.findIndex(prod => prod.id === id);
      const product = this.products[productIndex];
      if(!product){
        throw new NotFoundException('Could not find product');
     }
     return [product,productIndex];

   }



}
