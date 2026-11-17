function bingo(ticket, win) {
  const miniWins = ticket.filter(([str, code]) =>
    [...str].some(char => char.charCodeAt(0) === code)
  ).length;

  return miniWins >= win ? 'Winner!' : 'Loser!';
}