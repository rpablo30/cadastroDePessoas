import { Product } from './../product-model';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  
  

  constructor(
    private productService :ProductService ,
    private router : Router , 
    private route : ActivatedRoute

    ){


  }
  product : Product = {
    name : ''  , 
    price : 0 
   }
 
  
  ngOnInit(): void {

   
    
   
  }
  
  
  updateProduct(): void {
    

  }
   cancelarProduct() : void { 
    this.router.navigate(['/products/read'])
    
  }
  
  

}
