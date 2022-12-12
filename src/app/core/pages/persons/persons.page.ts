import { Component, OnInit } from "@angular/core";
import { LocalStorageKeys } from "src/app/constants";
import { ISelectableOption } from "src/app/entities";
import { Layout } from "src/app/enums";
import { LocalStorageService } from "../../services/local-storage.service";

interface IPerson {
  name: string;
  id: string;
  address: string;
  email: string;
  gender: string;
  birthdate: Date;
  salary: number;
}

@Component({
  selector: "app-persons.page",
  templateUrl: "./persons.page.html",
  styleUrls: ["./persons.page.less"]
})
export class PersonsPage implements OnInit {

    public JSON = JSON;
    public Layout = Layout;

    public persons: IPerson[] | null = [
        {
            name: "Nikolay",
            id: "256",
            address: "Haifa, HaNemanim 31",
            email: "Svamp31@ieexp.il",
            gender: "Undefined",
            birthdate: new Date(1990 - 6 - 15),
            salary: 15000
        },
        {
            name: "Galina",
            id: "128",
            address: "Haifa, Hdsfdsf",
            email: "Svamp31@isdfl",
            gender: "Undefined",
            birthdate: new Date(1990 - 6 - 18),
            salary: 15000
        }
    ];


    public personOptions: ISelectableOption<IPerson>[] = [];
    public selectedPerson: IPerson | null = null;

    public layoutOptions: ISelectableOption<Layout>[] = [];
    public selectedPersonLayout: Layout = Layout.Vertical;

    public cardMessage: string = "";

    public myProperty: string = "Hooray!";
    public htmlProperty: string = "<i>Nikolay </i>"

    constructor(
        private localStorageService: LocalStorageService
    ) {
        
    }

    public ngOnInit(): void {
        this.persons = this.localStorageService.get(LocalStorageKeys.PERSONS);
    this.persons?.forEach((person: IPerson) => {
      person.birthdate = new Date(person.birthdate)
    });

    this.layoutOptions.push({
      title: Layout.Horizontal,
      value: Layout.Horizontal
    });

    this.layoutOptions.push({
      title: Layout.Vertical,
      value: Layout.Vertical
    });

        if (this.persons) {
            this.personOptions = this.persons.map((person: IPerson) => {
                return {
                    title: person.name,
                    value: person
                };
            });

            this.selectedPerson = this.persons.length > 0 ? this.persons[0] : null;
        }
    }

    public clickMyFunc():void {
        this.myProperty = "OK";
    }

    public onCardModeChanged(isEdit: boolean, index: number): void {
        this.cardMessage = isEdit ?
            "Please, fill the data" :
            "Data saved";
        
        console.log(index);
    } 

    public onSaveClicked(): void {
        this.localStorageService.set(LocalStorageKeys.PERSONS, this.persons);
    }
}
