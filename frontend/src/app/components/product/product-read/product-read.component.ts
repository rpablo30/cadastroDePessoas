import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  

  products: Product[] = [];
  
  constructor( private productService: ProductService,private router : Router){

  }

  
  cancelarProduct() : void { 
    this.router.navigate(['/products'])
    console.log("Cancelou e voltou para NOVO PRODUCT ")
    
  }
   
  
  ngOnInit(): void {

      this.productService.read().subscribe(products => {
        this.products = products 
        console.log(products)
      })
    
    

  }

}
