This function will start the bot again with respect to app.data.message

## Input Parameters

1. options (Object)

​

## Output Parameters

1. No output

​

## Example

To know more about available options visit [app.options](https://yellowmessenger.atlassian.net/wiki/spaces/docs/pages/532513374/app.options) 

``` 
let options = {
  "minConfidence": 0.8,
  "contextConfidence": 0.9,
  "targetLanguage": "en"
}
app.start(options);
```
