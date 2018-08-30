/**
 * Védjük az URL-eket a jogosulatlan megnyitás ellen.
 */
module.exports = (req, res, next) => {
    if(!res.locals.authenticated) {
        res.redirect('/');
    } else {
        next();
    }
};