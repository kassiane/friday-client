/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMakesGet
   */
  static readonly ApiMakesGetPath = '/api/makes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMakesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  apiMakesGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiMakesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMakesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiMakesGet(params?: {

  }): Observable<Array<string>> {

    return this.apiMakesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation apiModelsGet
   */
  static readonly ApiModelsGetPath = '/api/models';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiModelsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  apiModelsGet$Response(params: {
    make: string;

  }): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiModelsGetPath, 'get');
    if (params) {

      rb.query('make', params.make);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiModelsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiModelsGet(params: {
    make: string;

  }): Observable<Array<string>> {

    return this.apiModelsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation apiVehiclesGet
   */
  static readonly ApiVehiclesGetPath = '/api/vehicles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiVehiclesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  apiVehiclesGet$Response(params: {
    make: string;
    model: string;

  }): Observable<StrictHttpResponse<Array<Vehicle>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiVehiclesGetPath, 'get');
    if (params) {

      rb.query('make', params.make);
      rb.query('model', params.model);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Vehicle>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiVehiclesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiVehiclesGet(params: {
    make: string;
    model: string;

  }): Observable<Array<Vehicle>> {

    return this.apiVehiclesGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Vehicle>>) => r.body as Array<Vehicle>)
    );
  }

}
