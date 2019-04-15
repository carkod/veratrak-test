import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatDialogModule, MatFormFieldModule, MatGridListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { DetailComponent } from './detail/detail.component';
import { FilmsService } from './films.service';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { RouteRoutingModule } from './route/route-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MovieFormComponent,
    ListComponent,
    DetailComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule,
    RouteRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [
    FilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
