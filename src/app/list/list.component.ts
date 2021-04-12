import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../category.service';
import {ICategory} from '../icategory';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  productList: IProduct[] = [];

  constructor(private categoryService: CategoryService,
              private productService: ProductService) {
    this.getProductList();
  }

  getProductList() {
    this.productService.getAllProduct().subscribe(next => {
        this.productList = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  ngOnInit(): void {
  }

  deleteProductById(id: number) {
    this.productService.deleteProductById(id).subscribe(() => {
      this.productList = this.productList.filter(s => s.productId != id);
    });
  }

}
