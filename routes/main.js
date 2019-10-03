const db = require('../config/database')();

module.exports = function (app) {

    app.get('/api/cheeses', (req, res) => {
        res.set('Content-Type', 'application/json');
        db.query(`SELECT cheeses.id, cheeses.name, cheeses.country, basis.name AS basis, strengths.name AS strength, consistancys.name AS consistancy, flavours.name AS flavour, colours.name AS colour
				FROM cheese_api.cheeses
                INNER JOIN cheese_api.basis ON cheeses.basis = basis.id
                INNER JOIN cheese_api.strengths ON cheeses.strength = strengths.id
                INNER JOIN cheese_api.consistancys ON cheeses.consistancy = consistancys.id
                INNER JOIN cheese_api.flavours ON cheeses.flavour = flavours.id
                INNER JOIN cheese_api.colours ON cheeses.colour = colours.id`
				, (err, results) => {
            if (err) res.send(err);
            res.send(results);
        });
        
    });

    app.post('/api/cheeses', (req, res, next) => {
        db.query(`INSERT INTO cheeses SET cheeses.name = ?, cheeses.country = ?, cheeses.basis = ?, 
        cheeses.strength = ?, cheeses.consistancy = ?, cheeses.flavour = ?, cheeses.colour = ?`,
         [req.body.name, req.body.country, req.body.basis, req.body.strength, req.body.consistancy, req.body.flavour, req.body.colour], (err, result) => {
            if (err) return next(err);
            res.json(result);
        });
        
    });

    app.get('/api/cheeses/:id', (req, res) => {
        res.set('Content-Type', 'application/json');

        db.query(`SELECT cheeses.id, cheeses.name, cheeses.country, basis.name AS basis, strengths.name AS strength, consistancys.name AS consistancy, flavours.name AS flavour, colours.name AS colour
                FROM cheeses
                INNER JOIN basis ON cheeses.basis = basis.id
                INNER JOIN strengths ON cheeses.strength = strengths.id
                INNER JOIN consistancys ON cheeses.consistancy = consistancys.id
                INNER JOIN flavours ON cheeses.flavour = flavours.id
                INNER JOIN colours ON cheeses.colour = colours.id
                WHERE cheeses.id = ? OR cheeses.country = ? OR colours.name = ?`, [req.params.id, req.params.id, req.params.id], (err, results) => {
            if (err) res.send(err);

            res.send(results);
        });
        
    });
};