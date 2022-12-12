import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { CommonModule } from "@angular/common";

import { CalendarComponent } from "./calendar/calendar.component";
import { SelectorComponent } from "./selector/selector.component";
import { OrganizerComponent } from "./organizer/organizer.component";
import { MomentPipe } from "./shared/moment.pipe";

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        SelectorComponent,
        OrganizerComponent,
        MomentPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CommonModule,
        CoreModule
    ],
    exports: [
        FormsModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
