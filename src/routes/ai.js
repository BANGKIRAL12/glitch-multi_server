const express = require('express')
const router = express.Router()
const geminiService = require('../service/gemini');
const chatgptService = require('../service/chatgpt');
const deepseekService = require('../service/deepseek');

router.post('/gemini', async (req, res) => {
    const { prompt, model, systemInstruction } = req.body || {}
    if (!prompt) {
        return res.status(400).json({ 
            status: false, 
            message: "Parameter 'prompt' jangan dikosongkan ya." 
        });
    }

    try {
        const aiResponse = await geminiService.generateResponse(prompt, model, systemInstruction);
        res.json({
            status: true,
            model: model || "gemini-1.5-flash",
            result: aiResponse
        });
    } catch (error) {
        // Ambil status code dari error (jika ada), default ke 500
        const statusCode = error.response?.status || error.status || 500;
        res.status(statusCode).json({ 
            status: false, 
            error: error.response?.data || error.message 
        });
    }
})

router.post('/chatgpt', async (req, res) => {
    const { prompt, model, systemInstruction } = req.body || {}
    if (!prompt) {
        return res.status(400).json({ 
            status: false, 
            message: "Parameter 'prompt' jangan dikosongkan ya." 
        });
    }

    try {
        const aiResponse = await chatgptService.generateResponse(prompt, model, systemInstruction);
        res.json({
            status: true,
            model: model || "gpt-4o-mini",
            result: aiResponse
        });
    } catch (error) {
        const statusCode = error.response?.status || error.status || 500;
        res.status(statusCode).json({ 
            status: false, 
            error: error.response?.data || error.message 
        });
    }
})

router.post('/deepseek', async (req, res) => {
    const { prompt, model, systemInstruction } = req.body || {}
    if (!prompt) {
        return res.status(400).json({ 
            status: false, 
            message: "Parameter 'prompt' jangan dikosongkan ya." 
        });
    }

    try {
        const aiResponse = await deepseekService.generateResponse(prompt, model, systemInstruction);
        res.json({
            status: true,
            model: model || "deepseek-chat",
            result: aiResponse
        });
    } catch (error) {
        const statusCode = error.response?.status || error.status || 500;
        res.status(statusCode).json({ 
            status: false, 
            error: error.response?.data || error.message 
        });
    }
})

module.exports = router;