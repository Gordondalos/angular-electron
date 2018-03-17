import {Component} from "@angular/core";
import {ElectronService} from "ngx-electron";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  constructor(private electronService: ElectronService) {

  }

  title = "app";

  launchWindow() {
    this.electronService.shell.openExternal("http://google.com");
  }
}
