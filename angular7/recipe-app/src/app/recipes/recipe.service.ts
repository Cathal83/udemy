import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService{

    // recipeSelected = new EventEmitter<Recipe>();
    // recipeSelected = new Subject<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg', 
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burger', 'What else you need to say?', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
        [
            new Ingredient('Bun', 2),
            new Ingredient('Meat', 1)
        ]),
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
          // Returns a copy of original array
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.slService.addIngredients(ingredients);

      }
}