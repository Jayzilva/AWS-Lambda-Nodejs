export const handler = async (event) => {
    // TODO implement
    
    let count = event["stockUnits"]
    let price = event["stockPrice"]
      
      
    let total =  count + price
      
    const response = {
      statusCode: 200,
      body: JSON.stringify('Total is '+ total),
    };
    return response;
  };
  