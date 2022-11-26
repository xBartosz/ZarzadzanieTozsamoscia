const express = require("express");
var path = require('path');

const app = express();
// Funkcja uwierzytelniania
function authentication(req, res, next) {
	var authheader = req.headers.authorization;
	console.log(req.headers);
// Utworzenie błędu, ustawienie nagłówka i statusu (błąd http 401)
	if (!authheader) {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}
// Przechowanie danych zakodowanych w podanym formacie, podzielenie ich oraz przypisanie zmiennych po indexie
	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];
// Sprawdzenie czy podane dane są poprawne
	if (user == 'student' && pass == 'test') {
        console.log("Success")
		next();
	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// Uwierzytelnienie oraz wyświetlenie strony pod wskazaną ścieżką
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// Włączenie servera na porcie 3000
app.listen((3000), () => {
	console.log("Server is Running");
})