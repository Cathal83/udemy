import { Component, OnInit } from '@angular/core';
// import { Recipe } from './recipes.model';
// import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;
  
  // constructor(private recipeService: RecipeService) { }
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe)=>{
    //   this.selectedRecipe = recipe;
    // })

    //Selected recipe is equal to the recipe we got with the event
  }

}
