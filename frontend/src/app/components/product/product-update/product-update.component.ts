import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
 
  constructor(private router : Router){


  }

  cancelarProduct() : void { 
    this.router.navigate(['/products/read'])
    console.log("Cancelou e voltou para NOVO PRODUCT ")
    
  }
  
  
  ngOnInit(): void {
   
  }

}
