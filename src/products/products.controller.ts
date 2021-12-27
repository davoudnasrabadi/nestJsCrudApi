import { Controller , Post , Body ,Get} from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Post()
    addProduct(@Body('title') prodTitle , @Body('description') profDesc , @Body('price') prodPrice:number){
       const generatedId= this.productsService.insertProduct(prodTitle,profDesc,prodPrice);
       return {id:generatedId};
    }

    @Get()
    getAllProducts(){
       return this.productsService.getAllProducrs();
    }
     
}