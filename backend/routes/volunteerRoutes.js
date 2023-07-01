import express from 'express';

import { addSession, getSession, getSessions} from '../controllers/sessionsController';
import { addVolunteer } from '../controllers/volunteerController';

const router = express.Router();

router.post('/',addVolunteer);
router.get('/')

export default router;