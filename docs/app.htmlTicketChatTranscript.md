This function returns the chat transcript in HTML form for use by the bot.

Input: Ticket ID and the timezone.

```
app.htmlTicketChatTranscript({ ticketId: '100025', timezone: 'UTC'}).then((res) => {
    app.log(res, 'html data');
})
```
Output:
The HTML data for the chat transcript.
