import { Component, OnInit, Renderer2 } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {  AgmMarker } from '@agm/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { MainService } from '../_services/main.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { LatLngLiteral } from '@agm/core/map-types';
import { forEach } from '@angular/router/src/utils/collection';
import { HostListener,ElementRef } from "@angular/core";
import {Renderer} from "@angular/core";
import { Injectable, Optional } from '@angular/core';
//import * as jsondata from '../../assets/lakes.json';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.css']
})
@Injectable()
export class MyMapComponent implements OnInit {
  private renderer: Renderer;
  @ViewChild('AgmMap') agmMap: any;
  @ViewChild('wrapper') wrapper: ElementRef;
  clickedmarkerid:number
  zoom: number = 5;
  mapdata:any=[]
  mapdata2:any=[]
  showpoly:boolean=false
  // initial center position for the map
  lat: number = 30.3753;
  lng: number = 69.3451;
  private changeLat: number;
  private changeLng: number;
  private centerLat: number;
  private centerLng: number;
  ans:any
  sidenavdata:any = {
   description:"",
   label :"",
   id:"",
   type:"",
  };
  screenHeight:any;
  screenWidth:any;
  //geoJsonObject: Object =


  constructor( private db: AngularFirestore,public mainService:MainService) {


  }

   styleFunc(feature) {
     return ({
       clickable: false,
       fillColor: 'red',
       strokeWeight: 1
     });
   }
  ngOnInit() {



    //this.postpoly("Km9QzKUwUTMnypEbEemt",dat);

    this.mainService.getCollection("marker")
    .then(list => {
      list.forEach(element => {

      this.mapdata.push(element);
     });})
    .catch(err => {
        console.log(err);
    });


    //getting second marker collection

    this.mainService.getCollection("marker2")
    .then(list => {
      list.forEach(element => {

      this.mapdata2.push(element);
     });})
    .catch(err => {
        console.log(err);
    });


}

// @HostListener('window:resize')
//   onWindowResize() {

//     console.log("calling on resize");
//     this.onResize();
//   }


  onResize() {
    // resize the container for the google map
    this.renderer.setElementStyle(

      this.wrapper.nativeElement, "height",
      (window.innerHeight ) + 'px'
    );

    // recenters the map to the resized area.
    this.agmMap.triggerResize().then(() =>
       this.agmMap._mapsWrapper.setCenter({lat: this.centerLat, lng: this.centerLng}));
  }

  // idle fires after paning or zooming is done.
  // This is where we want to capture the center of the map.
  // This way if the user resizes, the center is preserved.
  idle() {
    this.centerLat = this.changeLat;
    this.centerLng = this.changeLng;
  }

// this event fires whenever any event changes the center. Panning, zooming, or resizing.
  centerChange(event: any) {
    if (event) {
      this.changeLat = event.lat;
      this.changeLng = event.lng;
    }
  }



  clickedMarker(clickedMarker,type) {

    console.log(`clicked the marker: ${ clickedMarker.label}`);
    this.sidenavdata=clickedMarker
    this.sidenavdata.type=type;

  }
  handlezoomchange(znumber:number){

   console.log("now zoom is",znumber)
   if(znumber>6){
     this.showpoly=true
   }
   else if(znumber<=6)
    this.showpoly=false


  }

  mouseOver($event){
    console.log("now mouse is",$event)

  }

  mapClicked($event: MouseEvent) {
   return
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);

  }
onPolyclick(polygonclicked){

  console.log("this poly was click",polygonclicked);
  this.sidenavdata=polygonclicked;

}




private convertToLatLngLiteral(array: any): Array<LatLngLiteral> {
  let result: Array<LatLngLiteral> = new Array<LatLngLiteral>();
  for (let coords of array) {
    result.push({
      lat: coords[1],
      lng: coords[0]
    });
  }
  console.log("conversion success")
  return result;
}



postpoly(id,data){
console.log("passing data to lat-lng")
  var result=this.convertToLatLngLiteral(data);
 this.db.collection('marker2').doc(id).update({
 polygon:result

  });



}
postarray(id,data){
  this.db.collection('marker2').doc(id).update({
   imgyear:data

   });
}


}
interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
  polygon:Array<LatLngLiteral>;



}
interface polygon{
  paths: any []
  _id:string
   label
}

