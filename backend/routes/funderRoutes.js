import express from 'express';

import { addFunder, getFunders} from '../controllers/FundersController';

const router = express.Router();

router.get('/', getFunders);
router.post('/',addFunder);

export default router;