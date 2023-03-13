Aclaraciones desafio clase 40: Factory, DAO y DTO

Para hacer un switch mediante Factory a la persistencia en Memoria:
    (situarnos dentro de la carpeta backend)
    npm run dev mem

Por defecto, Factory switchea a la persistencia en MongoDB Atlas:
    (situarnos dentro de la carpeta backend)
    npm run dev

El proyecto final consta de frontend y backend separados pero conectados entre si.
El frontend actualmente esta conectado al backend y a la base de datos de Mongo Atlas, al cual realiza peticiones GET sobre la coleccion de productos para renderizar las vistas mediante React.js