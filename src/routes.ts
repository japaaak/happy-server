import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;

// ------------------------- //
// routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
// upload.single => upload de um arquivo so
// upload.aray -> upload de varias imagens (funcao)
// -> Passar como vai ser o nome que vai enviar as imagens

// json nao suporta files -> utilizar o multpart
