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
                'npm install'
                'node server'
            }            
        }
    }
}
