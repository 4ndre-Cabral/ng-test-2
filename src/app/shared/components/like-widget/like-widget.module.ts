import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionDirectiveModule } from '../../directives/action/action.module';
import { CalculadoraService } from '../../services/calculadora/calculadora.service';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ActionDirectiveModule
  ],
  exports: [LikeWidgetComponent],
  providers: [UniqueIdService, CalculadoraService]
})
export class LikeWidgetModule {}
