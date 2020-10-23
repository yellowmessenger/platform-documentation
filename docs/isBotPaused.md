//isBotPaused
## Input Parameters
1. app.bot : bot id
2. app.sender : sender value
3. app.source : source/platform

​
## Output Parameters
1. returns a promise, if the bot is in paused state--> returns " {"paused":true} "
​
## Examples
​
```
 app.isBotPaused(app.bot, app.sender, app.source)
 					.then((data)=>console.log(data,`Pause status of the bot ${app.bot}-${app.source} : `))
 					.catch(E=>console.log(E))


```
​
> This method can be utilised to check if the bot is in pause state. This functionality can be used while pausing an unpausing the bot from connecting 
> agent.
