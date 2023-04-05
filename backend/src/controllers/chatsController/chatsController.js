import { getAll } from '../../services/chatsService/chatsService.js';

const chatsController = {};

chatsController.getChats = async (req, res) => {
    const getAll = await getAll();
    res.json(getAll);
};

export default chatsController;