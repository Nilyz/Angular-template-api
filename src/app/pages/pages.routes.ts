import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import{PruebaCompComponent} from '../components/prueba-comp/prueba-comp.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Starter Page' },
      ],
    },
  },{
    path: 'prueba',
    component: PruebaCompComponent,
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/prueba' },
        { title: 'Starter Page' },
      ],
    },
  }
];
