// console.log('Hallo kita akan membuat RESTful API');
const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
        // routes: {
        //     cors: {
        //       origin: ['*'],
        //     },
        // },
    })

    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
}

init();