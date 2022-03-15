import {NgModule} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';


@NgModule({
  exports: [
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
  ]
})
export class MaterialExampleModule {}
