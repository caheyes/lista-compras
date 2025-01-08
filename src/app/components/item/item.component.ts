import { Component, Input, OnChanges, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  //iniciar antes de qualquer exibição uma vez
  ngOnInit(): void {
  }

  //ngOnChanges dispara primeiro que o ngOnInit, a diferença dos dois é que ngOnChanges é chamado sempre que houver mudanças nas propriedades de entrada
  ngOnChanges(): void {
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  //O OnDestroy serve basicamente para limpar os rastros, ou seja, para realizar lógicas de limpeza. Um exemplo de lógica de limpeza é cancelar assinatura de inscrições do Observable para liberar memória. Para resolver esse tipo de problema é importante sempre que um componente realizar um Observable, quando este componente for retirado do DOM ele realize a desinscrição deste Observable. Como no exemplo de código acima. Isso trará uma melhor fluidez da aplicação.
  ngOnDestroy() {
    console.log('teste')
  }
}
