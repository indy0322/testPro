const router = require("express").Router()
const controller = require('../controller/api')

router.get("/node", controller.apiNode)

router.post("/nodetest", controller.apiNodeTest)

router.post("/login", controller.apiLogin)

router.get("/auth", controller.auth, controller.apiAuth)

router.post("/register", controller.apiRegister)

router.post('/changeuser', controller.apiChangeUser)

router.post("/reviewregister", controller.apiReviewRegister)

router.post('/authnumber',controller.apiAuthNumber)

router.post('/audio', controller.apiAudio)

router.post('/latlng',controller.apiChangeLatLng)

router.post('/reviewinfo',controller.apiReviewInfo)

router.post('/reviewremove',controller.apiReviewRemove)

router.post('/wishregister',controller.apiWishRegister)

router.post('/wishremove',controller.apiWishRemove)

router.post('/wishremove2',controller.apiWishRemove2)

router.post('/wishinfo',controller.apiWishInfo)

router.post('/hknuchatgpt',controller.apiHknuChatgpt)


module.exports = router;



