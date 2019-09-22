import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'people', loadChildren: './people/people.module#PeoplePageModule' },
  { path: 'films', loadChildren: './films/films.module#FilmsPageModule' },
  { path: 'startships', loadChildren: './startships/startships.module#StartshipsPageModule' },
  { path: 'planets', loadChildren: './planets/planets.module#PlanetsPageModule' },
  { path: 'card-details/:actor', loadChildren: './card-details/card-details.module#CardDetailsPageModule' },
  { path: 'card-details-startship/:startship', loadChildren: './card-details-startship/card-details-startship.module#CardDetailsStartshipPageModule' },
  { path: 'card-details-planets/:p', loadChildren: './card-details-planets/card-details-planets.module#CardDetailsPlanetsPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
