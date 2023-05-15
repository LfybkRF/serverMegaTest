const { User, Groups, AppData } = require('../database/models/models');

class controller {


    async check(req, res) {
        try {
            return res.json({status: true, message: "Сервер работает"});

        } catch(e) {
            console.log(e);
        }
    }

    async addUser(req, res) {
        try {
            const {id, token, name} = req.body;
            const candidate = await findOne({where: {id}});
            if (candidate) {
                return res.json({status: false, message: "Пользователь уже существует"});
            }
            const user = await User.create({id : id, token : token, name: name});
            return res.json({status: true, message: "Пользователь успешно добавлен"});
        } catch(e) {
            console.log(e);
            return res.json({status: false, message: "Ой! Ошибка на сервере"});
        }
    }

    
    async postPhoto(req, res) {

    }

    async getSize(req, res) {
        try {
            const user = await User.findAll();
            return res.json({
                status: true,
                body : {
                    size : user.length
                }
            });
            

        } catch(e) {
            console.log(e);
            return res.json({status: false, message: "Ой! Ошибка на сервере"});
        }
    }

    async getGroups(req, res) {
        try {
            const group = await Groups.findAll();
            return res.json({
                status: true,
                body : {
                    groups : group
                }
            });
        } catch(e) {
            console.log(e);
            return res.json({status: false, message: "Ой! Ошибка на сервере"});
        }
    }

    async addGroup(req, res) {
        try {
            const {id, type} = req.body;
            const group = await Groups.create({id : id, type: type});
            return res.json({status: true, message: "Группа успешно добавлена"});
        } catch(e) {
            console.log(e);
            return res.json({status: false, message: "Ой! Ошибка на сервере"});
        }
    }

    async delGroup(req, res) {
        try {
            const {id, type} = req.body;
            const group = await Groups.destroy({ where: {id : id, type: type} });
            return res.json({status: true, message: "Группа успешно удалена"});
        } catch (e) {
            console.log(e);
            return res.json({status: false, message: "Ой! Ошибка на сервере"});
        }
    }

    async setDataApp(req, res) {
        try {
            const {appId, token} = req.body;
            const app = await AppData.create({appId : appId, token: token});
            return res.json({status: true, message: "Данные успешно обновленны"});
        } catch(e) {
            console.log(e);
            return res.json({status: false, message: "Ой! Ошибка на сервере"});
        }
    }

    async getDataApp(req, res) {
        try {
            const data = await AppData.findAll({ order: [['id', 'DESC']], attributes: ['id', 'appId', 'token'], limit: 1});
            return res.json({status: true, body: {
                data : data[0]
            }});
        } catch(e) {
            console.log(e);
            return res.json({status: false, message: "Ой! Ошибка на сервере"});
        }
    }



}

module.exports = new controller();
