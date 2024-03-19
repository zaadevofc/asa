const { WA } = require("@zaadevofc/baileys");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyB6Y99wrwD2nKYVHJca9lvmUuEO5JmpUtI");

const wa = new WA({
  authDir: "session",
  authors: [],
  browser: ["Zaieys", "Safari", "1.0"],
  showLog: true,
});

const start = async () => {
  await wa.init(start);

  wa.on("connection", ({ status }) => {
    if (status == "ready") {
      // hello momm
    }
  });

  wa.on("message", async (msg) => {
    if (msg.message.text) {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(msg.message.text);
      const response = await result.response;
      const text = response.text();
      console.log({ text });
      await wa.sendReply(text);
    }
  });
};

// running in main file
start();
