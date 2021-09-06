// import { Injectable } from "@angular/core";

// import { Agenda } from "../interfaces/agenda.interface";
// import { AGENDA } from "../agenda.mock";

// @Injectable({
//     providedIn: 'root',
// })

// export class AgendaService {
//     constructor(){}

//     getAgenda(): Agenda[] {
//         return AGENDA;
//     }

//     getOneAgenda(id: number): Agenda {
//         let oneAgenda: any;
//         oneAgenda = AGENDA.find( (item) => {
//             return item.id === id;
//         });
//         return oneAgenda;
//     }

//     postAgenda(contato:Agenda): void {
      
//         AGENDA.push({
//             id: AGENDA.length+1,
//             name: contato.name,
//             email: contato.email,
//             phone: contato.phone
//         });
//     }

//     putAgenda(contato:Agenda):void {
//         let oneAgenda: any;
//         oneAgenda = AGENDA.findIndex( (item) => {
//             return item.id === contato.id;
            
//         });
//         AGENDA[oneAgenda] = contato;
//     }

//     deleteAgenda(id:number):void {
//         let contatoIndex: any;
//         contatoIndex = AGENDA.findIndex( (item) => {return item.id === id});
//         AGENDA.splice(contatoIndex, 1);
//         console.log(AGENDA);
//     }
// }

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Agenda } from "../interfaces/agenda.interface";

@Injectable({
    providedIn: 'root',
})

export class AgendaService {
    url = "http://localhost:3000/agenda/";

    constructor(private httpClient: HttpClient){}
    
    //Headers
    httpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    getAgenda(): Promise<Agenda[]> {
        return this.httpClient.get<Agenda[]>(this.url).toPromise();
    }

    getOneAgenda(id: string):Promise<Agenda[]>{
        return this.httpClient.get<Agenda[]>(this.url + '/' + id).toPromise();
    }

    postAgenda(contato:any): Promise<Object> {
        return this.httpClient.post<Agenda>(this.url, JSON.stringify(contato), this.httpOptions).toPromise();
    }

    deleteAgenda(id:string):Promise<Object> {
        return this.httpClient.request<Agenda>("delete", this.url, {"body":{_id:id}}).toPromise();
    }

    putAgenda(contato:Agenda):Promise<Agenda> {
        return this.httpClient.put<Agenda>(this.url, JSON.stringify(contato), this.httpOptions).toPromise()
    }
}