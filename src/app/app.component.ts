import { Component ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedfeature = 'home'
  onNavigate(feature:string){
    this.loadedfeature=feature;
  }
}
