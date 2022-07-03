import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DasbhoardComponent } from './dasbhoard/dasbhoard.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AnimationComponent } from './animation/animation.component';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import { DeleteComponent } from './delete/delete.component';
import { HighlightDirective } from './directive/highlight.directive';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DasbhoardComponent,
    TransactionComponent,
    AnimationComponent,
    AnimationDemoComponent,
    DeleteComponent,
    HighlightDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   BrowserAnimationsModule,
   HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
