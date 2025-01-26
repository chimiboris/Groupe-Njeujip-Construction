import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';


//import { routes } from './app.routes';
import { ContactComponent } from './contact/contact/contact.component';
import { AProposComponent } from './a-propos/a-propos/a-propos.component';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { NosServicesComponent } from './nos-services/nos-services.component';

export const routes: Routes = [

  {
      path: 'accueil',
      component: AcceuilComponent
  },
  {
    path: 'nos-services',
    component: NosServicesComponent
  },
  {
      path: 'a-propos',
      component: AProposComponent
  },
  {
      path: 'portfolio', 
      component: PortfolioComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  },
  {
      path: '', 
      component: AcceuilComponent
  },
  {
      path:'', redirectTo: '/acceuil', pathMatch:'full'
  },


];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};