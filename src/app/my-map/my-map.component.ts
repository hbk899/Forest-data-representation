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
  //geoJsonObject: Object = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"Id":0,"rank": "7","Name":"Warsak Dam","Date":"2018/11/25","color": "blue",},"geometry":{"type":"Polygon","coordinates":[[[71.40184981352732,34.170413161794215],[71.40189590355718,34.168571484450226],[71.4012456479428,34.16858969814445],[71.4003475995169,34.168405277613324],[71.39996797830715,34.16817416258149],[71.39982369029671,34.167961494558305],[71.3998845261019,34.16783082425681],[71.39958464395083,34.16760916215548],[71.39948825612677,34.16769642971549],[71.3977260597413,34.16683446493615],[71.3968023874595,34.166763857538285],[71.39633989408799,34.1665275926585],[71.394963842389,34.166578322634024],[71.39387123867057,34.166504233219115],[71.39361916424599,34.16672384090498],[71.39362387749162,34.166890726799906],[71.39345020163469,34.167003567021695],[71.39289029636006,34.1669930216447],[71.3921020301633,34.16682233364674],[71.3915814022815,34.166715877654944],[71.39064122113238,34.166717229663554],[71.38935268495871,34.16644920498579],[71.38805178203188,34.166481416341185],[71.38641867316677,34.1663340143428],[71.38524452534003,34.16588509343297],[71.38494819421494,34.16612673500906],[71.38370803444553,34.1654483312364],[71.38131316992633,34.16539465666595],[71.379519032271,34.165477180763645],[71.3781560571571,34.16546930454615],[71.37781401485748,34.16555226896908],[71.37691153478886,34.16550296594413],[71.37518168467125,34.16574253401167],[71.37406842364837,34.16574977196636],[71.37230041490291,34.16574103827647],[71.37148718958535,34.16548390980283],[71.37111165706601,34.16539575215291],[71.37102494591262,34.16537357296951],[71.37079282155457,34.16528264233911],[71.3705867159107,34.16509578915453],[71.37045865382373,34.164621178419765],[71.37039128670348,34.16426466482395],[71.37038128580464,34.163907042681586],[71.36976897906855,34.16356105514379],[71.36957756368658,34.16287297698281],[71.369480856273,34.16249317417345],[71.36864178245732,34.1622469798546],[71.36845633690356,34.16279921258948],[71.368476321813,34.16351445797744],[71.36850896533802,34.16468269157944],[71.36877765209644,34.16609536880947],[71.36720920697279,34.166039769990086],[71.36645021632418,34.16568228595995],[71.36524284969225,34.16531288858146],[71.3655551772325,34.16507695058207],[71.36532065841102,34.16500275280031],[71.36581288042782,34.164734717993106],[71.36557211550787,34.16433383698664],[71.36517597012806,34.163506570731144],[71.36514063471826,34.16326870915858],[71.36490187290347,34.162939349402066],[71.36478448809771,34.16284619503756],[71.36346581809333,34.16289546341335],[71.36320768705212,34.16290043639382],[71.36309296263921,34.16290264642341],[71.36283017882499,34.16274072669378],[71.36251069883195,34.16260375411613],[71.36201514824896,34.16232704245343],[71.361748383379,34.16202207064853],[71.36112815406358,34.16138994130062],[71.36073804209535,34.160777233598296],[71.36043729398237,34.16028207613898],[71.36000376976962,34.16017114571142],[71.35991227801472,34.16100781161103],[71.35970539800712,34.16182284221886],[71.35969861724428,34.162610169404786],[71.359239719264,34.1626189957083],[71.35872345722616,34.16262892328157],[71.35871483294258,34.16231898150568],[71.35826140202708,34.161492792903665],[71.3580921318086,34.1605657225225],[71.35723370539382,34.160653782269904],[71.35711036508091,34.16034604436774],[71.35769674090056,34.15976226932627],[71.35740795010786,34.15969625694614],[71.35642468436312,34.16045463672601],[71.35634442307679,34.16169661035149],[71.35709940860148,34.16201606774361],[71.35647505271075,34.16226660884718],[71.35666136407889,34.16483931073357],[71.35667635130724,34.16482788947871],[71.35737002445987,34.165005398083544],[71.36020030208296,34.16523722748241],[71.36190784560407,34.16554786514564],[71.36274027028371,34.16576083774399],[71.3640609449227,34.166193398018976],[71.36603157416106,34.16688057615097],[71.36691097950825,34.16713078115636],[71.36882296259459,34.16736104200604],[71.37102471693088,34.1672803354829],[71.3729980739542,34.167242176107706],[71.37501731711043,34.16720309653992],[71.37792984387326,34.16708942069893],[71.38006326984491,34.167028961911264],[71.38278106115361,34.16733878250251],[71.38342354398512,34.16732630045569],[71.38438673224327,34.16728849892032],[71.38567706540266,34.16745424359063],[71.38736339282852,34.16782218662693],[71.3885924251743,34.16825626052639],[71.39038705321582,34.16839305079278],[71.39167741126327,34.16855873326594],[71.3923684845347,34.168640673153504],[71.39369935250416,34.168614708933994],[71.39404408265821,34.16862706422358],[71.3944630380566,34.168828804125134],[71.39467774283388,34.16896818992776],[71.39739189436615,34.169592827608575],[71.3988963189047,34.16983604110468],[71.40009871827945,34.17014485602934],[71.40184604580075,34.170563699200095],[71.40184981352732,34.170413161794215]]]}}]};
 // geoJsonObject: Object =jsondata


  constructor( private db: AngularFirestore,public mainService:MainService) {


  }

   styleFunc(feature) {
     return ({
       clickable: false,
       fillColor: 'red',
       strokeWeight: 2
     });
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


    //getting second marker collection

    this.mainService.getCollection("marker2")
    .then(list => {
      list.forEach(element => {
        //console.log("marker 2",element);
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

