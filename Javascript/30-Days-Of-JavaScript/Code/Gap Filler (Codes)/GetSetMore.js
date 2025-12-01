// Getter and Setter inside classes (the common way)
class UserA {
    constructor(username, email) {
        this._username = username;
        this._email = email;
    }

    get username() {
        return this._username.toUpperCase();
    }

    get email() {
        const id = this._email.match(/\w*(?=@)/)[0];
        const domain = this._email.match(/(?<=@)[\w.]*/)[0];
        return `ID: ${id}\nDomain: ${domain}`;
    }

    set username(value) {
        this._username = value;
    }

    set email(value) {
        this._email = value;
    }
}

const userA1 = new UserA("Sufi", "sufy_789@dumbometric.com");
console.log(userA1);
console.log(userA1.username);
console.log(userA1.email);
userA1.username = "ifuS";
userA1.email = "987_yfus@cirtemobmud.com";
console.log(userA1);
/* 
    console.log(userA1._username);
    console.log(userA1._email);
    userA1._username = "ThisUser";
    userA1._email = "auser@user.com";
    // The above lines will also work and print/set the value of properties normally
*/

// Getter and Setter inside functions (rare)

function UserB(username, password) {
    this._username = username;
    this._password = password;

    Object.defineProperty(this, 'username', {
        get: function() {return this._username.toUpperCase()},
        set: function(value) {this._username = value}
    });

    Object.defineProperty(this, 'password', {
        get: function() {return this._password.split('').join('_')},
        set: function(value) {this._password = value}
    })
}
const userB1 = new UserB("Sufi2", "AlphaGoHaywire123");
console.log(userB1);
console.log(userB1.username);
console.log(userB1.password);
userB1.username = "2ifuS";
userB1.password = "321eriwyaHoGahplA";
console.log(userB1);

// Getter and Setter inside objects (very rare, weird-looking)

const UserC = {
    _username: "Sufi3",
    get username() {
        return this._username.toUpperCase();
    },
    set username(value) {
        this._username = value;
    }
}
const userC1 = Object.create(UserC);
console.log(userC1);
console.log(userC1.username);
userC1.username = '3ifuS';
console.log(userC1);