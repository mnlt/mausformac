export default function handler(req, res) {
    const ua = req.headers["user-agent"] || "unknown";
    console.log("VISITOR_UA:", ua);
    res.json({ ua });
  }