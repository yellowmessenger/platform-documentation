####Description:
Gets paginated multiple contacts data from the given bot.
####Input:
Can be empty / contain pagesize.
####Output:
List of contacts.
####Sample code:
```javascript
  app.getContactsByBotId({ pageSize: 1, pageNumber: 1 }).then((res) => {
    app.sendTextMessage(JSON.stringify(res.count) + ' number of contacts for bot');
  })
```
