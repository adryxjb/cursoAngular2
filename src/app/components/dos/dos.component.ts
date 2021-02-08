import { Component } from "@angular/core";

@Component({
  selector: "dosComponent",
  templateUrl: "./dos.component.html",
  styleUrls: ["./dos.component.css"]
})
export class DosComponent {
  nombre: string;
  precio: number;
  marca: string;
  status: boolean;
  categoria: string;

  constructor() {
    this.nombre = "Licuadora";
    this.precio = 300;
    this.marca = "Oster";
    this.status = true;
    this.categoria = "Electrodomesticos";
  }
}
