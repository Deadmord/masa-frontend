import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { States } from "../constants";
import { PersonCardComponent } from "./components/person-card/person-card.component";
import { PersonsPage } from "./pages/persons/persons.page";
import { NotFoundPage } from "./pages/not-found/not-found.page";
import { GenderComponent } from "./components/gender/gender.component";
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { GenericRadioButtonComponent } from './components/generic-radio-button/generic-radio-button.component';
import { DoublePipe } from "./pipes/double.pipe";

const routes: Routes = [
    { path: States.persons, component: PersonsPage },
    { path: "**", component: NotFoundPage }
];

@NgModule({
  declarations: [
    PersonCardComponent,
    PersonsPage,
    NotFoundPage,
    GenderComponent,
    RadioButtonComponent,
    GenericRadioButtonComponent,
    DoublePipe
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        PersonCardComponent
    ]
})
export class CoreModule {

}