import { Component, OnInit } from "@angular/core";
import { LocalStorageKeys } from "src/app/constants";
import { IPerson, ISelectableOption } from "src/app/entities";
import { Layout } from "src/app/enums";
import { LocalStorageService } from "../../services/local-storage.service";
import { PersonService } from "../../services/person.service";

@Component({
  selector: "app-persons.page",
  templateUrl: "./persons.page.html",
  styleUrls: ["./persons.page.less"]
})
export class PersonsPage implements OnInit {

    public JSON = JSON;
    public Layout = Layout;

    // public persons: IPerson[] | null = [
    //     {
    //         name: "Nikolay",
    //         id: "256",
    //         address: "Haifa, HaNemanim 31",
    //         email: "Svamp31@ieexp.il",
    //         gender: "Undefined",
    //         birthdate: new Date(1990 - 6 - 15),
    //         salary: 15000
    //     },
    //     {
    //         name: "Galina",
    //         id: "128",
    //         address: "Haifa, Hdsfdsf",
    //         email: "Svamp31@isdfl",
    //         gender: "Undefined",
    //         birthdate: new Date(1990 - 6 - 18),
    //         salary: 15000
    //     }
    // ];


    public personOptions: ISelectableOption<IPerson>[] = [];
    public selectedPersons: IPerson[] = [];

    public layoutOptions: ISelectableOption<Layout>[] = [];
    public selectedPersonLayout: Layout[] = [Layout.Vertical];

    public cardMessage: string = "";

    public myProperty: string = "Hooray!";
    public htmlProperty: string = "<i>Nikolay </i>"

    constructor(
       public personService: PersonService
    ) {

    }

    public ngOnInit(): void {
    this.layoutOptions.push({
      title: Layout.Horizontal,
      value: Layout.Horizontal
    });

    this.layoutOptions.push({
      title: Layout.Vertical,
      value: Layout.Vertical
    });

        if (this.personService.persons) {
            this.personOptions = this.personService.persons.map((person: IPerson) => {
                return {
                    title: person.name,
                    value: person
                };
            });
            this.selectedPersons = this.personService.persons.length > 0 ? [this.personService.persons[0]] : [];

        }
    }

    public clickMyFunc():void {
        this.myProperty = "OK";
    }

    public onCardModeChanged(isEdit: boolean, index: number): void {
        this.cardMessage = isEdit ?
            "Please, fill the data" :
            "Data saved";

    // console.log("Index: ", index);
    }

    public onSaveClicked(): void {

        this.personService.save();
    }
}
