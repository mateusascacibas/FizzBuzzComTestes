import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {
  constructor() { }

  gerar(limite: number, fizz: number, buzz: number, fizzbuzz: number): string[] {
    const fizzBuzz: string[] = []
    let aux = 0; 
    //throw new Error('Method not implemented.');
    
    for (let index = 0; index < limite; index++) {
      if((index + 1) % fizzbuzz == 0){
        fizzBuzz.push("FizzBuzz")
      }
      else if ((index + 1) % fizz == 0) {
        fizzBuzz.push("Fizz");
      } else if ((index + 1) % buzz == 0) {
        fizzBuzz.push("Buzz")
      } 
      else {
        fizzBuzz.push((index + 1).toString());
      }
    }
    return fizzBuzz;
  }
}
