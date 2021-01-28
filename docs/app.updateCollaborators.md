This function takes in the ticket ID and the collaborators to be added and updates the ticket. This function keeps the currently assigned agent as collaborator.

Agent usernames can be fetched from `app.getAgents()`. 

Input:
```
app.updateCollaborators({
ticketId: '100032',
collaborators: ['soujanyaagent1yellowmessengercom']
})
```

Output: String containing `Collaborators updated successfully!` or `{"error": "unable to add collaborator"}`
