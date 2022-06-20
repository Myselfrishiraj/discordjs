message.guild.members.cache.forEach(member => { // Looping through each member of the guild.
    // Trying to send a message to the member.
    // This method might fail because of the member's privacy settings, so we're using .catch
    member.send("Hello, this is my message!").catch(e => console.error(`Couldn't DM member ${member.user.tag}`));
});
