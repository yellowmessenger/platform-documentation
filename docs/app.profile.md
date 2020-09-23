
This object contains all about the user data i.e. `userAgent`, `payload`
(anything passed using ym.payload)

The Update Profile functionality is used when we have to add some
parameters to user profile

Most of the information is stored in `app.profile` is

-   Ip

-   Timezone, country_code, latitude, longitude, region, country, city,

-   Device type, os, browser

-   UserId to uniquely identify the user

-   UTM parameters
    ([ https://en.wikipedia.org/wiki/UTM_parameters ](https://en.wikipedia.org/wiki/UTM_parameters))

-   Name: Anonymous unique name

 


Typical `app.profile` object looks like this

 

 

``` java
{
    "userAgent": {
        "browser": "Chrome",
        "os": "OS X",
        "platform": "Apple Mac",
        "source": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
        "device": "Desktop"
    },
    "city": "Bangalore",
    "country": "India",
    "region": "Karnataka",
    "longitude": "77.603290",
    "latitude": "12.976230",
    "end_ip": 736141311,
    "value": "560018",
    "country_code": "IN",
    "start_ip": 736140288,
    "timezone": "+05:30",
    "ip": "43.224.157.81",
    "userId": null,
    "userToken": null,
    "name": "Nervous Destruction",
    "utm_source": null,
    "utm_campaign": null,
    "utm_medium": null,
    "utm_term": null,
    "utm_content": null,
}
```

 

 

------------------------------------------------------------------------

## Objects

### userAgent

This object contains about the user browser, device, platform, os, and
source

#### example

 

 

``` java
"userAgent": {
        "browser": "Chrome",
        "os": "OS X",
        "platform": "Apple Mac",
        "source": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
        "device": "Desktop"
},
```

 

 

------------------------------------------------------------------------

## Properties

### city \| `string`

Has the value user city name

#### example

 

 

``` java
"city": "Bangalore"
```

 

 

------------------------------------------------------------------------

### country\| `string`

Has the value of user country name

#### example

 

 

``` java
"country": "India"
```

 

 

------------------------------------------------------------------------

## More Properties

It has the following properties along with the above

-   `region`

-   `longitude`

-   `latitude`

-   `end_ip`

-   `value`

-   `country_code`

-   `start_ip`

-   `timezone`

-   `ip`

-   `userId`

-   `userToken`

-   `name` (Anonymous unique name )

-   `utm_source`

-   `utm_campaign`

-   `utm_medium`

-   `utm_content`

-   `utm_term`

## Store Values

We can also store values in `app.profile` object as follows:

 

 

``` js
app.profile.variable_name = varible_value;
//example app.profile.mobileNum = '9876543210';
app.updateProfile(); //call this method to update profile object
```

 

 
