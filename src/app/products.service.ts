import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, map, throwError } from "rxjs";
import { IProduct } from './product';
import { IProduct2 } from './product2';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productUrl = 'api/products/products.json';
  private product2Url = 'api/products/products2.json';

  constructor(private http: HttpClient) { }

  // getProducts(): Observable<IProduct[]>{
  //   return this.http.get<IProduct[]>(this.productUrl).pipe(
  //     tap(data => console.log('All', JSON.stringify(data))),
  //     catchError(this.handleError)
  //   );
  // }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }  

  products$ = this.http.get<IProduct[]>(this.productUrl)
    .pipe(
      map(products =>
        products.map(product => ({
          ...product,
          //price: product.price ? product.price * 1.5 : 0,
          searchKey: [product.productName]
        } as IProduct))),
      tap(data => console.log('Products: ', JSON.stringify(data))),
      catchError(this.handleError)
    );  

    products2$ = this.http.get<IProduct2[]>(this.product2Url)
    .pipe(
      map(products =>
        products.map(product => ({
          ...product,
          searchKey: [product.ProductName]
        } as IProduct2))),
      tap(data => console.log('Products 2: ', JSON.stringify(data))),
      catchError(this.handleError)
    );  
    

}
