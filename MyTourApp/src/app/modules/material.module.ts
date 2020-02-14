import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatListModule, MatListItem, MatSelectModule
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
    ],
    exports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatSelectModule,
    ]
  })
  export class MaterialModule { }
