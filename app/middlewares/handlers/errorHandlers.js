exports.notFound = function (req, res, next) {
  const error = new Error('Page not found')
  error.status = 404;
   res.status(404).render('404', {error: error});
   //next(error);
}


// Middleware d'erreurs
exports.errorCollector = function (error, req, res, next) {
  const status = error.status || 500;
  res.status(status).render('error', {error: error});
}
