
import { PhonesComponent } from './phones/phones.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneItemComponent } from './phones/phone-item/phone-item.component';

const routes: Routes = [
  { path: '', component: PhonesComponent },
  { path: 'phones/:id', component: PhoneItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
