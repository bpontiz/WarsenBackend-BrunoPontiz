Aclaraciones desafio clase 41: API Testing

    Sobre comandos para ejecutar distintos modulos de la app
            Deploy del server:
                "dev": "nodemon src/server.js",
            Test con Mocha:
                "test": "mocha src/tests/apiProducts.test.js",
            Test con Axios:s
                "axiosTest": "node src/tests/axiosClient.js"

    Para el testeo de la API REST de Products con Axios, ejecutar los siguientes comandos:
    (sobre la ruta EcommerceBack-BrunoPontiz\backend)
        method GET:
            npm run axiosTest get
        method POST:
            npm run axiosTest post
        method DELETE:
            npm run axiosTest delete
        method PUT:
            npm run axiosTest put

    Para el testeo de la API REST de Products con Mocha, ejecutar el siguiente comando:
    (sobre la ruta EcommerceBack-BrunoPontiz\backend)
        npm run test

Aclaraciones desafio clase 40: Factory, DAO y DTO

    Para hacer un switch mediante Factory a la persistencia en Memoria:
        (situarnos dentro de la carpeta backend)
        npm run dev mem

    Por defecto, Factory switchea a la persistencia en MongoDB Atlas:
        (situarnos dentro de la carpeta backend)
        npm run dev

    El proyecto final consta de frontend y backend separados pero conectados entre si.
    El frontend actualmente esta conectado al backend y a la base de datos de Mongo Atlas, al cual realiza peticiones GET sobre la coleccion de productos para renderizar las vistas mediante React.js