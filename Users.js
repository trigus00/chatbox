const colors = ["#7cb5ec","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#2b908f","#f45b5b","#91e8e1"];

class Users {
    constructor() {
        this.users = [];
    }

    addUser(id){
        const user = {id};
        user.color = this.assignColor(colors);

        this.users.push(user);
    }

    assignColor(colors){
        const randIndx = Math.floor(Math.random() * colors.length)
        return colors[randIndx]
    }

    getUser(id) {
        const user = this.users.filter(user => user.id === id);
        return user[0];
    }
}

module.exports = { Users };