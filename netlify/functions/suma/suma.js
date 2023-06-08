// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const n1 = parseInt(event.queryStringParameters.n1) || 0;
    const n2 = parseInt(event.queryStringParameters.n2) || 0;
    const sum = n1 + n2;
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${sum}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
