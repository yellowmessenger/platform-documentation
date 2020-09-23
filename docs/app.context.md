
app.context contains entire data about the current journey



``` java
{
    "dataHistory": [
        {
            "data": {
                "message": "login"
            },
            "intent": "login",
            "confidence": 0.908
        },
        {
            "data": {
                "message": "login"
            },
            "intent": "login",
            "confidence": 0.908
        },
        {
            "data": {
                "message": "9876543210"
            },
            "intent": "trains-search",
            "confidence": 0.23
        },
        {
            "data": {
                "message": "9222"
            },
            "intent": "trains-search",
            "confidence": 0.23
        }
    ],
    "history": [
        {
            "intent": "login",
            "complete": true,
            "steps": {
                "mobilenumber": "9603490616",
                "verifyotp": "9222"
            }
        }
    ],
    "intent": "login",
    "journeyName": "Login",
    "journeyId": "5e0daa1fe0f5fc001181f77a",
    "steps": {
        "mobilenumber": "9876543210",
        "verifyotp": "9222"
    },
    "complete": true,
    "journeyDetails": {
        "steps": [
            {
                "id": "5e0daaabe0f5fc001181f77b",
                "slug": "mobilenumber"
            },
            {
                "id": "5e0dbf256debc20010b7f80b",
                "slug": "verifyotp"
            }
        ],
        "_id": "5e0daa1fe0f5fc001181f77a",
        "createdDate": "2020-01-02T08:30:23.460Z",
        "updatedDate": "2020-01-04T10:26:13.053Z",
        "deleted": false,
        "defaultJourney": false,
        "actions": [
            {
                "type": "func",
                "id": 0,
                "func": "loginAction"
            }
        ],
        "stepConditions": [],
        "name": "Login",
        "description": "Login journey",
        "botId": "x1577939877999",
        "categoryType": "Default Category",
        "survey": false,
        "slug": "login",
        "__v": 83,
        "initFunction": "loginInit"
    },
    "invalidCount": 0
}
```

 

 

 

 

## Arrays

### dataHistory

`dataHistory` contains an array of most recent incoming messages,
intent, and their confidences. 

#### example

 

 

``` java
"dataHistory": [
        {
            "data": {
                "message": "login"
            },
            "intent": "login",
            "confidence": 0.908
        },
        .
        .
        .
        {
            "data": {
                "message": "9876543210"
            },
            "intent": "trains-search",
            "confidence": 0.23
        },
        {
            "data": {
                "message": "9222"
            },
            "intent": "trains-search",
            "confidence": 0.23
        }
    ]
```

 

 

------------------------------------------------------------------------

### history

This `history` is an array which contains data about previous intents
like intent name, complete status, step values

#### example

 

 

``` java
"history": [
        {
            "intent": "login",
            "complete": true,
            "steps": {
                "mobilenumber": "9876543210",
                "verifyotp": "9222"
            }
        }
    ]
```

 

 

------------------------------------------------------------------------

## Objects

### steps

-   `app.context.steps` is an object which contains key-value pairs of
    steps and the step values (user inputs) in the format step_name:
    step_value

-   A new step is added into `app.context.steps` only after the
    validation of that step.

-   When it hits an intent, this steps object is initially empty

#### example

 

 

``` java
"steps": {
        "mobilenumber": "9876543210",
        "verifyotp": "9222"
    },
```

 

 

------------------------------------------------------------------------

### journeyDetails

`journeyDetails `is an object which contains all details about the
current journey i.e. all the steps it has, actions, stepConditions,
name, description, slug, intiFunction and etc..

#### example

 

 

``` java
"journeyDetails": {
        "steps": [
            {
                "id": "5e0daaabe0f5fc001181f77b",
                "slug": "mobilenumber"
            },
            {
                "id": "5e0dbf256debc20010b7f80b",
                "slug": "verifyotp"
            }
        ],
        "_id": "5e0daa1fe0f5fc001181f77a",
        "createdDate": "2020-01-02T08:30:23.460Z",
        "updatedDate": "2020-01-04T10:26:13.053Z",
        "deleted": false,
        "defaultJourney": false,
        "actions": [
            {
                "type": "func",
                "id": 0,
                "func": "loginAction"
            }
        ],
        "stepConditions": [],
        "name": "Login",
        "description": "Login journey",
        "botId": "x1577939877999",
        "categoryType": "Default Category",
        "survey": false,
        "slug": "login",
        "__v": 83,
        "initFunction": "loginInit"
    }
```

 

 

------------------------------------------------------------------------

## Properties

### intent \| `string`

Has the value of journey slug

#### example

 

 

``` java
"intent": "login"
```

 

 

------------------------------------------------------------------------

### journeyName \| `string`

Has the value of journey name

#### example

 

 

``` java
"journeyName": "Login"
```

 

 

------------------------------------------------------------------------

### journeyId \| `string`

Has the value of journey id

#### example

 

 

``` java
"journeyId": "5e0daa1fe0f5fc001181f77a"
```

 

 

------------------------------------------------------------------------

### complete \| `boolean`

States whether the journey is complete or not

#### example

 

 

``` java
"complete": true
```

 

 

------------------------------------------------------------------------

### invalidCount \| `int`

Has the value of invalid count i.e. how many times user data validation
fails

#### example

 

 

``` java
"invalidCount": 0
```

 

 
