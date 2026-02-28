const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
res.json({
  status: "ok",
  message: "Sportsbook API is running"
});
});

app.get("/game", (req, res) => {
  const home = req.query.home || "Unknown Home";
  const away = req.query.away || "Unknown Away";

  let odds;

  if (home === "Lakers") {
    odds = [
      { book: "DraftKings", spread: -120 },
      { book: "FanDuel", spread: -115 },
      { book: "BetMGM", spread: -125 }
    ];
  } else if (home === "Bulls") {
    odds = [
      { book: "DraftKings", spread: -105 },
      { book: "FanDuel", spread: -110 },
      { book: "BetMGM", spread: -108 }
    ];
  } else {
    odds = [
      { book: "DraftKings", spread: -110 },
      { book: "FanDuel", spread: -110 },
      { book: "BetMGM", spread: -110 }
    ];
  }

  res.json({
    homeTeam: home,
    awayTeam: away,
    odds: odds
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});