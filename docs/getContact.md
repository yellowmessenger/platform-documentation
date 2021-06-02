####Description:
Gets a single contact based on the contact id passed.
####Input:
ContactId.
####Output:
Contact data and the profiles associated with the uids.
####Sample code:
```javascript
app.getContact('01b49c6b-1d3b-4efe-8ea8-16d42fc66bcb').then((res) => {
    app.sendTextMessage(JSON.stringify(res) + ' hi there')
    if (!res.contactId) { app.sendTextMessage('no contact found'); }
  })
```
