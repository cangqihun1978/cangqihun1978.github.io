export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    try {
        const body = req.body;
        body.model = 'deepseek-chat';

        const deepseekRes = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': req.headers.authorization
            },
            body: JSON.stringify(body)
        });

        const data = await deepseekRes.json();
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(deepseekRes.status).json(data);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
