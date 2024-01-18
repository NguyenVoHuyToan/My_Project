export class User{
    constructor(user){
        this.fullName=user.fullName;
        this.email = user.email
        this.gender = user.gender  || ''
        this.password = user.password 
        this.birthday = user.birthday || ''
    }
}