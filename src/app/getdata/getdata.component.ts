import { Component, OnInit } from '@angular/core';
import { BookShop } from '../Bookshop';
import { BookshopserviceService } from '../bookshopservice.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrl: './getdata.component.css'
})
export class GetdataComponent implements OnInit{
  bookshop:BookShop[]=[]; 
  constructor(private serv:BookshopserviceService){}                        
    ngOnInit() {
     //this.getbookshopDetails().subscribe(x=>console.log(x));
     this.getbookshopDetails().subscribe(x=>this.bookshop=x);
    }
    
    getbookshopDetails() {
      return this.serv.getbookshopDetails();
    }
   

}
