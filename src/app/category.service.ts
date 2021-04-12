import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICategory} from './icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly getList_URL = 'http://localhost:8080/category-list';

  constructor(private httpClient: HttpClient) {

  }

  getCategoryList(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.getList_URL).pipe();
  }

}
