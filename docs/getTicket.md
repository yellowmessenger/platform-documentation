app.getTicket() is used to a list of agents that have signed up in the 'Support' portal.

## Input Parameters
ticketId
​
## Output Parameters
An Object, with success data/failure message
​
## Example Usage
​
```javascript
app.getTicket({ticketId: "123"}).then((result) => {
    app.log(result, "getTicket result")
}).catch(err => {
	app.log(err, "getTicker error");
});
```