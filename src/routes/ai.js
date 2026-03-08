const express = require('express')
const router = express.Router()
const geminiService = require('../service/gemini');

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
        res.status(500).json({ 
            status: false, 
            error: error.message 
        });
    }
})

module.exports = router;