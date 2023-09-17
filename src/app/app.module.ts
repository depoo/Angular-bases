import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Moduls
import { CounterModule } from './counter/counter.module';

// Components
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  // Here imports the moduls
  imports: [
    BrowserModule,
    CounterModule,  //<-- import module "CounterModule"
    HeroesModule,  //<-- import module "HeroesModule"

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
