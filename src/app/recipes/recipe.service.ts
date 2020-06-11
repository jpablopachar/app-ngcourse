import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shopping/ingredient';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel Sabroso',
      'Un Schnitzel súper sabroso - simplemente increíble!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Carne', 1),
        new Ingredient('Papas Francesas', 20)
      ]),
    new Recipe('Big Fat Burger',
      'Que más necesitas decir?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Pan', 2),
        new Ingredient('Carne', 1)
      ])
  ];

  constructor(private shoppingService: ShoppingService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    console.log(index);
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    console.log(ingredients);
    this.shoppingService.addIngredients(ingredients);
  }
}
