import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPage } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
