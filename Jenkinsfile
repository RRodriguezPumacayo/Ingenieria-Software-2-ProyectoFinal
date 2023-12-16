pipeline {
    agent any

    tools {nodejs "nodejs"}

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
