import { ParseSourceFile } from "@angular/compiler";

export class Registro{
    _id?: number;
    nombre:string;
    apellido:string;
    direccion: string;
    telefono:number;
    fechaNacimiento:Date;
    correo:string;
    contraseña:string ;
    
    constructor(nombre:string,apellido:string,direccion:string,telefono:number,fechaNacimiento:Date,correo:string, contraseña:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono= telefono;
        this.fechaNacimiento = fechaNacimiento;
        this.correo = correo;
        this.contraseña = contraseña;
    }
    
}