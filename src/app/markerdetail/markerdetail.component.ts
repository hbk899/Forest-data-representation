import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { MainService } from '../_services/main.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-markerdetail',
  templateUrl: './markerdetail.component.html',
  styleUrls: ['./markerdetail.component.css']
})
export class MarkerdetailComponent implements OnInit {
 markerid:any
 makerdetail:any
  constructor(public mainService:MainService,
              private db: AngularFirestore, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.markerid = this.route.snapshot.paramMap.get('id');
    console.log(" got label from other page ",this.markerid);


    this.mainService.getByIdAndCollection('marker','zA7WAB5WXymmjWWCGxk0')
    .then(list => {
      this.makerdetail = list;
      console.log(this.makerdetail);
    })
    
    
    .catch(err => {
        console.log(err);
    });


  }
 
  
  }


