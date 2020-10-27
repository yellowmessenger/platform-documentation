This function will send message/data to the specified bot
​

## Input Parameters

1. botId
2. data

​

## Output Parameters

1. No Output

(It will directly shows the data sent by the bot)

## Example

``` 
app.ask("x1602139738821", {
        "message": "testing"
    }).then((data) => {
        
    }).catch(error => {
        // do somthing on fail
    })
```

## Output Images

![Sample Code](./ask/01.png)

![Output from target bot](./ask/02.png)

### target bot

![TARGET BOT LOG](./ask/03.png)

![TARGET BOT CODE](./ask/04.png)