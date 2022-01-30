import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  product: Product={
    name:"",
    price:0,
    img:"",
    description:"",
  }

  log(){
    console.log(this.product);
  }

  createProduct(){
    this.api.createProducts(this.product).subscribe();
  }

}

interface Product{
  name:string
  price: number
  img:string
  description:string
}
