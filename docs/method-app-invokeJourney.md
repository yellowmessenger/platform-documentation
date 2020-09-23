---
id: app.invokeJourney
title: app.invokeJourney
sidebar_label: app.invokeJourney
---

Process to invoke journey directly from the developer section

## Input Parameters
1.The first argument is the name of that journey that we want to invoke.
1.The second argument deals with the entity that is being used.
1.The third argument sets a value to a particular step of that journey.

## Output Parameters

## Examples

```
app.invokeJourney('journeyName', {entityName: 'entityValue'} , {'stepName': value}).then(() => {
    resolve();
 }).catch((e) => {
    //handle error
 })

// This will trigger default intent
app.invokeJourney('intentName')
```

> journeyName and stepName should be slug names i.e, the name mentioned in brackets of journeys and steps.