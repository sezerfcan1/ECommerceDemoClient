import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private alertify:AlertifyService) {
  }
  ngOnInit(): void {



  }

  rightAlert = () => {
    this.alertify.message("Hatalı" , MessageType.Error, Position.topRight);
  }

  leftAlert = () => {
    this.alertify.message("Hatalı" , MessageType.Error, Position.topLeft);
  }



}
