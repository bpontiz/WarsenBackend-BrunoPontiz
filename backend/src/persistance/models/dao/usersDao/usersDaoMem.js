class UsersDaoMem {
    constructor() {
        this.users = []
    }

    #getIndex(id) {
        return this.users.findIndex(p => p.id == id)
    }

    getUsers() {
        return this.users;
    };

    getUser(id) {
        const searched = this.users[ this.#getIndex(id) ];

        if (!searched) {
            console.log(`ERR! User with id = ${id} does not exist.`);
        };

        return searched;
    };

    saveUser(user) {
        let id = 1;

        const lastUserId = this.users.length === 0 ?
            id :
            this.users[this.users.length - 1].id + 1;

        const newUser = { ...user, id: lastUserId};

        this.users.push(newUser);
        console.log(`User ${newUser.username} successfully added.`);
        return newUser;
    };

    deleteUser(id) {
        const [ deletedUser ] = this.users.splice(this.#getIndex(id), 1)
        return deletedUser
    };

    deleteAll() {
        this.users = []
    };

    updateUser(id, newUser) {
        const index = this.#getIndex(id);
        const updatedUser = { ...this.newUser[index], ...newUser };
        this.users.splice(index, 1, updatedUser);
        return updatedUser;
    };

};

export default UsersDaoMem;