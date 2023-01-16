CURRENT_PID=$(pgrep -f node)
if [ -n "$CURRENT_PID" ]; then
	echo "현재 실행 중인 앱 종료: $CURRENT_PID"
	kill -15 $CURRENT_PID
fi
echo "실행"
nohup serve -s dist > nohup_react.out &