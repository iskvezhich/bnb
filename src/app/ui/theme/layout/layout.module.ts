import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  declarations: [
    LayoutComponent, //
    MainComponent,
  ],
  imports: [
    CommonModule, //
    RouterModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
