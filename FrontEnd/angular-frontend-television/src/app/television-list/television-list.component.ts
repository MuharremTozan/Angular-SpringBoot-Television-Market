import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Television } from '../models/television'
import { TelevisionService } from '../services/television.service';
import { Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog"
import { PopUpDeleteAlertComponent } from '../pop-up-delete-alert/pop-up-delete-alert.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { forkJoin } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { environment } from 'src/environment';


const pageSizeOpts = environment.pageSizeOptions;


@Component({
  selector: 'app-television-list',
  templateUrl: './television-list.component.html',
  styleUrls: ['./television-list.component.css']
})
export class TelevisionListComponent implements OnInit {

  televisions: Television[];
  cartList: Television[] = [];
  addToCartList: any;
  tvIndex: number;
  totalItems: number = 0;
  totalPrice: number = 0;
  count: { [key: number]: number } = {};
  televisionListLength: number;
  sortDir: String;
  sortName: String;
  dataSource: MatTableDataSource<Television>;
  pageSizeOptions: number[];

  displayedColumns: string[] = [
    'id',
    'brandName',
    'modelName',
    'screenSize',
    'smartTv',
    'productionDate',
    'price',
    'actions',
    'addCart',
    'quantity'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild('paginator') paginatorApplication: MatPaginator;
  @ViewChild(MatSort) sortApplication: MatSort;
  @ViewChild('TABLE') table: ElementRef;


  constructor(
    private televisionService: TelevisionService,
    private router: Router,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {

    forkJoin([this.televisionService.searchApiTelevision(this.paginator, this.sortDir, this.sortName)]).subscribe(([data]) => {
      this.dataSource = new MatTableDataSource(data.content);
      this.televisions = data.content;
      if (this.cartList.length > 0) {
        for (let index = 0; index < this.cartList.length; index++) {
          this.addToTelevisions(this.cartList[index], 'buttonNotPressed');
        }
      }
      this.dataSource.sort = this.sort;
      this.cdr.detectChanges();
      this.paginator.length = data.totalElements;
      this.pageSizeOptions = pageSizeOpts;
      this.paginator.pageSize = data.size;
      this.paginator._intl.itemsPerPageLabel = "Sayfalar";
    });


  }
  // private getTelevisions(){
  //   this.televisionService.getTelevisionsList().subscribe(data => {this.televisions = data;});
  // }

  pageChanged(event: PageEvent) {
    this.ngOnInit();
  }


  televisionDetails(id: number) {
    this.router.navigate(['television-details', id]);
  }

  updateTelevision(id: number) {
    this.router.navigate(['update-television', id]);
  }


  openDeleteAlert(model: Television) {
    const dialogRef = this.dialog.open(PopUpDeleteAlertComponent, { data: model });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      this.ngOnInit();
    });
  }

  addToCart(model: Television) {
    const clonedModel = this.modelToCloneTelevision(model);
    this.tvIndex = this.cartList.findIndex(tv => tv.id == model.id);
    if (this.tvIndex >= 0) {
      this.cartList[this.tvIndex].quantity += model.count;
    }
    else {
      this.cartList.push(clonedModel);
      this.cartList[this.cartList.length - 1].quantity = 0;
      this.cartList[this.cartList.length - 1].quantity += model.count;

    }
    model.quantity -= model.count;
    this.totalItems += model.count;
    this.totalPrice += clonedModel.price * model.count;
    model.count = 0;
  }


  addToTelevisions(model: Television, commingFromWhere: string) {
    let addingValue;
    if (commingFromWhere == 'buttonPressed') {
      addingValue = model.count;
    }
    else if (commingFromWhere == 'buttonNotPressed') {
      addingValue = model.quantity;
    }

    const clonedModel = this.modelToCloneTelevision(model);
    if (model.quantity > model.count - 1) {
      this.tvIndex = this.televisions.findIndex(tv => tv.id == model.id);
      if (this.tvIndex >= 0) {
        if (model.count > 0 && commingFromWhere == 'buttonPressed') {
          this.televisions[this.tvIndex].quantity += addingValue;
          model.quantity -= model.count;
          this.totalItems -= model.count;
          this.totalPrice -= clonedModel.price * model.count;
        } else {
          this.televisions[this.tvIndex].quantity -= addingValue;
        }
      }
      else if (commingFromWhere == "buttonPressed") {
        model.quantity -= model.count;
        this.totalItems -= model.count;
        this.totalPrice -= clonedModel.price * model.count;
        this.dataSource.data[this.televisions.length - 1].quantity += addingValue;
      }
      this.dataSource = new MatTableDataSource(this.televisions);
      if (model.quantity == 0) {
        this.tvIndex = this.cartList.findIndex(tv => tv.id == model.id);
        this.cartList.splice(this.tvIndex, 1);
      }
    }
    model.count = 0;
  }



  modelToCloneTelevision(model: Television) {
    const cloneTelevision = new Television();
    cloneTelevision.id = model.id;
    cloneTelevision.brandName = model.brandName;
    cloneTelevision.modelName = model.modelName;
    cloneTelevision.specs = model.specs;
    cloneTelevision.screenSize = model.screenSize;
    cloneTelevision.smartTv = model.smartTv;
    cloneTelevision.price = model.price;
    cloneTelevision.productionDate = model.productionDate;
    cloneTelevision.totalCartListCount = model.totalCartListCount;
    return cloneTelevision;
  }
}


