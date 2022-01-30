import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "http://cryptic-harbor-83412.herokuapp.com"

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get(this.baseUrl + "/products",{responseType:'text'})
  }
  createProducts(product:Product){
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    const body = JSON.stringify(product);

    return this.http.post(this.baseUrl + 'product', body, {headers: headers});
  }
  deleteProduct(product:Product){
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    const body = JSON.stringify(product);

    return this.http.post(this.baseUrl + 'product', body, {headers: headers});
  }
}

interface Product{
  name:string
  price: number
  img:string
  description:string
}
