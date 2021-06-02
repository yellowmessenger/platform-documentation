####Description:
This function allows you to update the contacts created within the bot. 
####Input:
Contact data to be updated, contactId is mandatory here.
####Output:
Updated contact data.
####Sample code:
```javascript
    app.updateContact({
      "contactId": "contactId", // required
      "contactGroupId": "system_Panama_Mobility",
      "botId": "x1615975136795",
      "firstName": "Larue",
      "lastName": "D'Amore",
      "primaryEmail": "Marshall_Russel45@hotmail.com",
      "secondaryEmails": [
        "Luna43@gmail.com",
        "Vilma71@gmail.com",
        "Maybell.Schimmel@hotmail.com",
        "Destany.Greenfelder@yahoo.com",
        "Emmie.Schinner42@gmail.com"
      ],
      "profilePicture": "http://placeimg.com/640/480",
      "primaryPhone": "+910656410369",
      "externalId": "96568",
      "companyName": "Hickle, Schumm and Quitzon",
      "secondaryCompanies": [
        "Mosciski, Lindgren and Baumbach"
      ],
      "lastContactedAt": "2020-08-18T22:57:57.892Z",
      "archived": false,
      "deleted": true,
      "verified": false,
      "contactRole": "Palladium_parse_Unbranded",
      "blocked": true,
      "city": "North Hildegardmouth",
      "country": "United Kingdom",
      "region": "South Dakota",
      "facebookId": "a61py97qny",
      "twitterId": "j82rxt2jq9",
      "linkedInUrl": "https://nathan.name",
      "device": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 5.2; Trident/4.1; .NET CLR 4.7.89114.8)",
      "uids": [
        {
          "uid": "9087654321",
          "channelName": "whatsapp",
        }
      ],
      "tags": [
        {
          "tagName": "CREATIVE",
        }
      ],
      "notes": [
        {
          "text": "Debitis ut vitae qui debitis distinctio nisi dolores nobis explicabo.",
          "createdBy": "ROI",
        },
        {
          "text": "Reprehenderit cum perspiciatis voluptatem.",
          "createdBy": "virtual",
        },
      ],
      "activityLogs": [
        {
          "activityTime": 1617610200411,
          "eventType": "IB",
          "eventDescription": "Dolor autem facere sed est error voluptatem.",
          "activityTitle": "Velit sequi temporibus impedit in quos voluptas laudantium.",
          "contactId": "40595",
          "externalId": "59948"
        },
        {
          "activityTime": 1617610200412,
          "eventType": "Supervisor",
          "eventDescription": "Fugit voluptates autem quod itaque quis vel.",
          "activityTitle": "Atque illo et vero ipsum et.",
          "contactId": "7244",
          "externalId": "26277"
        }
      ]
    }).then((res) => {
      app.sendTextMessage(JSON.stringify(res) + ' updated contact');
    })
```
