Libro de Recetas
==========

Una página web construida con JavaScript, MySQL y [Node.js](http://www.nodejs.org) (como servidor y REST API). Este proyecto tiene dos objetivos.
1. El primero idear algunos métodos posibles para abordar algunos de los componentes más complicados que se utilizan al crear aplicaciones del lado del cliente (por ejemplo, autenticación de usuario, autorización, inicio y cierre de sesión, manejo de errores, notificaciones y datos relacionales).
2. El segundo es construir un pipeline de CI/CD para desarrollar o evolucionar nuestra aplicación web de software con las siguientes características:
    * Interfaz gráfica de usuario (cualquier lenguaje de programación, biblioteca o framework);
    * Base de datos (MySql, SQLite, MongoDB, Neo4J u otro).
    * Patrones/Estilos de arquitectura.
    * Prácticas de desarrollo de software:
        - Domain-driven Design (DDD)
        - Estilos y Convenciones de codificación,
        - Codificación Limpia (Clean Code)
        - Principios SOLID.

### Integrantes
   
   * Ricardo Alexander Rodriguez Pumacayo
   * Antony Olmer Aroni Jarata

### Configuración

Este proyecto usa Node.js como servidor y REST API. Para instalar las dependencias del proyecto, ejecutar el siguiente comando en la terminal.

```
$ npm install 
```

Esto eliminará todas las dependencias del proyecto y las colocará en una carpeta "node_modules".

#### Archivos de configuración

Querrá configurar su configuración de base de datos para que pueda establecer correctamente una conexión a la base de datos y guardar sus datos. El objeto de conexión de la base de datos está en el archivo /utilities/SQL.js. Vea a continuación un ejemplo:

```javascript
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'recipebook',
    multipleStatements: true  
});
```

Puede cambiar cualquier propiedad segun tu entorno. A continuación se crear la base de datos.

#### Configuración Base de Datos

La más facil que puede hacer es importar el archivo recipebook.sql encontrado en el directorio "sql" a la base de datos. Este archivo rellena previamente la base de datos con un único usuario con el inicio de sesión...

```javascript
username: demo
password: demo
```

Así que puedes iniciar sesión con esas credenciales de inmediato. También hay un par de recetas de muestra creadas con este usuario.

Pero si desea comenzar desde cero o hacer las cosas manualmente, el siguiente SQL debería hacerlo por usted.

Recipes Table:

```sql
CREATE TABLE `recipes` (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) NOT NULL,
    name VARCHAR(255) COLLATE utf8_general_ci NOT NULL,
    UNIQUE KEY id (id)
)
```

Ingredients Table:

```sql
CREATE TABLE `ingredients` (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT(11) NOT NULL,
    name VARCHAR(255) COLLATE utf8_general_ci NOT NULL,
    UNIQUE KEY id (id)
)
```

Directions Table:

```sql
CREATE TABLE `directions` (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT(11) NOT NULL,
    name TEXT COLLATE utf8_general_ci NOT NULL,
    UNIQUE KEY id (id)
)
```

Users Table:

```sql
CREATE TABLE `users` (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) COLLATE utf8_general_ci NOT NULL,
    password VARCHAR(255) COLLATE utf8_general_ci NOT NULL,
    avatar VARCHAR(255) COLLATE utf8_general_ci NOT NULL,
    UNIQUE KEY id (id)
)
```

Para crear una cuenta de usuario, vaya a la sección "Registrarse" cuando ejecute la aplicación. Busque un enlace en la esquina superior derecha.

#### Correr el Proyecto

Para ejecutar el servidor/proyecto simplemente ejecute lo siguiente en una terminal/ventana de comandos.

```
$ node server
```

Esto iniciará el servidor y ejecutará el proyecto en http://localhost:8080. Vaya a esa URL para ver la página de inicio. Desde allí podrás navegar a las diferentes aplicaciones.

### Pipeline

Nuestro pipeline en Jenkins Presenta las siguientes etapas.
a) Construcción Automática
