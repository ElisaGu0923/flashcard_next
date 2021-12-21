import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const httpMethod: string = req.method;
	switch (httpMethod) {
		case 'GET':
			res.status(200).json({ text: 'GET' });
		case 'POST':
			res.status(200).json({ text: 'POST' });
	}
	res.status(200).json({ text: 'Hello' });
};
