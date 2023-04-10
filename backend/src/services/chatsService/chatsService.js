import ChatsDaoFactory from '../../persistance/models/dao/chatsDao/chatsDaoFactory.js';

const chatsDaoFactory = ChatsDaoFactory.getDao();

export async function getOne(username) {
    return await chatsDaoFactory.getChat(username);
};

export async function saveOne(message) {
    return await chatsDaoFactory.saveMessage(message);
};