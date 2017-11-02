# doggos
Training materials for O'Reilly

aws lambda create-function --function-name "hello-world-2" --runtime nodejs6.10 --role "arn:aws:iam::712800520113:role/service-role/rolethatcanexecutelambdas" --handler "hello-world-advanced.handler"  --description "numerical magic" --timeout 10 --memory-size 128 --zip-file fileb://hello-world-1006.zip

aws lambda invoke --function-name "hello-world-2" --payload='{"num1": 2, "num2": 2}'

aws lambda invoke --function-name "hello-world-2" --payload='{"num1": 2, "num2": 2}' --log-type Tail /tmp/answer.txt

aws lambda update-function-code --function-name "hello-world-2" --zip-file fileb://hello-world-1006.zip
