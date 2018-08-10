import { Router, Request, Response } from 'express';
const router:Router = Router();

router.get('/',(req:Request,res:Response)=>{
    res.send('ようこそ名無しさん');
});
router.get('/:name',(req:Request, res:Response)=>{
    let {name} = req.params;
    res.send(`ようこそ ${name}さん`);
});
export const WelcomeController:Router = router;