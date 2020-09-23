---
id: virusScanningAPI
title: virusScanningAPI
sidebar_label: virusScanningAPI
---

## Input Parameters
1. ( Data ) - URL / base64 data

1. ( Type ) - (to determine the data being passed) url or base64

## Output Parameters
Returns True if file has a virus and False otherwise

## Examples
```
let link = 'https://cdn.yellowmessenger.com/oFzJ8vzkKYmi1591793438536.pdf';
app.checkVirus(link, 'url').then((hasVirus)=>{
	console.log(hasVirus, "hasVirus");
}).catch(error=>{
	console.log(error, "Error")
})
```

```
let base64Data = 'dasdkjasdas=';
app.checkVirus(base64Data, 'base64').then((hasVirus)=>{
	console.log(hasVirus, "hasVirus");
}).catch(error=>{
	console.log(error, "Error")
})
```
> Possible Errors
File Length has exceeded 5MB

Only types of URL and BASE64 are supported

Not able to create a buffer from the URL/base64

Link/Base64 data is required

type is required

