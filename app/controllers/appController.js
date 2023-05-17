
const appController = {
  // Landing page
  landingPage(req, res) {
    res.render('index');
  },

  // Header Links
  accueilPage(req, res) {
    res.render('header/accueil');
  },
  boulangeriePage(req, res) {
    res.render('header/boulangerie');
  },
  viennoiseriePage(req, res) {
    res.render('header/viennoiserie');
  },
  patisseriePage(req, res) {
    res.render('header/patisserie');
  },
  snackingSucrePage(req, res) {
    res.render('header/snackingSucre');
  },
  snackingSalePage(req, res) {
    res.render('header/snackingSale');
  },
  formulesPage(req, res) {
    res.render('header/formule');
  },

  // Footer Links
  informationsPage(req, res) {
    res.render('footer/informations');
  },
  contactPage(req, res) {
    res.render('footer/contact');
  },
  commentairesPage(req, res) {
    res.render('footer/commentaires');
  },
  publicationsPage(req, res) {
    res.render('footer/publications');
  },
  recrutementPage(req, res) {
    res.render('footer/recrutement');
  },
  cgvPage(req, res) {
    res.render('footer/cgv');
  },
  mentionsLegalesPage(req, res) {
    res.render('footer/mentionslegales');
  },
  pdcPage(req, res) {
    res.render('footer/pdc');
  }
};

module.exports = appController;
