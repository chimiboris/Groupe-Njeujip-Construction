import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { AProposComponent } from './a-propos/a-propos/a-propos.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { ContactComponent } from './contact/contact/contact.component';

export const routes: Routes = [

    {
        path: 'accueil',
        component: AcceuilComponent
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
