/**
 * WHY?
 * Attaching callbacks everywhere could be blocker if there are multiple things to do
 * Whenever it makes sense for code to SUBSCRIBE to something rather than get a callback from something.
 */

async function insertTicketIntoDatabase(ticket, callback) {
  // operation failed:
  callback(err);
}
function addTicket(ticket, callback) {
  insertTicketIntoDatabase(ticket, function (err) {
    if (err) return handleError(err);
    callback();
  });
}

const cb = () => {
  // do a sanity
  // send response etc
};

addTicket("ticketId", cb);
