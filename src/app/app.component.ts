import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postgresqlwithng';

  array:any=[];
  testingvariable:string='';

  constructor(private ds:DataService){
    this.ds.getData().subscribe(res=>{
      // this.array=res['obj']
      this.testingvariable=res['message']
      console.log(res['message']);
    })
  }

  getData(){
    this.ds.getData().subscribe(res=>{
      console.log(res['message']);
    })
  }

  submitData(formdata:any){
    console.log(formdata);
    this.ds.createData(formdata).subscribe(response=>{
      alert(response['message'])
    })
  }



}

