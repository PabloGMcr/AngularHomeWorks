import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  mostrar= true;
  
  frase_1:any ={
  mensaje:'Un gran poder conlleva una gran responsabilidad',
  autor:'Benjamin Franklin Parker'
  }

  
  
}
