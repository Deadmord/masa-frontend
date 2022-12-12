import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

enum Gender {
    Male = 0,
    Female
}



@Component({
  selector: 'mf-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.less']
})
export class GenderComponent {
    @Input() id: number = 0;
    @Input() GenderArr: string[] = [];
    @Input() gender: string = "";
    @Output() genderChange: EventEmitter<string> = new EventEmitter<string>();

/**
 *
 */

    selectedGender: string = "";
    // private _selectedGender: string = "";
    // public get SelectedGender() : string {
    //     return this._selectedGender;
    // }
    // public set SelectedGender(v : string) {
    //     this._selectedGender = v;
    // }
    
    radioChangeHandler(event: any) {
        this.selectedGender = event.target.value;
        this.gender = this.selectedGender;
        this.onGenderChange();
    }

    public onGenderChange(): void {
        this.genderChange.emit(this.gender);
    }
}
