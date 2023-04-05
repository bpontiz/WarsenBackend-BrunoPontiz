import ChatsDaoFactory from '../../persistance/models/dao/chatsDao/chatsDaoFactory.js';

const chatsDaoFactory = ChatsDaoFactory.getDao();

export async function getAll() {
    return await chatsDaoFactory.getChats();
};