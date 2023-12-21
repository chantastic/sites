package main

import (
	"net/http"
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	return &events.APIGatewayProxyResponse{
		StatusCode:        200,
		Headers:           map[string]string{"Content-Type": "text/plain"},
		MultiValueHeaders: http.Header{"Set-Cookie": []string{"Ding", "Ping"}},
		Body:              "Hello, World",
		IsBase64Encoded:   false,
	}, nil
}

func main() {
	lambda.Start(handler)
}
