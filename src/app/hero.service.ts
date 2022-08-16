import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class HeroService {

    //Web api URL
    private heroesUrl = 'api/heroes'; 

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) {}


    /** Get hero by id. Returns undefined when id not found */    
    getHeroNo404<Data>(id: number): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
            tap(_ => this.log('fetched heroes')),
            catchError(this.handleError<Hero[]>('getHeroes', []))
        )
    }

}