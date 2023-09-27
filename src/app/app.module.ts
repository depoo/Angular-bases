import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Moduls
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  // Here imports the moduls
  imports: [
    BrowserModule,
    CounterModule,  //<-- import module "CounterModule"
    HeroesModule,  //<-- import module "HeroesModule"
    DbzModule,     //<-- import module "DbzModule"

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
