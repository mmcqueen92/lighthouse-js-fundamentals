let facebookProfile = {
  name: "Malcolm",
  friends: 420,
  messages: ["ur pp smol", "get gud", "ggez"],
  postMessage: function(message) {
    this.messages.push(message);
  },
  deleteMessage: function(index) {
    this.messages.splice(index, 1);
  },
  addFriend: function() {
    this.friends++;
  },
  removeFriend: function() {
    this.friends--;
  },
}
facebookProfile.addFriend();
console.log(facebookProfile.friends);
