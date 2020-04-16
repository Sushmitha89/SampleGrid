import { Component, OnInit } from '@angular/core';
import { GithubApiService} from '../github-api.service';
 import {Observable } from 'rxjs'; 
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
   RowData: any;
  
  
    constructor( private githubapiService : GithubApiService) { }
  
  ngOnInit(){
  this.githubapiService.getApiData().subscribe((data) => {
      console.log(data);
      this.RowData = data;
      console.log(this.RowData);
    });
}
//Get data from API

}
