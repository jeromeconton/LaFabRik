const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const emailController = require('../controllers/emailController');

// route Landing page
router.get('/', appController.landingPage);

// routes du Header
router.get('/accueil', appController.accueilPage);
router.get('/boulangerie', appController.boulangeriePage);
router.get('/viennoiserie', appController.viennoiseriePage);
router.get('/patisserie', appController.patisseriePage);
router.get('/snackingSucre', appController.snackingSucrePage);
router.get('/snackingSale', appController.snackingSalePage);
router.get('/formules', appController.formulesPage);

// routes du Footer
router.get('/informations', appController.informationsPage);
router.get('/contact', appController.contactPage);
router.get('/commentaires', appController.commentairesPage);
router.get('/publications', appController.publicationsPage);
router.get('/recrutement', appController.recrutementPage);
router.get('/cgv', appController.cgvPage);
router.get('/mentionslegales', appController.mentionsLegalesPage);
router.get('/pdc', appController.pdcPage);

// Route POST pour l'envoi d'e-mail depuis le formulaire de contact
router.post('/send-email', emailController.sendEmail);

module.exports = router;