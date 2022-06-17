const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("chr")
    .setDescription("My cool command does this!"),
  execute: async (interaction, client) => {
    return interaction.reply("Hey! you used my command!");
  },
};
