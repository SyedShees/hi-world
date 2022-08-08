 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Hi-SheesSyed';
  kid="You Must Obey";
  child=['ali','saad'];

  addchild(newchild: string){
    this.child.push(newchild);
  }
}
