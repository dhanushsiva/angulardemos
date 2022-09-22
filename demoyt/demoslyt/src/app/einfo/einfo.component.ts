import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-einfo',
  templateUrl: './einfo.component.html',
  styleUrls: ['./einfo.component.css'],
  providers: [DataService]
})
export class EinfoComponent implements OnInit {
inforeceived1 : string[]=[];
inforeceived2 : string[]=[];
inforeceived3 : string[]=[];

getinfofromservice1(){
  this.inforeceived1 =this.deservice.getinfo1()
}
getinfofromservice2(){
  this.inforeceived2 =this.deservice.getinfo2()
}
getinfofromservice3(){
  this.inforeceived3 =this.deservice.getinfo3()
}
  constructor(private deservice: DataService) { }

  ngOnInit(): void {
  }
updateinfo(frm: any){
  this.deservice.addinfo(frm.value.location)
}
}
