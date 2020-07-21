export class User {
    public userid:number;
    public username:string;
    public emailid:string;
    public gender:string;
    public location:string;
    public password:string;

    constructor(userid:number, username:string,emailid:string,gender:string, location:string, password:string)
    {
        this.userid = userid;
        this.username = username;
        this.emailid = emailid;
        this.gender = gender;
        this.location = location;
        this.password = password;
    }
}
