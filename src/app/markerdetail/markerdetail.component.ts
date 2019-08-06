import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "angularfire2/firestore";
import { MainService } from "../_services/main.service";

import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  Input
} from "@angular/core";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { fade } from "../_services/animation";
@Component({
  selector: "app-markerdetail",
  templateUrl: "./markerdetail.component.html",
  styleUrls: ["./markerdetail.component.css"],
  encapsulation: ViewEncapsulation.None,
  animations: [fade]
})
export class MarkerdetailComponent implements OnInit {
  @Input() currentState;

  type: any;
  title = "angularanimation01";
  toState = "state1";
  imagearray = [];
  forest = true;
  loading = false;
  anusdata: boolean;
  startyear = 2013;
  showyear: number = 2013;
  imagesrc: string;
  animateclicked = false;
  markerid: any;
  markerdetail: any = {};
  preloadImages: any;
  times = 5;
  state = "active";
  counter = 0;
  checked = true;
  isDisabled = true;
  @ViewChild("anidiv") animatediv: ElementRef;

  constructor(
    public mainService: MainService,
    private db: AngularFirestore,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading = true;
    this.markerid = this.route.snapshot.paramMap.get("id");
    this.type = this.route.snapshot.paramMap.get("type");
    console.log(" got label from other page ", this.markerid);
    if (this.type == "0") {
      this.anusdata = true;

      this.mainService
        .getByIdAndCollection("marker", this.markerid)
        .then(list => {
          console.log("here we are");
          this.markerdetail = list;
          this.imagearray = list.picurl;
          this.imagesrc = list.picurl[0];
          console.log(this.markerdetail.lat);
          this.loading = false;
        })

        .catch(err => {
          console.log(err);
        });
    }

    if (this.type == "1") {


      this.anusdata = false;

      this.mainService
        .getByIdAndCollection("marker2", this.markerid)
        .then(list => {
          console.log("here we are");
          this.markerdetail = list;
          this.imagearray = list.picurl;
          this.imagesrc = list.picurl[0];
          console.log(this.markerdetail.lat);
          this.loading = false;
        })

        .catch(err => {
          console.log(err);
        });

    }
  }

  next() {
    this.loading = true;
    var temp = this.selected.value;
    temp++;
    this.showyear = this.startyear + temp;
    temp = temp % this.imagearray.length;
    this.selected.setValue(temp);
    console.log("current index", temp);

    this.loading = false;
  }
  previous() {
    this.loading = true;
    var temp = this.selected.value;
    temp--;
    this.showyear = this.startyear + temp;
    temp = temp % this.imagearray.length;
    this.selected.setValue(temp);
    console.log("current index", temp);

    this.loading = false;
  }

  tabs = ["First", "Second", "Third"];
  selected = new FormControl(0);

  // onAnimationDone($event) {
  //   // call this function at the end of the previous animation.
  //   // run it as many time as defined

  //   if (this.counter < this.times) {
  //     this.state = this.state === 'active' ? 'inactive' : 'active';
  //     this.imagesrc=this.imagearray[this.counter]
  //     this.counter++;

  //   }
  // }

  onAnimationDone($event) {
    console.log("onanimation done called");
    if (this.counter < this.times) {
      this.toggleImg();
    }
    this.toggleState();
  }

  toggleImg() {
    console.log("imagetoggle called");
    if (this.counter < this.times) {
      this.imagesrc = this.imagearray[this.counter];
      this.counter++;
    }
  }
  toggleState() {
    console.log("togllestate called");
    if (this.counter < this.times) {
      this.state = this.state === "active" ? "inactive" : "active";
    } else this.state = "active";
  }
  animat() {
    console.log("animat called");
    // this.enableAnimation = true;
    this.isDisabled = false;
    this.counter = 0;
    this.toggleState();
    this.counter = 0;
    this.imagesrc = this.imagearray[this.counter];
  }
}
