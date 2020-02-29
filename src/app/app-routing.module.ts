import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { ProjectsComponent} from './pages/projects/projects.component';
import { AmiicComponent} from './pages/projects/amiic/amiic.component';
import { AboutComponent} from './pages/about/about.component';
import { SupportComponent} from './pages/support/support.component';
import {SocialComponent} from './pages/social/social.component';
import {ErrorComponent} from './pages/error/error.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'projetos', component: ProjectsComponent},
  { path: 'amiic', component: AmiicComponent},
  { path: 'sobre', component: AboutComponent},
  { path: 'donate', component: SupportComponent},
  { path: 'social', component: SocialComponent},
  { path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
