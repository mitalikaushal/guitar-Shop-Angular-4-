import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components imports
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { ProductComponent } from './components/product/product.component';
//Services imports
import { DataService } from './services/data.service';
import { OrderDetailsComponent } from './components/order-details/order-details.component';



//path
const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'guitars', component:GuitarsComponent},
  {path: 'order-details', component:OrderDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    GuitarsComponent,
    ProductComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
