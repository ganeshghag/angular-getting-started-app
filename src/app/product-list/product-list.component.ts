import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  users = [];
  constructor(private http: HttpClient) { 

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: Object[]) => {
      this.users = data;
    });
   }


  share() {
    window.alert('shared OK');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/