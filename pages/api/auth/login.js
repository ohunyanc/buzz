// pages/api/auth/login.js
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, password } = req.body;

    // Authenticate user (replace with your authentication logic)
    if (email === 'user@example.com' && password === 'password') {
        // Generate JWT token
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: '1h' // Token expiration time
        });
        res.status(200).json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}