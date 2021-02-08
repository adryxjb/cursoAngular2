import { Component } from "@angular/core";

@Component({
  selector: "unoComponent",
  templateUrl: "./uno.component.html",
  styleUrls: ["./uno.component.css"]
})
export class UnoComponent {
  public titulo: string;

  constructor() {
    this.titulo = "Mis tiendas";
  }
}
