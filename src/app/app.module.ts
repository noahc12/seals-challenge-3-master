import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './filter.pipe';
import { SlideshowModule } from 'ng-simple-slideshow';
import { DescriptionComponent } from './description/description.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { ResultsComponent } from './results/results.component';
import { NgxCarousel3dModule } from './modules/ngx-carousel-3d/ngx-carousel-3d.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { AlertComponent } from './alert/alert.component';
import { AuthenticationService, UserService, AlertService } from './_services';
import { fakeBackendProvider } from './_helpers';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { AccountComponent} from './account/account.component';
import { Results2Component } from './results2/results2.component';
import { Description2Component } from './description2/description2.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/:id', component: ResultsComponent },
  { path: 'results', component: Results2Component },
  { path: 'description/:id', component: DescriptionComponent },
  { path: 'description2/:id', component: Description2Component },
  { path: 'list', component: ListComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tv-show', component: TvShowComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'logged-in', component: LoggedInComponent },
  { path: 'account', component: AccountComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    FilterPipe,
    DescriptionComponent,
    CategoriesComponent,
    ResultsComponent,
    LoginComponent,
    RegisterComponent,
    TvShowComponent,
    AlertComponent,
    LoggedInComponent,
    AccountComponent,
    Results2Component,
    Description2Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlideshowModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    FormsModule,
    ReactiveFormsModule,
    NgxCarousel3dModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
