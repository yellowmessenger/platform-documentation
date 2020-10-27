This function uploads the media to whatsapp media and media id is returned that can shared multiple times in that whatsapp number linked bot
​

## Input Parameters

1. Object:
    1. url (MEDIAL_URL)
    2. number (WHATSAPP_NUMBER)

 

## Output Parameters

1. Returns the MEDIA ID

## Example

``` 
app.uploadWhatsappMedia({
    url: "MEDIA_LINK",
    number: "WHATSAPP_NUMBER"
}).then(mediaId => {
    app.log(mediaId, "MEDIA ID");
    // output example -> 74a42b31-a35f-40ad-a04d-3554a79b0634
}).catch(error => {
    app.log(error, "ERROR");
});
```
