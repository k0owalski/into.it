import { Request, Response, Router } from 'express';

const router = Router();

router.get('/create-access-token', (_req: Request, res: Response) => {
	res.status(200).json({ msg: 'Access token created.' });
});

router.get('/refresh-access-token', (_req: Request, res: Response) => {
	res.status(200).json({ msg: 'Access token refreshed.' });
});

router.post('/login', (req: Request, res: Response) => {
	const { email, password } = req.body;

	if (email && password) res.status(200).json({ msg: 'Logged in.' });
	else res.status(400).json({ msg: 'Invalid email or password.' });
});

router.post('/register', (req: Request, res: Response) => {
	const { email, password, passwordRepeated } = req.body;

	if (email && password && passwordRepeated)
		res.status(200).json({ msg: 'Registered successfuly.' });
	else res.status(400).json({ msg: 'Invalid email or password.' });
});

export default router;
