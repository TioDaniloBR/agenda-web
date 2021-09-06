import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Adicionar } from './adicionar/adicionar';
import { Inicio } from './inicio/inicio';
import { Contato } from './contatos/contato';

@NgModule({
    imports:[FormsModule,CommonModule],
    declarations: [Adicionar,Inicio,Contato],
    exports: [Adicionar,Inicio,Contato]
})

export class PagesModules {}