export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ text: "Post" });
  } else if (req.method === "GET") {
    res.status(200).json({ text: "Get" });
  }
}
