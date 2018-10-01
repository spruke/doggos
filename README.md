# doggos
Training materials for O'Reilly

https://docs.google.com/presentation/d/17n5maGxIxH2JLaL6rs6fudaW6rUpJ2ljusN0FqOGQGA/edit?usp=sharing

```aws lambda create-function --function-name "hello-world-2" --runtime nodejs6.10 --role "arn:aws:iam::712800520113:role/service-role/rolethatcanexecutelambdas" --handler "hello-world-advanced.handler"  --description "numerical magic" --timeout 10 --memory-size 128 --zip-file fileb://hello-world-1006.zip```

aws lambda invoke --function-name "hello-world-2" --payload='{"num1": 2, "num2": 2}'

aws lambda invoke --function-name "hello-world-2" --payload='{"num1": 2, "num2": 2}' --log-type Tail /tmp/answer.txt

aws lambda invoke --function-name "hello-world-2" --payload='{"num1": 2, "num2": 2}' --log-type Tail --query=LogResult /tmp/answer.txt | sed -e 's/"//g' | base64 --decode

aws lambda update-function-code --function-name "hello-world-2" --zip-file fileb://hello-world-1006.zip

#set($params = $input.params())

{

"num1": $params.path.num1,

"num2": $params.querystring.num2

}


Model

{

    "$schema": "http://json-schema.org/draft-04/schema#",

"title": "NumberResult",

"type": "object",

"properties": {

"num1": { "type": "integer" },

"num2": { "type": "integer" },

"description": { "type": "string" },

"result": { "type": "integer" }

}

}

IntegrationResult

#set($response = $input.body)

#set($originalParams = $input.params())

{

"num1" : $originalParams.path.num1,

"num2" : $originalParams.querystring.num2,

"description" : "We added two numbers",

"result" : $response

}
