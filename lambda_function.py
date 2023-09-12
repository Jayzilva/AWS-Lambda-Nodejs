def lambda_handler(event, context):
    # Your code here
    message = "Hello, Lambda!"
    return {
        'statusCode': 200,
        'body': message
    }
