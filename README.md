# steffens-kode-base
[changelog](./CHANGELOG.md)
## Structure
Server.js i roden, styrer hele projektet. Her er der stier der bliver **required**.
```javascript
require('./config/index')(app);
require('./routes/index')(app);
```
I **routes**-mappen kan der tilføjes flere routes til API'et(Som bliver autogenereret via index-filen).

Mappen **public** er til statiske filer hvor media bliver gemt, hvis der bliver tilføjet til API'et.

## NPM Packages
* **Depended Packages**
* [body-parser](https://www.npmjs.com/package/body-parser)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [ejs](https://www.npmjs.com/package/ejs)
* [express](https://www.npmjs.com/package/express)
* [express-formidable](https://www.npmjs.com/package/express-formidable)
* [express-session](https://www.npmjs.com/package/express-session)
* [morgan](https://www.npmjs.com/package/morgan)
* [mysql](https://www.npmjs.com/package/mysql)
* **Developer packages**
* [debug](https://www.npmjs.com/package/debug)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [run-script-os](https://www.npmjs.com/package/run-script-os)

## Project description
Restful api sleran er et RESTful API, hvor du kan hente oste ud fra en MySQL database.

## Commands

* Installer projektet med: `npm install`
* Kør developer-versionen: `npm run dev`
* Kør projektet: `npm start`

## HTTP-requests

* Hent en liste ud med alle oste: `/api/cheeses`
* Hent en enkelt ost med id(eksempel: id = 1): `/api/cheeses/1`
* Hent en enkelt ost med colour(eksempel: colour = yellow): `/api/cheeses/yellow`
* Hent en enkelt ost med country(eksempel: country = Denmark): `/api/cheeses/denmark`

## Code examples
Opret nemt et route, via filen *main* i mappen routes:
```Javascript
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
```