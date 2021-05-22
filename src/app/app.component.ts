import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postgresqlwithng';

  orderdata: any = [];
  testingvariable: string = '';

  constructor(private ds: DataService) {
    this.ds.getData().subscribe(res => {
      if (res['result']) return this.orderdata = res['result'];
      else return console.log(res['err'])
      // this.testingvariable=res['message']
    })
  }

  public getData() {
    this.ds.getData().subscribe(res => {
      if (res['result']) return this.orderdata = res['result'];
      else return console.log(res['err'])
    })
  }

  public submitData(formdata: any) {
    let myString = parseFloat(formdata.totalvalue);
    let myString1 = parseFloat(formdata.phone);
    formdata.totalvalue = myString;
    formdata.phone = myString1;
    this.ds.createData(formdata).subscribe(response => {
      if (response['message']) {
        alert(response['message']);
        return this.getData();
      }
      else return console.log(response['message'])
    })
  }



}

