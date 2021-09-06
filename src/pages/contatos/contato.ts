import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Agenda } from 'src/app/interfaces/agenda.interface';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
    selector: 'page-contato',
    templateUrl: './contato.html',
    styleUrls: ['./contato.css']
})

export class Contato implements OnInit {

    contato = {} as Agenda;
    agenda: Agenda[] = [];
    id:any;

    constructor(
        private agendaService: AgendaService,
        private router: Router,
        ){
            
        }

    ngOnInit(){
        this.getAgenda();
        console.log(this.agenda);
    }

    async getAgenda(){
        let dados;
        try{
            dados = await this.agendaService.getAgenda();
            this.agenda = dados;
        }catch(error){
            console.log('Erro ao buscar dados.');
            console.log(error);
            this.agenda = [];
        }
        
        // this.agendaService.getAgenda().subscribe( (agenda: Agenda[]) => {
        //     this.agenda = agenda;
            
        // });
    }

    edit(_id:string){
        this.router.navigate(['/adicionar',{_id}]);
        
    }

    async deletar(_id: string){
        await this.agendaService.deleteAgenda(_id);
        this.getAgenda();
    }
}