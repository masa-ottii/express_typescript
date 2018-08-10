import express,{Application} from 'express';
import {WelcomeController,RegisterController} from './controllers';
import { Router, Request, Response } from 'express';


const app:Application = express();
const port:number = Number(process.env.PORT)||3000;

app.set('view engine','pug');

app.get('/',(req:Request, res:Response) => {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.use('/welcome',WelcomeController);
app.use('/register',RegisterController);

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})