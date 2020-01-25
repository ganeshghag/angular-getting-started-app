import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  title = 'default';

  constructor(private http: HttpClient) { 
    this.http.get('assets/shipping.json').subscribe((data: Object) => {
      //console.log(data);
      //let retobj = JSON.parse(data[0]);
      //console.log(retobj);

      this.title =data[0].type;
    });
    
  }

  ngOnInit() {
  }

  onCheckOut(){
    alert('checkout clicked !');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/