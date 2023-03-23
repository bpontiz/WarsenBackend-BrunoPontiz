import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { Product } from 'src/interfaces/product/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        this.productsService.create(createProductDto);
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }
}
