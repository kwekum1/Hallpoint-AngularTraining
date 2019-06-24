import { Component, OnInit, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  constructor(private productService: ProductService) { 

  }


  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
 


  ngOnInit(): void {
    console.log('In OnInit');

    this.productService.getProducts().subscribe(products => 
      { 
        this.products = products;
        this.filteredProducts = this.products;
      }, error => this.errorMessage = <any>error);


  }

  toggleImage(): void {  
    this.showImage = !this.showImage;

  }

  pageTitle: string = 'Product List';
  showImage: boolean = true;
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;


  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }


  filteredProducts: IProduct[];
  products: IProduct[] = [];

  performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
