import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
    private apiUrl:string = 'https://restcountries.com/v3.1';

    constructor(private httpClient: HttpClient) { }
    
    private getCountriesRequest(url:string):Observable<Country[]>{
        return this.httpClient.get<Country[]>(url)
        .pipe(
            catchError( () => of([]) )
        )
    }

    searchCountryByAlphaCode(code:string):Observable<Country | null>{
        return this.httpClient
        .get<Country[]>( `${this.apiUrl}/alpha/${code}` )
        .pipe(
            //map intercepta la respuesta de la api y mapea los resultados para convertir el array en un solo registro
            map( countries => countries.length > 0 ? countries[0] : null),
            //of es un metodo que emite un observable segun lo que
            //se le pasa por parametro
            catchError( () => of( null ) ) 
        );
    }

    searchCapital(term:string):Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${term}`;
        return this.getCountriesRequest(url);
    }
    searchCountry(term:string):Observable<Country[]>{
        const url = `${this.apiUrl}/name/${term}`;
        return this.getCountriesRequest(url);
    }

    searchRegion(term:string):Observable<Country[]>{
        const url = `${this.apiUrl}/region/${term}`;
        return this.getCountriesRequest(url);
    }
}