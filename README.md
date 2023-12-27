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

Librería aplicada
* [React](https://facebook.github.io/react/)

### Instalar

Este proyecto utiliza Node.js como servidor y como API REST. Usted querrá instalar las dependencias para el proyecto ejecutando el siguiente comando en un terminal o ventana de comandos... 
```
$ npm install 
```

Esto pondrá todas las dependencias del proyecto y las pondrá en una carpeta "node_modules".
#### Configurar base de datos

Usted querrá configurar su para establecer la configuración de su base de datos para que pueda establecer correctamente una conexión de base de datos y guardar sus datos. El objeto de conexión a la base de datos se encuentra en el archivo /utilities/SQL.js. Vea a continuación un ejemplo...

```javascript
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'recipebook',
    multipleStatements: true  
});
```

#### Database

Como ejemplo, en mi servidor he creado la base de datos llamada 'recipebook'. Puedes nombrar tu base de datos como quieras, sólo necesitas asegurarte de establecer el nombre de la base de datos en tu objeto de conexión como se mostró anteriormente.

Lo más sencillo sería importar el archivo recipebook.sql que se encuentra en el directorio "sql" a la base de datos. Este archivo prepobla la base de datos con un solo usuario con el login...

```javascript
username: demo
password: demo
```

#### Ejecucion
Solo debe d eejecutar el siguiente comando:

```
$ node server
```

Esto iniciará el servidor y ejecutará el proyecto en http://localhost:8080. Vaya a esa URL para ver la página de inicio. Desde allí puedes navegar a las diferentes aplicaciones.
## IMPLEMENTACIONES (pipeline)
### Construcion Automatica
Se realizó haciendo uso de npm en pipeline y webpack desde ejecución manual.
```
    stages {
        stage('Checkout') {
            steps {
                 git branch: 'feature_antony', url: 'https://github.com/RRodriguezPumacayo/Ingenieria-Software-2-ProyectoFinal.git'
            }
        }

        stage('Build') {
            steps{
                bat 'npm install'
            }
        }
}
```
### Analisis Estatico de Codigo Fuente
Se hizo uso de SonarLint para la verificación continua y de SonarQube para la integración con pipeline.
```
stage('SonarQube analysis') {
            steps {
                script {
                    withSonarQubeEnv('sonarserver') {
                        // Ejecuta el análisis de SonarQube
                        bat "${SONARQUBE_SCANNER_HOME}/bin/sonar-scanner"
                    }
                }
            }
        }
```
[![image.png](https://i.postimg.cc/nV18yvGp/image.png)](https://postimg.cc/RqqbfJYD)


### Pruebas Unitarias: Jest
```
        stage('Pruebas Unitarias'){
            steps{
                bat 'npm run test:unit'
            }
        }
```
Adicionalmentese requiere configurar la ruta en jest.config.js
```
// jest.config.js
module.exports = {
    testMatch: ["C:/Users/anton/.jenkins/workspace/IS_II/tests/unit/**/*.js"],
    //testMatch: ["<rootDir>/tests/unit/**/*.js"],
};
```
#### Logout en Jenkins
[![image.png](https://i.postimg.cc/W476NbWF/image.png)](https://postimg.cc/B8X1NsG4)
## Sin integracion a Jenkins
### Pruebas Funcionales: Selenium
Para ello se realizó una simple prueba de funcionalidad de apertura y carga automatizada de nuestra página web el cual se encuentra en la carpeta /tests/functional. 
Esta será ejecutada desde comandos:
```
npm run test:functional
```
[![image.png](https://i.postimg.cc/3JSwTMF8/image.png)](https://postimg.cc/TpbxV4sF)
### Pruebas de Performance: JMeter
### Pruebas de Seguridad: OWASP ZAP
[Reporte](./is_ii.pdf)

