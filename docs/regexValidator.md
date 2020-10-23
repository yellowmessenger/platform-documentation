# app.regexValidator

Validates the given string against the regular expression

## Input Parameters
1. **regex** : Regular experession to validate string
1. **message** : String to be validated
3. **flag** : Flags to be used for regular expression
4. **fallBackMessage** : Fallback message in case of failure


## Output 
1. Function returns a **promise**

## Examples

```
app.regexValidator(
    { regex: '(dart|cart)', message: "bart gun" }).then((res) => {
    app.log(res);
})
```

> it prints an object with success key set to **false**

