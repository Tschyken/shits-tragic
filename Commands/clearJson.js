const fs = require("fs"); // this will clear the raid members frm the json file (might not work)
const path = require("path");

module.exports = {
  name: "deleteRaiders",
  description: "Delete all saved raiders",
  execute(message, args, client) {
    const filePath = path.join(__dirname, "../Config/raiders.json");

    fs.writeFile(filePath, "[]", (err) => {
      if (err) {
        console.error("Error deleting raiders:", err);
        message.reply("Error deleting raiders:");

        return;
      }
      console.log("Raiders deleted successfully.");
      message.reply("All saved raiders have been deleted.");
    });
  },
};
