const axios = require('axios');
require('dotenv').config();

async function generateResponse(prompt, model = "gpt-4o-mini", systemInstruction = "") {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: model,
            messages: [
                { role: "system", content: systemInstruction },
                { role: "user", content: prompt }
            ]
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        throw new Error("ChatGPT Service Error: " + error.message);
    }
}

module.exports = { generateResponse };