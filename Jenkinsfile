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
                sh 'node server'
            }            
        }
    }
}
