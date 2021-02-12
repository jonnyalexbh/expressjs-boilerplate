exports.urlsNotFound = (req, res) => res.status(404).send({ message: `${req.url} not found`, internal_code: 'not_found_error' });
