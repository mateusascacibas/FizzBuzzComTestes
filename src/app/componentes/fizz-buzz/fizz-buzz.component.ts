import { FizzBuzzService } from './../../servicos/fizz-buzz.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataHoraService } from 'src/app/servicos/data-hora.service';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit, OnDestroy {
  limite: number = 15;
  resultado: string[] = [];

  dataTempoReal = '';
  dataTempoRealSub: Subscription | undefined;


  constructor(private fizzBuzzService: FizzBuzzService, private dataHoraService: DataHoraService) { }

  ngOnDestroy(): void{
    this.dataTempoRealSub?.unsubscribe();
  }

  ngOnInit(): void {

    this.dataTempoRealSub = this.dataHoraService.dataHoraTempoReal.subscribe(
      dataHora => this.dataTempoReal = dataHora
    );

  }

  atualizarDataHora(){
    this.dataHoraService.atualizarDatahora();
  }

  setLimite($event: any){
    this.limite = $event.target.value;
    if($event.keyCode !== 13){
      this.resultado =[];
    }
  }

  gerar($event: any){
    $event.preventDefault();
    this.resultado = this.fizzBuzzService.gerar(this.limite);
  }



}
