This function transfers the ticket to the given agent or given group. If groupcode is passed then agent id is ignored.

Input:

```
app.transferTicket({
        ticketId: '100134',
        agentId: 'soujanyaagent1yellowmessengercom',
        customFields: {},
        keepCollaborator: true / false // whether agent who transfers should be kept as collaborator
        groupCode: 'test_grp'
    })
```

Output:

String containing `Ticket Assigned` or an error object.
