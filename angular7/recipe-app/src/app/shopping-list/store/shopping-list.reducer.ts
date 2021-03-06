import { Ingredient } from '../../shared/ingredient.model';

import * as ShoppingLitsActions from './shopping-list.actions';

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

export interface AppState {
    shoppingList: State
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ],
      editedIngredient: null,
      editedIngredientIndex: -1
};



export function shoppingListReducer(
    state: State = initialState, 
    action: ShoppingLitsActions.ShoppingListActions){
        switch(action.type) {
            case ShoppingLitsActions.ADD_INGREDIENT:
                return {
                    ...state,
                    ingredients:  [...state.ingredients, action.payload]
                };
            case ShoppingLitsActions.ADD_INGREDIENTS:
                return {
                    ...state,
                    ingredients: [...state.ingredients, ...action.payload]
                };

            case ShoppingLitsActions.UPDATE_INGREDIENT:
                const ingredient = state.ingredients[action.payload.index];
                const updatedIngredient = {
                    ...ingredient,
                    ...action.payload.ingredient
                };
                const updatedIngredients = [...state.ingredients];
                updatedIngredients[action.payload.index] = updatedIngredient;

                return {
                        ...state,
                        ingredients: updatedIngredients
                    };
            case ShoppingLitsActions.DELETE_INGREDIENT:
                
                return {
                        ...state,
                        ingredients: state.ingredients.filter((ig, igIndex) =>{
                            return igIndex !== action.payload;
                        })
                    };
            default:
                return state;
        }
}
