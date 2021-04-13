import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IProduct} from '../../iproduct';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../../product.service';
import {lintSyntaxError} from 'tslint/lib/verify/lintError';
import {ICategory} from '../../icategory';
import {CategoryService} from '../../category.service';
import {ListComponent} from '../list/list.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  listComponent: ListComponent;

  sub: Subscription;

  categoryList: ICategory[] = [];

  product: IProduct = {
    productId: 0,
    productName: '',
    number: 0,
    price: 0,
    description: '',
    category: {
      categoryId: 1,
      name: ''
    }
  };

  constructor(private router: Router,
              private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRouter: ActivatedRoute) {
    this.sub = this.activatedRouter.paramMap.subscribe((paraMap: ParamMap) => {
      let id = +paraMap.get('id');
      this.getProductById(id);
      this.getCategoryList();
    });
  }

  ngOnInit(): void {
  }

  private getProductById(id: number) {
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }

  private getCategoryList() {
    this.categoryService.getCategoryList().subscribe(categoryList => {
      this.categoryList = categoryList;
    });
  }

  public updateProduct() {
    this.productService.updateProduct(this.product).subscribe(next => {
      let productList = this.listComponent.productList;
      for (let i = 0; i < productList.length; i++) {
        if (productList[i].productId == next.productId) {
          this.listComponent.productList[i] = next;
        }
      }

    });
    this.router.navigate(['/']);
  }
}
