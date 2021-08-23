import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {
  constructor() { }

  gerar(limite: number): string[] {
    const fizzBuzz: string[] = []
    //throw new Error('Method not implemented.');
    for (let index = 0; index < limite; index++) {
      if((index + 1) % 15 == 0){
        fizzBuzz.push("FizzBuzz")
      }
      else if ((index + 1) % 3 == 0) {
        fizzBuzz.push("Fizz");
      } else if ((index + 1) % 5 == 0) {
        fizzBuzz.push("Buzz")
      } 
      else {
        fizzBuzz.push((index + 1).toString());
      }
    }
    return fizzBuzz;
  }
}
