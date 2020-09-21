const express = require( 'express' );
const morgan = require( 'morgan' );

const app = express();

app.use( morgan( 'dev' ) );

app.get( '/', (req, res) => {
    res.send( 'Home route' );
});

app.listen( 8080, () => {
    console.log( 'Servidor corriendo en el puerto 8080' );
});