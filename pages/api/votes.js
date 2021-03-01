export default function handler(req, res) {
  if (req.method === "POST") {
    let votableId = req.body.votableId;
    if (votableId)
      addVote(votableId);
    res.status(200).json({ text: "Post" });
  } else if (req.method === "GET") {
    res.status(200).json({ votables: votables, totalVotes: totalVotes });
  }
}

let totalVotes = 0;
let votables = []
addVotable("tom")
addVotable("rick")

export function addVote(votableId) {
  let validateVote = true;
  if (validateVote){
    votables.find(x => x.id === votableId).votes++
    totalVotes++;
  }
}

export function addVotable(name){
  let votable = { id: name, name: name, votes: 0 }
  votables.push(votable)
}