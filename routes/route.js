const  router  = require('express').Router();
const { login , register } = require('../controllers/authController');
const{getAllHotels, get_single_Hotel, create_hotel, update_hotel, remove_hotel} = require('../controllers/hotel_ctrl');


router.post('/login', login )
router.post('/register', register)

///ROUTER HOTEL///

router.get('/', getAllHotels);
router.get('/', get_single_Hotel);
router.post('/update', update_hotel);
router.get('/remove/:id', remove_hotel);
router.get('/create', create_hotel)




module.exports = router;