import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {
  youtube: any;

  constructor(public config: DynamicDialogConfig, public _sanitizer: DomSanitizer, public auth: AuthService) { }

  ngOnInit(): void {
    console.log(this.config.data);
    this.youtube = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${this.config.data?.trailer_yt}`);
  }

}
