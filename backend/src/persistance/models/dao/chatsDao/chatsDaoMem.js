class ChatsDaoMem {
    constructor() {
        this.chats = []
    }

    #getIndex(id) {
        return this.chats.findIndex(p => p.id == id)
    }

    getChats() {
        return this.chats;
    };

    getChat(id) {
        const searched = this.chats[ this.#getIndex(id) ];

        if (!searched) {
            console.log(`ERR! Chat with id = ${id} does not exist.`);
        };

        return searched;
    };

    saveChat(chat) {
        let id = 1;
        let time = new Date().toLocaleString();

        const lastCartId = this.chats.length === 0 ?
            id :
            this.chats[this.chats.length - 1].id + 1;

        const newChat = { ...chat, id: lastCartId, date: time};
        this.chats.push(newChat);
        console.log(`Cart ${newChat.name} successfully added.`);
        return newChat;
    };

    delteChat(id) {
        const [ deletedChat ] = this.chats.splice(this.#getIndex(id), 1)
        return deletedChat
    };

    deleteAll() {
        this.chats = []
    };

    updateChat(id, newChat) {
        const index = this.#getIndex(id);
        const updatedChat = { ...this.newChat[index], ...newChat };
        this.chats.splice(index, 1, updatedChat);
        return updatedChat;
    };

};

export default ChatsDaoMem;