import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-objetivos-menores',
  templateUrl: './objetivos-menores.component.html',
  styleUrl: './objetivos-menores.component.css'
})
export class ObjetivosMenoresComponent {
  @Input() objetivos: { [key: string]: number } = {
    unos: 0,
    doses: 0,
    treses: 0,
    cuatros: 0,
    cincos: 0,
    seises: 0
  };
}

