import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent
    ],

    imports: [
        SharedModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: ShoppingListComponent }])
    ],

    exports: [

    ],

})

export class ShoppingListModule{}