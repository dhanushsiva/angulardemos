import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
info1: string[]=["roland", 'e354','rd@g.com']
info2: string[]=["jake", 'e355','jc@g.com']
info3: string[]=["eddie", 'e356','ed@g.com']

getinfo1(): string[]{
  return this.info1
}
getinfo2(): string[]{
  return this.info2
}
getinfo3(): string[]{
  return this.info3
}
addinfo(info: string){
  this.info1.push(info)
  this.info2.push(info)
  this.info3.push(info)
  return this.info1
}


 constructor() { }
}
