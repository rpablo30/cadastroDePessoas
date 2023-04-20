import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/home/product-crud/product-crud.component";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";
import { ProductReadComponent } from "./components/product/product-read/product-read.component";
import { ProductRead2Component } from "./components/product/product-read2/product-read2.component";

const routesLocal: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductCrudComponent,
  },
  {
    path: "product/create",
    component: ProductCreateComponent,
  },
  {
    path: "products/read",
    component: ProductReadComponent,
  } ,
  {
    path: "products/read2",
    component: ProductRead2Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesLocal)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
