import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleUserComponent } from './components/user/single-user/single-user.component';
import { ListResourceComponent } from './components/resource/list-resource/list-resource.component';
import { SingleResourceComponent } from './components/resource/single-resource/single-resource.component';
import { UserModule } from './components/user/user.module';
import { ResourceModule } from './components/resource/resource.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ListUserComponent,
    NavbarComponent,
    SingleUserComponent,
    ListResourceComponent,
    SingleResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ResourceModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
