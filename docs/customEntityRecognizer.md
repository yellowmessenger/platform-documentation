app.customEntityRecognizer is used to modify the prediction


## Example Usage
​
```javascript
app.customEntityRecognizer = (prediction) => {
    if (app.data.message == 'entityName1' || app.data.message == 'entityName2') {
        prediction.confidence = 0.9;
        prediction.intent = app.data.message; //setting the entity to behave like an intent for the prediction
    }
    return prediction;
}
```
