import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../ingredient';
import { ShoppingService } from '../shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];

  private ingredientSub: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    console.log(this.ingredients);
    this.ingredientSub = this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      console.log(ingredients);
      this.ingredients = ingredients;
      console.log(this.ingredients);
    });
  }

  editItem(index: number): void {
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientSub.unsubscribe();
  }
}
