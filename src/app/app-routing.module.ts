import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {PhoneComponent} from './phone/phone.component';
import {ProductComponent} from './product/product.component';
import {PhoneDetailComponent} from './phone-detail/phone-detail.component';
const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'phone', component: PhoneComponent},
    {path: 'phone-detail/:id', component:PhoneDetailComponent},
    {path: 'product', component: ProductComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
