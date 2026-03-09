require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


/**
 * @param {string} prompt - Pesan dari user
 * @param {string} modelName - Nama model (default: gemini-1.5-flash)
 * @param {string} systemInstruction - Peran/aturan untuk AI
 */
async function generateResponse(prompt, modelName = "gemini-1.5-flash", systemInstruction = "") {
    try {
        const model = genAI.getGenerativeModel({ 
            model: modelName,
            systemInstruction: systemInstruction // Memberikan instruksi peran di sini
        });
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini Service Error:", error);
        throw error;
    }
}

module.exports = { generateResponse };