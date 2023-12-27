pipeline {
    agent any
     environment {
        SONARQUBE_SCANNER_HOME = tool 'sonarscanner'
    }

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
         // Ejecutar el programa y que siga en segundo plano
        stage('Start Application') {
            steps {
                bat 'start /B node server'
                // Espera un breve periodo para que el servidor tenga tiempo de iniciar
                 sleep time: 10, unit: 'SECONDS'
            }
        }
        stage('Pruebas Unitarias'){
            steps{
                bat 'npm run test:unit'
            }
        }
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

        // stage('ZAP Scan') {
        //     steps {
        //         script {
        //             // Iniciar ZAP
        //             zapAttack(
        //                 host: 'localhost',
        //                 port: 8080,
        //                 zapHome: 'C:\\Program Files\\ZAP',
        //                 allowedHosts: ['http://localhost:8080']
        //             )

        //             // Realizar otras acciones después del escaneo, si es necesario

        //             // Detener ZAP
        //             zapShutdown()
        //         }
        //     }
        // }
    }
    post {
        always {
            script {
                archiveZap(failAllAlerts: 10, failHighAlerts: 0, failMediumAlerts: 0, failLowAlerts: 0, falsePositivesFilePath: "zapFalsePositives.json")
            }
        }
    }
}