import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@app/ui/icons';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    RouterModule, //
    IconsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
