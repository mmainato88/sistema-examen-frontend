import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    userName: '',
    password: '',
    nombreP: '',
    apellido: '',
    email: '',
    telefono: ''
  }

  constructor(private userService: UserService) { }//, private snack: MatSnackBar) { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  formSubmit() {
    /*console.log(this.user);
    if (this.user.username == ' ' || this.user.username == null) {
      //this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
      // duration: 3000,
      //verticalPosition: 'top',
      //horizontalPosition: 'right'
      alert('El nombre del usuario es requerido');
    }
    return;*/
    this.guardarUsuario();
  }


  //userService.añadirUsuario se va ir al API rest, y esa API res
  //va retornar un OBSERVABLE, como yo soy un OBSERVER, tengo que
  //suscribir, ¿para que? para obtener esos datos
  guardarUsuario() {
  this.userService.registrarUsuario(this.user).subscribe(
    data => {
      console.log(data);
      alert('usuario guardado con exito');
    })
  }

 /* guardarUsuario() {
    this.userService.registrarUsuario(this.user).subscribe(
      data => {
        console.log(data);
        alert('usuario guardado con exito');
      }

    );
  }*/

  }