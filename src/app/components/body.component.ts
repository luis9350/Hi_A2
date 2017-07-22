import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})
export class BodyComponent {
  mostrar:boolean=true;
  texto:string="un gran poder requiere una gran reponsabilidad.";
  autor:strin="ben parker.";

  personajes:string[]=["Dr. Octopus","Venon","Spiderman","otro"];
}
