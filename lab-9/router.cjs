// the router which takes care of routing individual urls

const homePageHandler = require('./handlers/homePageHandler.cjs');
const notFoundPageHandler = require('./handlers/notFoundPageHandler.cjs');
const postsPageHandler = require('./handlers/postsPageHandler.cjs');

function router(req, res) {
	const { url, method } = req;
	if ((method === 'GET') & (url === '/')) {
		return homePageHandler(req, res);
	} else if ((method === 'GET') & (url === '/posts')) {
		return postsPageHandler(req, res);
	} else {
		return notFoundPageHandler(req, res);
	}
}

module.exports = router;
