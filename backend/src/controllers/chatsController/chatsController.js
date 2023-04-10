import { getOne, saveOne } from '../../services/chatsService/chatsService.js';

const chatsController = {};

chatsController.getChat = async (req, res) => {
    const username = req.params.username;
    const getChats = await getOne(username);
    res.json(getChats);
};

chatsController.postChat = async (req, res) => {
    const message = req.body;
    const addChat = await saveOne(message);
    res.json(addChat);
};

export default chatsController;