pipeline {
    agent any

    tools {nodejs "Default"}

    stages {
        stage('install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('build'){
            steps{
                sh 'npm run build'
            }
        }
        stage('clean s3'){
            steps{
                sh 'aws s3 rm s3://danrey-project1 --recursive'
            }
        }
        stage('deploy to s3'){
            steps{
                sh 'aws s3 cp --recursive /home/ec2-user/.jenkins/workspace/frontend-pipeline/build/ s3://danrey-project1/'
            }
        }
    }
}

