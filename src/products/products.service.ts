import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
@Injectable()
export class ProductsService {
  
   private products: Product[] = []; 

   insertProduct(title:string , desc: string , price:number):string{
       const prodId = new Date().toString();
       const newProduct = new Product(prodId, title , desc , price);
       this.products.push(newProduct);
       return prodId; 
   }

   getAllProducrs(){
     return [...this.products];
   }

}
