import { resetVotes } from "../api/votes";

export default function handler(req, res) {
  resetVotes();
  return res.status(200).json({ success: true });
}
