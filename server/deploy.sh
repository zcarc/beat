#!/bin/bash

REPOSITORY=/home/ec2-user/code-deploy/beat-music/app

echo "현재 실행 중인 애플리케이션 PID 확인"

CURRENT_PID=$(pgrep -f jar)

echo "현재 실행 중인 어플리케이션 PID: $CURRENT_PID"

if [ -z "$CURRENT_PID" ]; then
    echo "현재 실행 중인 애플리케이션이 없으므로 종료하지 않습니다."
else
    echo "> kill -15 $CURRENT_PID"
    kill -15 $CURRENT_PID
    sleep 5
fi

echo "새 애플리케이션 배포"

JAR_NAME=$(ls -tr $REPOSITORY/*SNAPSHOT.jar | tail -n 1)

echo "JAR Name: $JAR_NAME"

echo "$JAR_NAME 에 실행권한 추가"

chmod +x $JAR_NAME

echo "$JAR_NAME 실행"

nohup java -jar \
    -Dspring.config.location=classpath:/application.yml,/home/ec2-user/code-deploy/beat-music/spring-application-config/application-real.yml \
    -Dspring.profiles.active=real \
    $JAR_NAME > $REPOSITORY/nohup.out 2>&1 &
