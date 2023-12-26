pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Paso para clonar el repositorio
                checkout scm
            }
        }

        stage('Build') {
            steps{
                sh 'npm install'
            }
        }

        // Ejecutar el programa y que siga en segundo plano
        stage('Start Application'){
            steps{
                sh 'nohup node server &'

                // Espera un breve periodo para que el servidor tenga tiempo de iniciar
                sleep time: 10, unit: 'SECONDS'
            }
        }

        stage('Pruebas Unitarias'){
            steps{
                sh 'npm run test:unit'
            }
        }
    }
}