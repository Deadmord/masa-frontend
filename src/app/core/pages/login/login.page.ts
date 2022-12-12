import { UserService } from './../../services/user.service';
import { Component, OnInit } from "@angular/core";
import { IUser, IUserInfo } from "src/app/entities";

@Component({
  selector: "app-login.page",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.css"]
})
export class LoginPage {

    public user: IUser;

    constructor(
        private userService: UserService
    ) {
        this.user = {} as any;
        this.initialize();
     }

    public onLoginClick(): void {
        this.userService.login(this.user)
            .subscribe(() => {
                console.log("Login sacsessfull");
                this.userService.getUserById(11)
                    .subscribe((result: IUserInfo) => console.log(result))
            });
    }

    public onClearClick(): void {
        this.initialize();
    }

    private initialize(): void {
        this.user = {
            username: "demo_user",
            password: "password"
        }
    }



}
