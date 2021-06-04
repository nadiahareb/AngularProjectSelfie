import { Component, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit {

  lesSelfies:Selfie[]=// [new Selfie(), new Selfie(), new Selfie()]
  [ 
    
    
    {image :'https://cdn.vox-cdn.com/thumbor/oIRY68qFM3SiUyNQWoYwt_c3BM4=/0x0:2560x1600/1200x800/filters:focal(1662x443:2070x851)/cdn.vox-cdn.com/uploads/chorus_image/image/54121337/smurfscover.0.jpg',titre:'Mon deuxieme Selfie',person: {nom :'Kamel', selfies:[]}},
    {image :'https://cdn.vox-cdn.com/thumbor/t4u3bJVhQ_AEfAbfgsFiWUjfqks=/0x0:1200x633/1200x800/filters:focal(504x220:696x412)/cdn.vox-cdn.com/uploads/chorus_image/image/64502677/1183613.0.jpg',titre:'troisieme Selfie',person: {nom :'Yassmine', selfies:[]}},
    {image :'https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/07/30/1375219821000-XXX-SMURFS-2-MOV-jy-1133-1307301727_16_9.jpg',titre:'Mon quatreme Selfie',person: {nom :'Yassine', selfies:[]}},
    {image :'https://pyxis.nymag.com/v1/imgs/370/fac/d9edd489d58af28486e69226c588f3b8c4-25-smurfs2.rsquare.w330.jpg',titre:'Mon premier Selfie',person: {nom :'Nadia', selfies:[]}}
   
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
