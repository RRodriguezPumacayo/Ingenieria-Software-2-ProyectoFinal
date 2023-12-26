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
                sh 'node server'
                sh 'nohup node server &'
            }
        }

        stage('Pruebas Unitarias'){
            steps{
                sh 'npm run test'
            }
        }
    }
}