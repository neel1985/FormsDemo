import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  { path:  'template-form', component:  TemplateDrivenFormComponent},
  { path:  'reactive-form', component:  ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [TemplateDrivenFormComponent, ReactiveFormComponent]
})
export class AppRoutingModule { }
