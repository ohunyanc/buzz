// pages/api/auth/me.js
import jwt from 'jsonwebtoken';

export default function handler(req, res) {
    // Verify JWT token
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { username } = decoded;
        res.status(200).json({ username });
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
}