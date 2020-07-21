import { User } from "./user";

export class DummyDatabase {
    public static usertable:User[] = [];

    public static createAccount(user:User)
    {
        this.usertable.push(user);
    }
}
