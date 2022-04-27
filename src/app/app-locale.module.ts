import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import localeUk from '@angular/common/locales/uk';

registerLocaleData(localeUk);

@NgModule({
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'uk-UA',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'UAH',
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'uk-UA',
    },
  ],
})
export class AppLocaleModule {}
