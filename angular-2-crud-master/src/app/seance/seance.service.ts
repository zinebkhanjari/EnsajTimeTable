import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Seance } from './seance';

@Injectable()
export class SeanceService{
    
    constructor(private _httpService: Http){}

    getAllSeances(): Observable<Seance[]>{
        console.log("inside the service getAllSeances():::::::");
      return this._httpService.get("http://localhost:8080/bookapi_war_exploded/timeTable/seance")
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }

    getSeanceById(seanceId: string): Observable<Seance>{
        console.log("Inside the getSeanceById() service::::::");
      return this._httpService.get("http://localhost:8080/bookapi_war_exploded/timeTable/seance/"+seanceId)
                .map((response: Response) => response.json())
                .catch(this.handleError);
    }

    addSeance(seance: Seance){
        let body = JSON.parse(JSON.stringify(seance));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        if(seance.id){    
            console.log("Inside addSeance update service():::::::");
          return this._httpService.put("http://localhost:8080/bookapi_war_exploded/timeTable/seance/"+seance.id, body, options);
        }else{
            console.log("Inside addSeance add service():::::::");
          return this._httpService.post("http://localhost:8080/bookapi_war_exploded/timeTable/seance", body, options);
        }
    }

    deleteSeance(seanceId: string){
        console.log("Inside the service deleteSeance():::::seance id:::"+seanceId);
      return this._httpService.delete("http://localhost:8080/timeTable/seance/"+seanceId);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error);
    }
}
