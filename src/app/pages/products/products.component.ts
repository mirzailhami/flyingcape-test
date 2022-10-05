import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalTrailerComponent } from 'src/app/components/modal-trailer/modal-trailer.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [DialogService]
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: any[] = [];
  responsiveOptions;
  ref!: DynamicDialogRef;

  constructor(private http: HttpClient, public dialogService: DialogService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.http.get('assets/tmdb_movies.json').subscribe((results: any) => {
      this.products = results;
    });
  }

  show(data: any) {
    this.ref = this.dialogService.open(ModalTrailerComponent, {
      data, width: '1280px', header: `${data.title} (${data.release_date.substring(0, 4)})`,
      contentStyle: { "overflow": "hidden", "padding": "0", "border-radius": "0" },
      baseZIndex: 10000, dismissableMask: true,
      styleClass: 'trailer-dialog'
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

}