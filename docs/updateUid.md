####Description:
Updates only the uids field of a given contact.
####Input:
Array of uids to be added / updated (old `id` is required).
####Output:
Updated uids.
####Sample code:
```javascript
  app.updateUid(contactId, 
[{ uid: "9087654321", channelName: "whatsapp", id }]).then((res) => {
    app.sendTextMessage(JSON.stringify(res) + ' search contacts');
  })
```
