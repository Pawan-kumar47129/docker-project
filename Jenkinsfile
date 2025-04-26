pipeline {
    agent any

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Start Services') {
            steps {
                bat 'docker-compose up -d'
            }
        }

        stage('Check Containers') {
            steps {
                bat 'docker ps'
            }
        }
    }

    post {
        always {
            echo 'Stopping containers...'
            bat 'docker-compose down'
        }
    }
}
