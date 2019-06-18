import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';




@Injectable({providedIn: 'root'})
export class DataStorageService{

    constructor(
        private http: HttpClient,
        private recipesService: RecipeService,
        private authService: AuthService){ }

    storeRecipes(){

        const recipes = this.recipesService.getRecipes();
        if (!recipes.length && !confirm('Do you really want to clear the database?')) {
          return;
        }
        // const recipes = this.recipesService.getRecipes();
        this.http.put('https://ng-course-recipe-book-2eeba.firebaseio.com/recipes.json',
        recipes)
        .subscribe(response=>{
            console.log(response);
        });
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>(
            'https://ng-course-recipe-book-2eeba.firebaseio.com/recipes.json'
            )
            .pipe( 
                map(recipes => {
                    return recipes.map(recipe => {
                        return {
                            ...recipe, 
                            ingredients: recipe.ingredients? recipe.ingredients : []
                        };
                    });
                }),
                tap(recipes => {
                    this.recipesService.setRecipes(recipes);
                })
            );
    }   
}