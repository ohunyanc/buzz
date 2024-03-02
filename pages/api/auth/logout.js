// pages/api/auth/logout.js
export default function handler(req, res) {
    // Clear JWT token (e.g., remove from cookie or local storage)
    res.status(200).json({ message: 'Logged out successfully' });
}