import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Values } from "src/app/constants";

enum ViewMode {
    ReadOnly,
    Edit
}

const Edit: string = "Edit";
const Save: string = "Save";

@Component({
  selector: "mf-person-card",
  templateUrl: "./person-card.component.html",
  styleUrls: ["./person-card.component.less"]
})
export class PersonCardComponent implements OnInit {
    @Input() id: number = 0;
    @Input() personName: string = "";
    @Input() personId: string = "";
    @Input() personAddress: string = "";
    @Input() personEmail: string = "";
    @Input() personGender: string = "";
    @Input() personBirthdate: Date | undefined;
    @Input() personSalary: number | undefined;

    @Output() personNameChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personIdChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personAddressChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personEmailChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personGenderChange: EventEmitter<string> = new EventEmitter<string>();

    @Output() onModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onSaveClicked: EventEmitter<void> = new EventEmitter<void>();

    public ViewMode = ViewMode;

    public buttonTitle: string = "";
    public mode: ViewMode = ViewMode.ReadOnly;

    //public GenderArr: string[] = Values.GenderArr;
    public genderOptions: string[] = Values.GenderArr;

    constructor() {
        this.setButtonTitle();
      
        console.log("Name in ctor: ", this.personName);
    }
    
    public ngOnInit(): void {
        console.log("Name in OnInit: ", this.personName);
      }

    public onToggleModeClick(): void {
        if (this.mode === ViewMode.Edit) {
            this.onSaveClicked.emit();
        }

    this.mode = this.mode === ViewMode.ReadOnly ? ViewMode.Edit : ViewMode.ReadOnly;
    this.setButtonTitle();
    this.onModeChange.emit(this.mode === ViewMode.Edit);
    }

    public onPersonNameChange(): void {
        this.personNameChange.emit(this.personName);
    }

    public onPersonIdChange(): void {
        this.personIdChange.emit(this.personId);
    }

    public onPersonAddressChange(): void {
        this.personAddressChange.emit(this.personAddress);
    }

    public onPersonEmailChange(): void {
        this.personEmailChange.emit(this.personEmail);
    }

    public onPersonGenderChange(): void {
        this.personGenderChange.emit(this.personGender);
    }

    private setButtonTitle() {
        this.buttonTitle = this.mode === ViewMode.ReadOnly ? Edit : Save;
    }
}
