import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Adventurer } from '../classes/adventurer';

@Injectable()
export class AdventurerService{

    private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
    private url = 'http://lowcost-env.v9mpr7bkgz.us-west-2.elasticbeanstalk.com:8080/adventurers';

    constructor(public http: Http){} 
 
    getAdventurers(): Promise<Adventurer[]> {
        return this.http.get(this.url)
                .toPromise()
                .then(response => response.json().data as Adventurer[])
                .catch(this.handleError);
    }
 
 
    getAchievement(id: number):Promise<Adventurer> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Adventurer)
        .catch(this.handleError);
    }
     
    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
     
    create(name: string): Promise<Adventurer> {
        return this.http
        .post(this.url, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Adventurer)
        .catch(this.handleError);
    }
     
    update(adventurer: Adventurer): Promise<Adventurer> {
        const url = `${this.url}/${adventurer.id}`;
        return this.http
        .put(url, JSON.stringify(adventurer), {headers: this.headers})
        .toPromise()
        .then(() => adventurer)
        .catch(this.handleError);
    }
     
    private handleError(error: any): Promise<any> {
        console.error('Não foi possível obter tal dado', error);
        return Promise.reject(error.message || error);
    }
}