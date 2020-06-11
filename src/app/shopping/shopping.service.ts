import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Manzanas', 5),
    new Ingredient('Tomátes', 10)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient): void {
    console.log(ingredient);
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    console.log(ingredients);
    this.ingredients.push(...ingredients);
    console.log(this.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient): void {
    console.log(index, newIngredient);
    this.ingredients[index] = newIngredient;
    console.log(this.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number): void {
    console.log(index);
    this.ingredients.splice(index, 1);
    console.log(this.ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
