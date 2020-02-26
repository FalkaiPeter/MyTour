import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatButtonModule,
  MatListModule,
  MatSelectModule,
  MatProgressSpinnerModule
  } from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatSelectModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatSelectModule,
        MatProgressSpinnerModule,
    ]
  })
  export class MaterialModule { }
