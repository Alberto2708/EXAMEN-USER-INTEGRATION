const OpenAI = require('openai');
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
// openai setup

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
async function initializeNearbyyClient() {
  const module = await import('@nearbyy/core');
  return new module.NearbyyClient({
    API_KEY: process.env.NEARBYY_API_KEY,
  });
}

// https://nearbyy.com/

const nearbyyPromise = initializeNearbyyClient();

async function getContextResponse(req, res) {
  try{
  const { message } = req.body;
  const nearbyy = await nearbyyPromise;
  const context = await nearbyy.semanticSearch({
    limit: 3,
    query: message,
  });

  if (!context.success) {
    console.error(context.error);
    return res.send("I'm sorry, I don't understand.");
  }

  const ctxMsg = context.data.items.map((item) => item.text).join('\n\n');

     const stream = await openai.chat.completions.create({
       messages: [
         {
           role: 'system',
           content:
             "If you are given relevant context, answer the users query with it. If the context does not include the answer, STATE that you don't have enough information to answer the query but still try to answer it without the context.",
         },
         {
           role: 'system',
           content: "RELEVANT CONTEXT TO THE USER'S QUERY:\n " + ctxMsg,
         },
         {
           role: 'user',
           content: message,
         },
       ],
       stream: true,
       model: 'gpt-3.5-turbo',
   });

   let responseText = '';
    for await(const chunk of stream) {
      responseText += chunk.choices[0]?.delta?.content || '';
    }
    return res.json({ response: responseText });
  }catch(error){
    console.error("Error en la comunicacion con la api", error);
    res.status(500).send(error); 
  }

}

module.exports = { getContextResponse };