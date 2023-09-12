###AWS Lambda Function - using arguments

- This AWS Lambda function, when invoked, takes an input event containing "stockUnits" and "stockPrice" values, calculates the sum of these two values, and returns a JSON response with a 200 status code, containing the total as "Total"

- Use Node.js 18.x as Runtime

**Event JSON Test Key-Values**

`{
  "stockUnits": "10",
  "stockPrice": "200"
}`

--------------------------------------------------------------------------------------------------------------------------------------------------

**Output**
`{
  "statusCode": 200,
  "body": "\"Total is 10200\""
}`
