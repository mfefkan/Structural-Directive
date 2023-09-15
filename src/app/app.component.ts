import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<!--<div *appCustomif="true"> MERHABA </div> <ul> <li *appCustomfor="10; let i" >Muhammed {{i}}</li> --> <ul> <li *appCustomfor="names; let name; let index = index" >Muhammed {{name}} ---- {{index}}</li>'

})
export class AppComponent {
  title = 'Structural-Directive';
  names: string[] = ["Ahmet", "Murtaza", "Rıfkı", "Şuayp", "Hilmi", "Hüseyin"];
}
