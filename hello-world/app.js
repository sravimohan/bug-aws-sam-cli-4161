let response;

exports.lambdaHandler = async (event, context) => {
    try {
        response = {
            'statusCode': 200,
            // work around for cors issue
            // headers: {
            //     "Access-Control-Allow-Origin": "http://localhost:3010",
            // },
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
