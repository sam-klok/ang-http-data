import { Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { IProduct } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-http-data';
  errorMessage = '';
  products$: any;
  products2$: any;
  productsCombined$: any;


  constructor(private productService: ProductsService) { 
    this.products$ = this.productService.products$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

    this.products2$ = this.productService.products2$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

    this.productsCombined$ = this.productService.productsCombined$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

  }
}
