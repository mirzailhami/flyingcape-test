import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService]
})
export class HeaderComponent implements OnDestroy {
  ref!: DynamicDialogRef;

  items = [{
    label: 'Subscribe Plan',
    icon: 'pi pi-money-bill',
    command: () => {
      this.router.navigateByUrl('/plan');
    }
  }, {
    label: 'My Account',
    icon: 'pi pi-user',
    command: () => {
      this.router.navigateByUrl('/account');
    }
  }, {
    separator: true
  }, {
    label: 'Sign Out',
    icon: 'pi pi-sign-out',
    command: () => {
      this.auth.signout();
      this.router.navigateByUrl('/');
    }
  }];

  constructor(public dialogService: DialogService, public auth: AuthService, private router: Router) { }

  login() {
    this.ref = this.dialogService.open(LoginComponent, {
      width: '25%',
      contentStyle: { "overflow": "hidden" },
      baseZIndex: 10000, dismissableMask: true
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

}
