const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lol
")
    .setDescription("My cool command does this!"),
  execute: async (interaction, client) => {
    return interaction.reply("Hey! you used my command!");
  },
};
