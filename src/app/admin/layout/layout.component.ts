import {Component, OnInit} from '@angular/core';
import {AlertifyService, MessageType, Position} from '../../services/admin/alertify.service';
import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  constructor(private toastr:ToastrService) {
  }
  ngOnInit(): void {
  }

  senderoglu() {
    this.toastr.success("Test","Test Başlık");
  }

}
