import EventEmitter from "./EventEmitter.js";

const emitter = EventEmitter.getEventEmitter();

const onNewMessage = (data) => {
  console.log("Message received", data);
};

const storeToDb = (data) => {
  console.log("Mesage stored to DB", data);
};

const notifyOtherUser = (data) => {
  console.log("Other users notifed", data);
};

//SUBSCRIBE
emitter.on("newMessage", onNewMessage);

emitter.on("newMessage", storeToDb);

emitter.on("newMessage", notifyOtherUser);

//EMIT
emitter.emit("newMessage", { message: "Hello" });
