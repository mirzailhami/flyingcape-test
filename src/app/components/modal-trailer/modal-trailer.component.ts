import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public _sanitizer: DomSanitizer, public auth: AuthService) { }

  ngOnInit(): void {
    console.log(this.config.data);
    this.config.data.youtube = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${this.config.data.trailer_yt}`);
  }

}
