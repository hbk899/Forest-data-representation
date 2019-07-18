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
   id:""
  };
  screenHeight:any;
  screenWidth:any; 
  constructor( private db: AngularFirestore,public mainService:MainService) { 

    
  }

  ngOnInit() {
    

    

    this.mainService.getCollection("marker")
    .then(list => {
      list.forEach(element => {
      this.mapdata.push(element);
     });})
    .catch(err => {
        console.log(err);
    });

  
}
ngAfterViewInit() {
  this.renderer.setElementStyle(
    this.wrapper.nativeElement, 'height',
    (window.innerHeight) + 'px'
  );
  console.log("ng on view")
}
@HostListener('window:resize')
  onWindowResize() {

    console.log("calling on resize");
    this.onResize();
  }


  onResize() {
    // resize the container for the google map
    this.renderer.setElementStyle(
      this.wrapper.nativeElement, 'height',
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



  clickedMarker(clickedMarker) {
    
    console.log(`clicked the marker: ${ clickedMarker.label}`);
    this.sidenavdata=clickedMarker
  
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
      lat: coords[0],
      lng: coords[1]
    });
  }
  console.log("conversion success")
  return result;
}


changedim(maker){

var temp=maker.polygon;

var tempdim

temp.forEach(element => {
  tempdim=element.lat;
  element.lat=element.lng;
  element.lng=tempdim;
});
maker.polygon=temp
//console.log("output dimensions",temp)
return(maker);

}

postpoly(){
console.log(" i was called")
var allmarkers=this.mapdata;

allmarkers.forEach(element => {
   
 console.log("sending data for :",element.label)
 var id=element.id;
 var poly=element.polygon ;
 this.db.collection('marker').doc(id).update({
 polygon:poly
    
  });
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

