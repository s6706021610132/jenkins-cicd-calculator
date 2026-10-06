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

    }
}