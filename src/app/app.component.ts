import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from './api/api.service';
import 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'weatherapp';
  weathers = [];
  interval: any;

  constructor(private apiservice: ApiService, public http: HttpClient) {
   
   /* setInterval(() => this.ngOnInit, 5000);*/
   this.getWeathers();
  clearInterval(this.interval);
  this.today_date;
  this.interval = setInterval(() => {this.getWeathers()}, 20000)

  
  }
  today_date:Date = new Date();

 
  
 




 getWeathers = () => {
   console.log("getWeathers called")
    var url = "http://api.openweathermap.org/data/2.5/weather?id=1269843&appid=c9911a176e6cf7e1ad698d24ed938843";
    this.http.get(url).subscribe(data=>{
      var date = new Date();
      data['time'] = date;
    console.log(data);
    this.weathers.push(data);
    console.log(this.weathers)

   }, error=>{
     console.log(error)
   });

  //  this.apiservice.getweather().subscribe(
  //    data => {
      
      
  //    },
  //    error => {
  //      console.log(error);
  //    }
  //  );
 }

 ngOnDestroy() {
   clearInterval(this.interval);
 }



}
