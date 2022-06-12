import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getProduct() : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/products`);
  }

  public addProduct(product : Product) : Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}/products`, product);
  }

  public updateProduct(product : Product) : Observable<Product> {
    return this.http.put<Product>(`${this.apiServerUrl}/products`, product);
  }

  public deleteProduct(productId : number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/products/${productId}`);
  }
}
