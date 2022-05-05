import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@app/ui/icons';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    RouterModule, //
    IconsModule,
    MatButtonModule,
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
