import express from 'express'
import UserController from '../controller/userController.js';
 
const router = express.Router();


router.get('/',UserController.getAllDoc)
router.post('/',UserController.createDoc)
router.get('/edit/:id',UserController.editDoc)
router.post('/delete/:id',UserController.deleteDoc)
router.post('/update/:id',UserController.updateDoc)



export default router