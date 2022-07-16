import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Registro } from 'src/app/models/registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
registroFrom: FormGroup
  

  constructor(private fb: FormBuilder, private router:Router, private toastr: ToastrService) {
    this.registroFrom = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono:['', Validators.required],
      fechaNacimiento:['', Validators.required],
      correo:['', Validators.required],
      contraseña:['', Validators.required]

    })
   }

  ngOnInit(): void {
  }

  registarUsuario(){
    console.log(this.registroFrom);

    console.log(this.registroFrom.get('nombre')?.value);


    const REGISTRO: Registro = {
      nombre: this.registroFrom.get('nombre')?.value,
      apellido: this.registroFrom.get('apellido')?.value,
      direccion: this.registroFrom.get('direccion')?.value,
      telefono: this.registroFrom.get('telefono')?.value,
      fechaNacimiento: this.registroFrom.get('fechaNacimiento')?.value,
      correo: this.registroFrom.get('correo')?.value,
      contraseña: this.registroFrom.get('contraseña')?.value,
    }
    console.log(REGISTRO)
    this.toastr.info('Usuario registrado con exito!', 'Usuario Registro!');
    this.router.navigate(['/login'])



    
  }

}
