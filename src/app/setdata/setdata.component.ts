import { Component } from '@angular/core';
import { BookShop } from '../Bookshop';
import { BookshopserviceService } from '../bookshopservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setdata',
  templateUrl: './setdata.component.html',
  styleUrl: './setdata.component.css'
})
export class SetdataComponent {
  bookshop:BookShop=new BookShop();
 constructor(private serv:BookshopserviceService,private rout:Router){}
 save(){
  //console.log(this.mobiles);
  this.serv.savebookshopDetails(this.bookshop);
  this.rout.navigate(['getbook']);
  }

}
