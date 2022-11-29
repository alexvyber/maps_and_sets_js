type Value = ((emoji: string) => string) | string

const emojis: Map<string, Value> = new Map()

emojis.set("🤬", (emoji) => `Go Trunk YuorSelf! ${emoji}`)
emojis.set("🤔", (emoji) => `What did you say? ${emoji}`)
emojis.set("🥰", "Go Trunk YuorSelf!")
emojis.set("🥸", "What did you say?")
emojis.set("🥹", "Can We Talk?")

export const emojiArr =
  "😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😀 😃 😄 😁 😆 😅 😂 🤣 🥲 🥹 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🫣 🤗 🫡 🤔 🫢 🤭 🤫 🤥 😶 😶‍🌫️ 😐 😑 😬 🫠 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 😵‍💫 🫥 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👋 🤚 🖐 ✋ 🖖 👌 🤌 🤏 ✌️ 🤞 🫰 🤟 🤘 🤙 🫵 🫱 🫲 🫳 🫴 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🫶 🙌 👐 🤲 🤝 🙏 ✍️ 💅 🤳 💪 🦾 🦵 🦿 🦶 👣 👂 🦻 👃 🫀 🫁 🧠 🦷 🦴 👀 👁 👅 👄 🫦 💋 🩸".split(
    " "
  )

const doEmojiStuff = () =>
  emojis.forEach((value, key, _map) => {
    typeof value === "function" &&
      emojiArr.map((item) => console.log(value(item + key)))
  })
