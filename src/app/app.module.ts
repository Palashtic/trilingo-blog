import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { IndexPageComponent } from './blogs/index-page/index-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogDetailsComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
