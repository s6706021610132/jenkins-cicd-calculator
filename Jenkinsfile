pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                bat 'echo Build completed'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Approval') {
            steps {
                input message: 'Deploy to Production?', ok: 'Deploy'
            }
        }

    }
}