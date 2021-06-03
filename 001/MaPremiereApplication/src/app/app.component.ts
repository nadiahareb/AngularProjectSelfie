import { Component } from '@angular/core';
import { Selfie } from './models/selfie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MonSelfie';
  subTitle ='Sous titre Selfie';
  LogoDisplay = false; 
  lesSelfies:Selfie[]=// [new Selfie(), new Selfie(), new Selfie()]
  [ 
    
    {image :'',person: {nom :'Nadia', selfies:[]}},
    {image :'',person: {nom :'Kamel', selfies:[]}},
    {image :'',person: {nom :'Yassmine', selfies:[]}},
    {image :'',person: {nom :'Yassine', selfies:[]}}
  
  ]
 
}
