import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Mission } from '../classes/mission';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MissionService{

    private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
    private url = 'http://lowcost-env.v9mpr7bkgz.us-west-2.elasticbeanstalk.com:8080/missions';

    constructor(public http: Http){} 
 
    getMissions(): Promise<Mission[]> {
        return this.http.get(this.url)
                .toPromise()
                .then(response => response.json().data as Mission[])
                .catch(this.handleError);
    }
 
 
    getMission(id: number):Promise<Mission> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Mission)
        .catch(this.handleError);
    }
     
    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
     
    create(name: string): Promise<Mission> {
        return this.http
        .post(this.url, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Mission)
        .catch(this.handleError);
    }
     
    update(mission: Mission): Promise<Mission> {
        const url = `${this.url}/${mission.id}`;
        return this.http
        .put(url, JSON.stringify(mission), {headers: this.headers})
        .toPromise()
        .then(() => mission)
        .catch(this.handleError);
    }
     
    private handleError(error: any): Promise<any> {
        console.error('Não foi possível obter tal dado', error);
        return Promise.reject(error.message || error);
    }

}