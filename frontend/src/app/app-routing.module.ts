import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/home/product-crud/product-crud.component";

const routesLocal: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductCrudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routesLocal)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
