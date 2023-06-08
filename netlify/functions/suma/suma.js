// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const n1 = 5;
    const n2 = 10;
    const sum = n1 + n2;
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `5 + 2 = ${sum}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
