import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Achievement } from '../classes/achievement';

@Injectable()
export class AchievementService{

    private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
    private url = 'http://lowcost-env.v9mpr7bkgz.us-west-2.elasticbeanstalk.com:8080/achievements';

    constructor(public http: Http){} 
 
    getAchievements(): Promise<Achievement[]> {
        return this.http.get(this.url)
                .toPromise()
                .then(response => response.json().data as Achievement[])
                .catch(this.handleError);
    }
 
 
    getAchievement(id: number):Promise<Achievement> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Achievement)
        .catch(this.handleError);
    }
     
    delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
     
    create(name: string): Promise<Achievement> {
        return this.http
        .post(this.url, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Achievement)
        .catch(this.handleError);
    }
     
    update(achievement: Achievement): Promise<Achievement> {
        const url = `${this.url}/${achievement.id}`;
        return this.http
        .put(url, JSON.stringify(achievement), {headers: this.headers})
        .toPromise()
        .then(() => achievement)
        .catch(this.handleError);
    }
     
    private handleError(error: any): Promise<any> {
        console.error('Não foi possível obter tal dado', error);
        return Promise.reject(error.message || error);
    }

}