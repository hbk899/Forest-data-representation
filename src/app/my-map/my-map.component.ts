import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {  AgmMarker } from '@agm/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { MainService } from '../_services/main.service';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.css']
})
export class MyMapComponent implements OnInit {
  clickedmarkerid:number
  zoom: number = 5;
  mapdata:any;
  // initial center position for the map
  lat: number = 30.3753;
  lng: number = 69.3451;
  sidenavdata:any = {
   description:"",
   label :"",
   id:""
  };
  clickedMarker(label: string, index: number) {
    
    console.log(`clicked the marker: ${ index}`);
    this.sidenavdata.label=label;
    console.log(`side nav: `, this.sidenavdata.label);
  }
  



  mapClicked($event: MouseEvent) {
   return
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
    
  }
  
  markers: marker[] = [
	  {
		  lat: 34.178519,
		  lng: 73.241704,
		  label: 'Abbottabad',
		  draggable: false
	  },
	  {
		  lat: 34.672185,
		  lng: 73.024149,
		  label: 'Batagram',
		  draggable: false
	  },
	  {
		  lat: 34.530285,
		  lng: 72.309277,
		  label: 'Buner',
		  draggable: false
	  }
  ]
  constructor( private db: AngularFirestore,public mainService:MainService) { }

  ngOnInit() {
    this.mainService.getCollection("marker")
    .then(list => {
      this.mapdata = list;
      list.forEach(list => {
        console.log('Found subcollection with id:', list.id);
      });
    })
    .then(list => {
      //this.articlesList = list;
      console.log(this.mapdata);
      
      return "got documents from database";
    })
  
  
    .catch(err => {
        console.log(err);
    });


}
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
  
  
}

