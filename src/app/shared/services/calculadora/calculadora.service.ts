import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {
  
  public soma(numeroA: number, numeroB: number): number {
    return numeroA + numeroB;
  }
  
  public subtracao(numeroA: number, numeroB: number): number {
    return numeroA - numeroB;
  }
  
  public multiplicacao(numeroA: number, numeroB: number): number {
    return numeroA * numeroB;
  }
  
  public divisao(numeroA: number, numeroB: number): number {
    return numeroA / numeroB;
  }
}
