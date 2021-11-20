import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LemmaListPageComponent } from './lemma-list-page/lemma-list-page.component';
import { MsListPageComponent } from './ms-list-page/ms-list-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { WorkListPageComponent } from './work-list-page/work-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lemmas', component: LemmaListPageComponent },
  { path: 'works', component: WorkListPageComponent },
  { path: 'mss', component: MsListPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
