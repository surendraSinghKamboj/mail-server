const SMTPServer = require("smtp-server").SMTPServer;

const server = new SMTPServer({
  onConnect(session, cb) {
    console.log(`----------- onConnect ${session.id}`);
    cb();
  },
  onMailFrom(address, session, cb) {
    console.log(`----------- onMailFrom ${address.address} ${session.id}`);
    cb();
  },

  onRcptTo(address, session, cb) {
    console.log(`----------- onRcptTo ${address.address} ${session.id}`);
    cb();
  },

  onData(stream, session, cb) {
    stream.on("data", (data) => console.log(`------- onData ${data.toString}`));
    stream.on("end", cb);
  },
});

const PORT = 2525;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`SMTP server is listening on port ${PORT}`);
});