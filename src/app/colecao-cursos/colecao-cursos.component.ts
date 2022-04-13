import { Component } from '@angular/core';

@Component({
  selector: 'app-colecao-cursos',
  templateUrl: './colecao-cursos.component.html',
  styleUrls: ['./colecao-cursos.component.css']
})
export class ColecaoCursosComponent{


  getCargaHoraria(cargaHoraria: any){
    return cargaHoraria + " horas/mês"
  }

  cursosColecao = [{
    nomeCurso: "Educação Física",
    cargaHoraria: "60",
  },
  {
    nomeCurso: "Culinária",
    cargaHoraria: "80",
  },
  {
    nomeCurso: "Medicina",
    cargaHoraria: "120",
  },
  {
    nomeCurso: "Engenharia",
    cargaHoraria: "100",
  }]

}
