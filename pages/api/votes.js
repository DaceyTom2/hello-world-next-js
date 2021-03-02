export default function handler(req, res) {
  if (req.method === "POST") {
    let body = JSON.parse(req.body);
    let votableId = body.votableId;
    if (votableId) addVote(votableId);
    res.status(200).json({ votedFor: votableId });
  } else if (req.method === "GET") {
    res.status(200).json({ votables: votables, totalVotes: totalVotes });
  }
}

let totalVotes = 0;
let votables = [];
addVotable("Hulk");
addVotable("Spiderman");
addVotable("Ironman");

export function addVote(votableId) {
  let validateVote = true;
  if (validateVote) {
    votables.find((x) => x.id === votableId).votes++;
    totalVotes++;
  }
}

export function addVotable(name) {
  let votable = { id: name, name: name, votes: 0 };
  votables.push(votable);
}
