const { Router } = require('express');
const router = new Router();
const controller = require('./controller');

router.get("/check", controller.check);

router.post("/addUser", controller.addUser); // client
router.post("/postPhoto", controller.postPhoto); // admin
router.get("/getSize", controller.getSize); // admin

router.get("/getGroups", controller.getGroups); // client
router.post("/addGroup", controller.addGroup); // admin
router.delete("/delGroup", controller.delGroup); // admin

router.post("/setdata", controller.setDataApp); // admin
router.get("/getdata", controller.getDataApp); // client, admin

module.exports = router;