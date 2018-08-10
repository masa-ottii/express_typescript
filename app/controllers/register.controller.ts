import { Router, Request, Response } from 'express';
const router:Router = Router();

router.post('/',(req:Request,res:Response)=>{
    res.send('登録できました！');
});
export const RegisterController:Router = router;