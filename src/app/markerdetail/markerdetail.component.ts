import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { MainService } from '../_services/main.service';
import { Component, OnInit,ViewChild,ElementRef,ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-markerdetail',
  templateUrl: './markerdetail.component.html',
  styleUrls: ['./markerdetail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MarkerdetailComponent implements OnInit {


imagearray=[]

loading=false
startyear=2013
showyear:number=2013
imagesrc:string
 animateclicked =false
 markerid:any
 markerdetail:any={}
preloadImages:any
 @ViewChild('anidiv') animatediv: ElementRef;

  constructor(public mainService:MainService,
              private db: AngularFirestore, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading=true
    this.markerid = this.route.snapshot.paramMap.get('id');
    console.log(" got label from other page ",this.markerid);


    this.mainService.getByIdAndCollection('marker',this.markerid)
    .then(list => {
      console.log("here we are");
      this.markerdetail = list;
      this.imagearray=list.picurl;
      this.imagesrc= list.picurl[0];
      console.log(this.markerdetail.lat);
      this.loading=false
    })
    
    
    .catch(err => {
        console.log(err);
    });


  }
 
next(){
  
  var  temp=this.selected.value;
  temp++;
  this.showyear=this.startyear+temp
temp=(temp)%this.imagearray.length
this.selected.setValue(temp)
console.log("current index",temp)

this.loading=false
}
previous(){
  
  var  temp=this.selected.value;
  temp--;
  this.showyear=this.startyear+temp
temp=(temp)%this.imagearray.length
this.selected.setValue(temp)
console.log("current index",temp)

this.loading=false
}


  

 

tabs = ['First', 'Second', 'Third'];
selected = new FormControl(0);

addTab(selectAfterAdding: boolean) {
  this.tabs.push('New');

  if (selectAfterAdding) {
    this.selected.setValue(this.tabs.length - 1);
  }
}

removeTab(index: number) {
  this.tabs.splice(index, 1);
}

}