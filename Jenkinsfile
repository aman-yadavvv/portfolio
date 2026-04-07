pipeline{
    agent {label 'Agent' }
    
     environment {
        SCANNER_HOME = tool 'sonar'
    }
     
    stages{
        stage(" git clone "){
            steps{
                git url:"https://github.com/aman-yadavvv/portfolio.git" , branch:"main"
            }
        }
        stage( " scan gitleaks"){
            steps{
                catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                    sh 'gitleaks detect -s . -c .gitleaks.toml -r gitleaks-report.txt || true'
                }
            }
        }
         stage(" trivy test"){
            steps{
               sh 'trivy fs . --format-table -o trivy-result.txt || true'
            }
        }
         stage(" sonarqube "){
            steps {
                withSonarQubeEnv('sonar') {
                    sh '''
                    $SCANNER_HOME/bin/sonar-scanner \
                      -Dsonar.projectName=BG \
                      -Dsonar.projectKey=BG \
                      -Dsonar.python.version=3 \
                      -Dsonar.exclusions=**/*.html,**/*.mp4,**/media/**
                    '''
                }
            }
        }
         stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: false, credentialsId: 'sonar'
                }
            }
        }
         stage("docker build"){
            steps{
                sh ' docker build -t portfolioo . '
            }
        }
         stage(" trivy image test "){
            steps{
                sh 'trivy image portfolioo --format table -o trivy-report-image.html || true'
            }
        }
         stage('Push Image to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-login',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh '''
                    docker login -u ${USER} -p ${PASS}
                    docker tag portfolioo ${USER}/portfolioo:latest
                    docker push ${USER}/portfolioo:latest
                    '''
                }
            }
        }
        stage("docker run image"){
            steps{
                sh ' docker container prune -f || true '
                sh ' docker run -d -p 80:80 portfolioo'
            }
        }
    }
}
