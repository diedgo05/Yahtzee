import { Component } from '@angular/core';

@Component({
  selector: 'app-dados-home',
  templateUrl: './dados-home.component.html',
  styleUrls: ['./dados-home.component.css']
})
export class DadosHomeComponent {
  dados = [
    { valor: 0, bloqueado: false },
    { valor: 0, bloqueado: false },
    { valor: 0, bloqueado: false },
    { valor: 0, bloqueado: false },
    { valor: 0, bloqueado: false }
  ]; 
  objetivos = {
    unos: 0,
    doses: 0,
    treses: 0,
    cuatros: 0,
    cincos: 0,
    seises: 0
  };

  contador = 0;
  maxContador = 3;

  tirarDados() {
    if (this.contador < this.maxContador) {
      this.dados.forEach(dado => {
        if (!dado.bloqueado) {
          dado.valor = Math.floor(Math.random() * 6) + 1;
        }
      });
      this.actualizarObjetivos();
      this.contador++;
    }
  }

  reiniciarDados() {
    this.dados.forEach(dado => {
      dado.valor = 0;  
      dado.bloqueado = false;
    });
    this.contador = 0;

    this.objetivos = {
      unos: 0,
      doses: 0,
      treses: 0,
      cuatros: 0,
      cincos: 0,
      seises: 0
    };
  }

  Bloquear(index: number) {
    this.dados[index].bloqueado = !this.dados[index].bloqueado;
  }

  actualizarObjetivos() {
    this.objetivos = {
      unos: 0,
      doses: 0,
      treses: 0,
      cuatros: 0,
      cincos: 0,
      seises: 0
    };

    this.dados.forEach(dado => {
      if (dado.valor === 1) this.objetivos.unos += 1;
      if (dado.valor === 2) this.objetivos.doses += 2;
      if (dado.valor === 3) this.objetivos.treses += 3;
      if (dado.valor === 4) this.objetivos.cuatros += 4;
      if (dado.valor === 5) this.objetivos.cincos += 5;
      if (dado.valor === 6) this.objetivos.seises += 6;
    });
  }
}
