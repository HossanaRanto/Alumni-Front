import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    ImageViewerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SpinnerComponent
  ]
})
export class UIModule { }
