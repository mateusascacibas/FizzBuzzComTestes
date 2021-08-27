import { RetornoPipe } from './retorno.pipe';

describe('RetornoPipe', () => {
  const pipe = new RetornoPipe();
  it('create an instance', () => {
   
    expect(pipe).toBeTruthy();
  });

  it('deve exibir mensagem contendo 15 elementos', () => {
    const resultado = pipe.transform(15)
    expect(resultado).toBe('Exibindo os primeiros 15 elementos')
  });

  it('deve exibir mensagem contendo 20 elementos', () => {
    const resultado = pipe.transform(20)
    expect(resultado).toBe('Exibindo os primeiros 20 elementos')
  });

  it('deve exibir mensagem contendo 30 elementos', () => {
    const resultado = pipe.transform(30)
    expect(resultado).toBe('Exibindo os primeiros 30 elementos')
  });
});
