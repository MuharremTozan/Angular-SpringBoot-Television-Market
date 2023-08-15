import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Television } from '../models/television';
import { environment } from 'src/environment';
import { MatPaginator } from '@angular/material/paginator';
import { SearchModel } from '../models/search-model';
import { PagingModel } from '../models/paging-model';


const API_TELEVISION_URL = environment.apiTelevision;

@Injectable({
  providedIn: 'root'
})
export class TelevisionService {

  constructor(private httpClient: HttpClient) { }

  getTelevisionsList(): Observable<Television[]> {
    return this.httpClient.get<Television[]>(API_TELEVISION_URL+'/getAll');
    
  }

  createTelevision(television: Television): Observable<Object> {
    return this.httpClient.post(API_TELEVISION_URL+'/save', television);
  }

  updateTelevision(television: Television): Observable<Object> {
    return this.httpClient.post(API_TELEVISION_URL+'/update', television);
  }

  getTelevisionById(id: number): Observable<Television> {
    return this.httpClient.get<Television>(API_TELEVISION_URL + `/getAll/${id}`);
  }

  deleteTelevision(id: number): Observable<Object> {
    return this.httpClient.delete(API_TELEVISION_URL+ `/delete/${id}`);
  }



  searchApiTelevision(paginator: MatPaginator, sortDir: String, sortName: String):Observable<any>{
    if(sortDir == null || sortDir == undefined || sortDir==''){
      sortDir="asc"
    }

    if(sortName == null || sortDir == undefined){
      sortName="id"
    }
    
    let pageIndex=0
    let pageSize=10;
    if(paginator != null ){
      pageIndex = paginator.pageIndex;
      pageSize = paginator.pageSize;
    }

    let searchModel : SearchModel = new SearchModel();
                let pagingModel : PagingModel = new PagingModel();
                pagingModel.pageIndex = pageIndex.toString();
                pagingModel.pageSize = pageSize.toString();
                pagingModel.sortDir = sortDir.toString();
                pagingModel.sortName = sortName.toString();
    //let parameters={'pageIndex':pageIndex,'pageSize':pageSize, 'sortDir': sortDir,'sortName': sortName}
                // searchModel.pagingModel = searchModel;
                // searchModel.model = model;
                searchModel.pagingModel = pagingModel;
    return this.httpClient.post(API_TELEVISION_URL + '/search',searchModel);
  } 
}