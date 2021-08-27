import { NumeroDirective } from './numero.directive';

describe('NumeroDirective', () => {
  const directive = new NumeroDirective();
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('deve remover caracteres não numéricos', () =>{
    let $event = { target: { value: '1a2b3c'}};
    directive.onKeyup($event);
    expect($event.target.value).toBe('123');
  });

  it('deve remover caracteres que não sejam numeros. Nesse caso (.) e (,)', () =>{
    let $event = { target: { value: '5.7.6.4,3,2'}};
    directive.onKeyup($event);
    expect($event.target.value).toBe('576432');
  });
});
