import { Injectable } from '@angular/core';
import { BookShop } from './Bookshop';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookshopserviceService {
  url="http://localhost:8080"
  constructor(private http:HttpClient) { }
  getbookshopDetails() {
    return this.http.get<BookShop[]>(`${this.url}/${"getdata"}`);
  }
  savebookshopDetails(bookshop:BookShop){
    return this.http.post<BookShop>("http://localhost:8080/setdata",bookshop).subscribe(x=>console.log(x));
  }

}
