Aclaraciones Entrega Final:
    Hola profe. El proyecto consta de dos aplicaciones desplegadas con servidores distintos, que estan interconectadas entre sí. Por un lado el backend, y por otro el frontend (desarrollado con React.js), que consume al backend como si este último fuera la API REST (modelo data on wire). El backend gestiona y utiliza una base de datos no relacional desarrollada en MongoDB, haciendo uso de su característica remota de Mongo Atlas. A lo largo de la aplicación se utiliza como ORM a Mongoose para escribir código de base de datos más fácilmente.

    Instalación:
        git clone https://github.com/bpontiz/ArquitecturaAPI-BrunoPontiz.git

    Uso:
        Entrar a la carpeta "backend"
            cd ../backend

        Instalar las dependencias
            npm install

        Luego con el siguiente comando se inicializa el servidor backend:
            npm run dev
    
    Una vez hecho esto, puede inicializarse el servidor de frontend desde una carpeta separada.
    Instalación:
        git clone https://github.com/bpontiz/Warsen-BrunoPontiz.git

    Uso:
        Instalamos las dependencias
            npm install

        Luego desplegamos la aplicación con el comando:
            npm start

    Recomendación:
        Registrarse en la aplicación de frontend Warsen utilizando su correo electrónico verdadero (luego de efectuar una compra la app le enviará un correo que usted puede chequear). Luego iniciar sesión y elegir sus camisetas de fútbol favoritas. Posteriormente puede realizar la compra (no posee funcionalidad de pago ni pide datos de entidades bancarias), dado que esto es aún simulado.

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