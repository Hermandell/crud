import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesServiceService } from '../../servicios/heroes-service.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe=new HeroeModel();


  constructor(private HeroesServiceService:HeroesServiceService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {

  }




  guardar(form:NgForm)
  {

    if(form.invalid)
    {
      console.log('Formulario no Valido');
      return;

    }

    Swal.fire({
      icon: 'info',
      title:'Espere',
      text: 'Guardando información',
      allowOutsideClick: false
    });

    Swal.showLoading();

let peticion :Observable<any>

// si tnemos heroe id


  peticion= this.HeroesServiceService.crearHeroe(this.heroe);


peticion.subscribe(resp=>{

  Swal.fire({
    icon: 'success',
    title: this.heroe.nombre,
    text: 'Se actualizo correctamente',
  });

})

}






}
