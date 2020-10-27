//
## Input Parameters
1. journey-slug : the slug name of the journey i.e. Journey name converted to kabab case.(Delete memory becomes delete-memory) (Mandetory),  "String type"
2. entities :any entites that are required by the journey (Optional) , "JSON object"
3. step : set of steps along with there values(optional), "JSON object"

​
## Output Parameters
1. returns null. Trigger the mentioned journey if exist.
​
## Examples
​
```
return app.triggerIntent(delete-memory, {}, {...data.steps});


```
​
> It usually is a good practice to return the above statement hence skipping any code below it.
> When doing a trigger Intent, all the context to that Intent( context.intent information) is reset to null values.