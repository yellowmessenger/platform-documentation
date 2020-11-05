This methods utilises the reddis memory to save values in the memory of the bot.

## Input Parameters
1. reddix value to be set 
2. value to be set,--> the value can be string or an objetc(or array of objects)
3. expiry time,(optional)
​
## Output Parameters
1. returns an empty promise.
​
## Examples
​```	await app.memory.set("Name","yelloMessenger").catch(e=>console.log(e))```

​
> value will be set in form of string irrespective of the innput type, and hence needs to be parsed back.
> the memory value set is locaised to the current user and hence can't be utilised by some another user.
> it is goto method for use cases like login auth in bots or stoing responses from API/DB to be exchangeed and utiised in varaious journey while keeping 	it exclusive for certain user.
> by default, the value will expire under 30 minutes, untill unless provided.
