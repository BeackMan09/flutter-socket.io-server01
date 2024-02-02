const {io} = require('../index');
//Mensajes de sokets
io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('mensaje', payload);

        io.emit( 'mensaje', {admin: 'Nuevo mensaje'});
        
    });
});
