import { Component, HostListener } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mailer-edor-team';
  width = window.innerWidth;
  email = "";
  value = 0;
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }
  async sendEmail() {
    const expresionRegular = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    
    if(!this.email){
      alert("Contenido vacío, porfavor inserte un correo electrónico.")
    }else if(!expresionRegular.test(this.email)){
      alert("El formato de correo es incorrecto. Por favor, inténtelo de nuevo.")
    }else{
      this.value = 1;
      
      emailjs.init('rE4tze6u1FlB4AMGD');
      let response = await emailjs.send("service_4uogpdw","template_76p0mnc",{
        nombre: "Antonio Isidoro",
        email: this.email,
        });
        
      if(response.status==200){
        this.value = 2;
      }else{
        this.value = 3;
      }
      
    }
  }
}