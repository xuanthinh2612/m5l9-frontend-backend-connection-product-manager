import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../product.service';
import {IProduct} from '../../iproduct';
import {ListComponent} from '../list/list.component';
import {CategoryService} from '../../category.service';
import {ICategory} from '../../icategory';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  listComponent: ListComponent;
  product: Partial<IProduct> = {
    productId: null,
    productName: '',
    number: 0,
    description: '',
    price: 0,
    category:  {
      categoryId: 1,
      name: ''
    }
  };
  categoryList: ICategory[] = [];

  constructor(private router: Router,
              private productService: ProductService,
              private categoryService: CategoryService) {
    this.getCategoryList();

  }

  private getCategoryList() {
    this.categoryService.getCategoryList().subscribe(next => {
      this.categoryList = next;
    });
  }

  ngOnInit(): void {
  }

  addNewProduct() {
    this.productService.addNewProduct(this.product).subscribe(next => {
      this.listComponent.productList.push(next);
    });
    this.router.navigate(['/']);
  }

}
