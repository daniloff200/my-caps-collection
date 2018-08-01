import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getTodos() {
    return this._http.get('/api/v1/caps')
      .map(result => result.json().data);
  }

  createTodo(body) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(body)

    return this._http.post('/api/v1/cap', body, options)
      .map((res: Response) => res.json());
  }

  deleteTodo(todoId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.delete('/api/v1/cap/'+todoId, options)
      .map((res: Response) => res.json());
  }

  getCap(capId) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.get('/api/v1/cap/'+capId, options)
      .map((res: Response) => res.json());
  }

}
