import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { User } from "./user.model";

const existingUser: { readonly login: string; readonly password: string; } = {
  login: "user",
  password: "pwd",
};

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  public readonly user = new Subject<User>();

  public async signUp(login: string, _password: string) {
    if (login === existingUser.login) {
      return;
    }

    const user: User = {
      login,
    };

    this.user.next(user);

    return user;
  }

  public async logIn(login: string, password: string) {
    if (login === existingUser.login && password === existingUser.password) {
      const user = existingUser;

      this.user.next(user);

      return user;
    }
  }

  public async logOut() {
    this.user.next(undefined);
  }
}
