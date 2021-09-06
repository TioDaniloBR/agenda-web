import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agenda } from 'src/app/interfaces/agenda.interface';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
    selector: 'page-adicionar',
    templateUrl: './adicionar.html',
    styleUrls: ['./adicionar.css']
})


export class Adicionar implements OnChanges{
    
    public buttonValue = 'Enviar';
    public isUpdate: boolean = false;
    
    public name: any = '';
    public email:any = '';
    public phone: any = '';

    public id:any = null;

    public dados: Object = {};
    
    constructor(
                private activatedRoute: ActivatedRoute,
                private agendaService: AgendaService,
                private router: Router
                ){
        this.id = activatedRoute.snapshot.paramMap.get('_id');
        
        if (this.id){
            this.preencher(this.id);
            if(!this.isUpdate){
                router.navigate(['/adicionar']);
            }
        } 
    }
    
    
    
    ngOnChanges(){
        console.log(`Nome: ${this.name} email: ${this.email}, telefone: ${this.phone}`)
    }
   OnChanges(){
       console.log("Mudou");
    }
    acaoBotao(){
        this.buttonValue === "Enviar" ? this.salvar() : this.atualizar();
    }

    async salvar(){
        let contato;
        contato = {
            name: this.name,
           email: this.email,
           phone: this.phone
           
       }
       try{
           await this.agendaService.postAgenda(contato);
           this.router.navigate(['/contato']);
        }catch(error){
            console.log(`Erro ao tentar gravar dados.`)
            console.log(error)
        }
    }
    
    async atualizar(){
        let contato:Agenda;
    contato = {
        _id: this.id,
        name: this.name,
        email: this.email,
        phone: this.phone
    }
    try{
        await this.agendaService.putAgenda(contato);
        
    }catch(error){
        console.log(`Erro ao atualizar registro: ${error}`)
    }
    this.router.navigate(['/contato']);
}

async preencher(id: string){
    try{
        let contato = await this.agendaService.getOneAgenda(this.id);

        if(contato !== null){
            if(contato[0]=== null){
                alert('Registro não encontrado no banco de dados.')
                throw new Error('Registro não encontrado no banco de dados.')
            }
            this.name = contato[0].name;
            this.email = contato[0].email;
            this.phone = contato[0].phone;
            this.buttonValue = 'Atualizar';
            this.isUpdate = true;
        }else{
            throw new Error('Erro ao acessar banco de dados');
        }
    }catch(error){
        console.log(error);
    }
    
}

}