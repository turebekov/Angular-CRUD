import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}   from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductComponent} from './product/product.component';
import {PhoneComponent} from './phone/phone.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PhoneComponent,
        ProductComponent,
        PhoneDetailComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}