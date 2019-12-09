import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { IndexPageComponent } from './blogs/index-page/index-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: IndexPageComponent },
  { path: 'indexpage', component: IndexPageComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogDetailsComponent', component: BlogDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogDetailsComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
