import { RetornoPipe } from './../../filtros/retorno.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzComponent } from './fizz-buzz.component';

describe('FizzBuzzComponent', () => {
  let component: FizzBuzzComponent;
  let fixture: ComponentFixture<FizzBuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzComponent, RetornoPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve gerar os primeiros 30 resultados para o FizzBuzz', () => {
    const element: HTMLElement = fixture.nativeElement;
    const limiteInput: HTMLInputElement = element.querySelector('#limite')!;
    const btnGerar: HTMLButtonElement = element.querySelector('#btnGerar')!;
    
    limiteInput.value = '30';
    limiteInput.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    btnGerar.click();
    fixture.detectChanges();

    const resultado: NodeListOf<HTMLLIElement> = element.querySelectorAll('li');
    const tituloResultado: HTMLHeadingElement = element.querySelector('.resultado')!;

    expect(resultado.length).toBe(30);
    expect(resultado.item(0).innerHTML).toContain('1');
    expect(resultado.item(2).innerHTML).toContain('Fizz');
    expect(resultado.item(4).innerHTML).toContain('Buzz');
    expect(resultado.item(14).innerHTML).toContain('FizzBuzz');
    expect(resultado.item(24).innerHTML).toContain('Buzz');
    expect(resultado.item(29).innerHTML).toContain('FizzBuzz');
    expect(tituloResultado.innerHTML).toContain('Exibindo os primeiros 30 elementos');
  });

  
  it('deve gerar os primeiros 20 resultados para o FizzBuzz', () => {
    const element: HTMLElement = fixture.nativeElement;
    const limiteInput: HTMLInputElement = element.querySelector('#limite')!;
    const btnGerar: HTMLButtonElement = element.querySelector('#btnGerar')!;
    
    limiteInput.value = '20';
    limiteInput.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    btnGerar.click();
    fixture.detectChanges();

    const resultado: NodeListOf<HTMLLIElement> = element.querySelectorAll('li');
    const tituloResultado: HTMLHeadingElement = element.querySelector('.resultado')!;

    expect(resultado.length).toBe(20);
    expect(resultado.item(1).innerHTML).toContain('2');
    expect(resultado.item(2).innerHTML).toContain('Fizz');
    expect(resultado.item(4).innerHTML).toContain('Buzz');
    expect(resultado.item(14).innerHTML).toContain('FizzBuzz');
    expect(tituloResultado.innerHTML).toContain('Exibindo os primeiros 20 elementos');
  });

  
});
