function genrateTicket(n) {
  let ticket = new Array(n);
  for (let i = 0; i < n; i++) {
    ticket[i] = Math.floor(Math.random() * 10);
  }

  return ticket;
}

function sum(ticket) {
  let sum = 0;
  for (let i = 0; i < ticket.length; i++) {
    sum = sum + ticket[i];
  }
  return sum;
}

export { genrateTicket, sum };
