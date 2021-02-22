class Reservation {
    constructor(id,name,email,phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPhoneNum() {
        return this.phone;
    }
}