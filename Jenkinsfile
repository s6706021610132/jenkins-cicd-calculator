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

        stage('Deploy') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'render-deploy-hook',
                        variable: 'RENDER_DEPLOY_HOOK'
                    )
                ]) {
                    bat 'curl -X POST "%RENDER_DEPLOY_HOOK%"'
                }
            }
        }

    }
}