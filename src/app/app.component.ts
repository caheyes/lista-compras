import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompras!: Array<Item>;
  itemParaSerEditado!: Item;

  constructor(
    private listaService: ListaDeCompraService
  ) { }

  //iniciar antes de qualquer exibição
  ngOnInit(): void {
    this.listaDeCompras = this.listaService.getListaDeCompra();
  };

  //escuta todas as alterações de inputs, como o whatch, O hook doCheck permite implementar verificações manuais e personalizadas para detectar mudanças que não seriam capturadas automaticamente pelo Angular, otimizando o desempenho quando for preciso monitorar condições específicas.
  ngDoCheck() {
    this.listaService.atualizarLocalStorage();
  }

  editarItem(item: Item) {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number) {
    const index = this.listaDeCompras.findIndex((item) => item.id === id);
    this.listaDeCompras.splice(index, 1); //deletando apenas 1
  }

  limparLista() {
    this.listaDeCompras = [];
  }
}

/*
AfterViewInit:

Este hook é acionado após a visualização do componente ser totalmente inicializada. É útil para realizar ações específicas relacionadas à visualização, como manipulações no DOM ou integrações com bibliotecas externas.

AfterViewChecked:

Ativado após cada verificação da visualização do componente, permitindo a execução de ações adicionais nesse momento específico do ciclo de vida.

AfterContentInit:

Executado após a inicialização do conteúdo do componente. É útil quando operações dependem do conteúdo projetado no componente.

AfterContentChecked:

Ativado após cada verificação do conteúdo do componente, proporcionando oportunidades para ações adicionais relacionadas ao conteúdo.

*/
