import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SchoolComponent } from './pages/school/school.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'school', component: SchoolComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
