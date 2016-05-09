// Get Home Page
module.exports.homeList = function (req, res) {
    res.render('locationListView', { title: 'Loc8r - find a place to work with wifi' });
};
// get Location info Page 
module.exports.locationInfo = function (req, res) {
    res.render('location-info', { title: 'Location Info' });
};
// get Add Review Page 
module.exports.addReview = function (req, res) {
    res.render('location-review-form', { title: 'Add Review' });
};