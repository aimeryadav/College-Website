// server/hash.js
const bcrypt = require("bcrypt");

async function run() {
  const plainPassword = "faculty@01"; // 👉 change this for each user
  const hash = await bcrypt.hash(plainPassword, 10);

  console.log("Plain password:", plainPassword);
  console.log("Hashed password:", hash);
}

run();
