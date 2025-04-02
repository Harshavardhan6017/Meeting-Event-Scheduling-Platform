import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
    const token = req.cookies.token;

    console.log("Received token:", token);

    if (!token) {
        return res.status(401).json({ message: "Access Denied: No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded token to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}
