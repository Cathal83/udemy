import { Component, OnInit, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingLitsActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  @ViewChild('f', {static:false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex:  number;
  editedItem: Ingredient;

  constructor
  (private slService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
    .subscribe((index:number)=>{
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem=this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  // This was used when the method was on the submit button
  // onAddItem(){
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName, ingAmount);
  //   console.log(newIngredient);
  //   this.slService.addIngredient(newIngredient);
  // }

  onSubmit(form: NgForm){
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount);
    console.log(newIngredient);
    if(this.editMode){
      // this.slService.updateIngredient(this.editedItemIndex, newIngredient )
      this.store.dispatch(
        new ShoppingLitsActions.UpdateIngredient({
          index: this.editedItemIndex,
          ingredient: newIngredient 
        })
      );
    } else {
      // this.slService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingLitsActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    // this.slService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingLitsActions.DeleteIngredient(this.editedItemIndex));
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
