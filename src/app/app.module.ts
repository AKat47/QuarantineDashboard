import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuarantineComponent } from './Quarantine/Quarantine.component';
import { QuarantineDetailComponent } from './Quarantine-detail/Quarantine-detail.component';
import { QuarantineCreateComponent } from './Quarantine-create/Quarantine-create.component';
import { QuarantineEditComponent } from './Quarantine-edit/Quarantine-edit.component';

const appRoutes: Routes = [
  {
    path: 'Quarantines',
    component: QuarantineComponent,
    data: { title: 'Quarantine List' }
  },
  {
    path: 'Quarantine-details/:id',
    component: QuarantineDetailComponent,
    data: { title: 'Quarantine Details' }
  },
  {
    path: 'Quarantine-create',
    component: QuarantineCreateComponent,
    data: { title: 'Create Quarantine' }
  },
  {
    path: 'Quarantine-edit/:id',
    component: QuarantineEditComponent,
    data: { title: 'Edit Quarantine' }
  },
  { path: '',
    redirectTo: '/Quarantines',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    QuarantineComponent,
    QuarantineDetailComponent,
    QuarantineCreateComponent,
    QuarantineEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
