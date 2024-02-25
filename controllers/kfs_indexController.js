// mv_indexController.js
const mv_Product = require('../models/mv_product');

exports.landingPage = (req, res) => {
  
      // Add any necessary logic here to fetch data or perform operations

    // Render the 'kfs_landing' view and pass any necessary data to it
    res.render('kfs_landing', { title: 'Kung-Fu-Science' });
};