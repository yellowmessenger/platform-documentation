####Description:
This function allows you to create a contact from the bot code.
####Input:
Generic contact data, sample data for all fields below.
####Output:
An object containing all the contact data and the profiles generated from the uids passed in. If there is no uid passed, a `yellowmessenger` uid/profile will be created.
####Sample code:
```javascript
app.createContact({
      "contactGroupId": "Loan",
      "botId": "x2138660253848", // required
      "firstName": "Wayne",
      "lastName": "Runolfsdottir",
      "primaryEmail": "Crystel65@gmail.com", // unique, required
      "secondaryEmails": [
        "Bernadine.Considine27@gmail.com",
        "Anita39@gmail.com"
      ],
      "profilePicture": "http://placeimg.com/640/480",
      "primaryPhone": "+916952796185",
      "externalId": "70025", // unique
      "companyName": "Von LLC",
      "secondaryCompanies": [
        "Hayes - Hammes",
        "Gerhold Inc",
        "Armstrong Group"
      ],
      "lastContactedAt": "2020-06-28T11:56:23.852Z",
      "archived": true,
      "deleted": false,
      "verified": false,
      "contactRole": "multi-byte",
      "blocked": true,
      "city": "Kilbackshire",
      "country": "Egypt",
      "region": "Maine",
      "facebookId": "co34wkx4os",
      "twitterId": "2puuczf5gv",
      "linkedInUrl": "https://devante.org",
      "device": "Mozilla/5.0 (Windows; U; Windows NT 6.2) AppleWebKit/533.1.2 (KHTML, like Gecko) Chrome/19.0.888.0 Safari/533.1.2",
      "uids": [
        {
          "uid": "mv910r42hf",
          "channelName": "Handcrafted",
        },
        {
          "uid": "cnn748w2k4",
          "channelName": "interfaces",
        }
      ],
      "tags": [
        {
          "tagName": "ADMINISTRATOR",
        },
        {
          "tagName": "WITHDRAWAL",
        },
        {
          "tagName": "RIEL",
        }
      ],
      "notes": [
        {
          "text": "Beatae laborum molestiae delectus illo placeat.",
          "createdBy": "panel",
        },
        {
          "text": "Nihil voluptatem ullam ipsum omnis laudantium nam error perspiciatis quia.",
          "createdBy": "Hampshire",
        }
      ],
      "activityLogs": [
        {
          "activityTime": 1617610200361,
          "eventType": "infomediaries",
          "eventDescription": "Neque saepe commodi optio animi nemo.",
          "activityTitle": "Ut tenetur illo facilis qui provident autem sit voluptas ullam.",
          "externalId": "51843"
        },
        {
          "activityTime": 1617610200362,
          "eventType": "deposit",
          "eventDescription": "Architecto rerum et cupiditate ea.",
          "activityTitle": "Dolor deleniti qui impedit.",
          "externalId": "18045"
        },
        {
          "activityTime": 1617610200362,
          "eventType": "Loan",
          "eventDescription": "Autem dolorem occaecati ab consequatur ducimus error quia qui.",
          "activityTitle": "Reprehenderit repudiandae reprehenderit exercitationem minima inventore cum officiis maxime est.",
          "externalId": "79480"
        },
        {
          "activityTime": 1617610200362,
          "eventType": "AGP",
          "eventDescription": "Id pariatur eum voluptatum voluptas porro labore itaque iure officia.",
          "activityTitle": "Qui sint ratione est ut magni consequatur ab sit.",
          "externalId": "66562"
        }
      ]
    }).then((res) => {
        app.log(res, "Create contact");
        app.sendTextMessage('created');
      }).catch(e => {
        app.log(e, "error in Create contact");
        app.sendTextMessage("error");
      })
```
