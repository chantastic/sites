package main

import (
  "github.com/aws/aws-lambda-go/events"
  "github.com/aws/aws-lambda-go/lambda"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
  return &events.APIGatewayProxyResponse{
	StatusCode: 200,
	Headers:           map[string]string{"Content-Type": "text/plain"},
	MultiValueHeaders: http.Header{"Set-Cookie": {"Ding", "Ping"}},
	Body:       "Hello, World",
	IsBase64Encoded:   false,
  }, nil
  
}

func main() {
  lambda.Start(handler)
}
