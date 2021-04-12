import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'

})
export class ProductService {
  private readonly getListProduct_URL = 'http://localhost:8080/product-list';
  private readonly getProductById_URL = 'http://localhost:8080/get-by-id';
  private readonly addNewProduct_URL = 'http://localhost:8080/add-new';
  private readonly updateProduct_URL = 'http://localhost:8080/update-product';
  private readonly deleteProductById_URL = 'http://localhost:8080/delete';


  constructor(private httpClient: HttpClient) {
  }


  getAllProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.getListProduct_URL).pipe();
  }

  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.getProductById_URL}/${id}`).pipe();
  }

  deleteProductById(id: number): Observable<any> {
    return this.httpClient.delete(`${this.deleteProductById_URL}/${id}`);
  }

  addNewProduct(product: Partial<IProduct>): Observable<IProduct> {
    return this.httpClient.post<IProduct>(`${this.addNewProduct_URL}`, product);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(`${this.updateProduct_URL}`, product);
  }



}
