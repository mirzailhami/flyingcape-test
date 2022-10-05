import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  providers: [DialogService, MessageService]
})
export class AppComponent implements OnInit, OnDestroy {
  ref!: DynamicDialogRef;

  constructor(private primengConfig: PrimeNGConfig, public dialogService: DialogService) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

    login() {
      this.ref = this.dialogService.open(LoginComponent, {
        width: '25%',
        contentStyle: { "overflow": "hidden"},
        baseZIndex: 10000, dismissableMask: true
      });
    }

    ngOnDestroy() {
      if (this.ref) {
        this.ref.close();
      }
    }
}
