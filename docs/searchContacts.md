####Description:
This function allows you to search the contacts associated with the bot.
####Input:
Only `primaryEmail`, `primaryPhone`, and `externalId` can be used as search fields from the bot code.
####Output:
An object containing the found contacts and the count: 
```javascript
{contacts: [...list of contacts...], count: 29}
```
####Sample code:
```javascript
  app.searchContacts({ 
    "primaryEmail": "s@y.com",
    "primaryPhone": "phonenum",
    "externalId": "512"
  }).then((res) => {
    app.sendTextMessage(JSON.stringify(res) + ' search contacts');
  })

```
