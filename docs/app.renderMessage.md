
Refer [this
link](https://yellowmessenger.atlassian.net/wiki/spaces/docs/pages/90275883/Language+Translation) for
more info.

Process to get text message from code.

## Use case

There are lot of instances in functions where bot needs to send
responses through code. To get the text message from these codes we use
renderMessage in our function.

## Format of the function

    app.renderMessage('code-goes-here',{input parameters as object},'default message')

The first argument is the code that we add in the localization tab.  
The second argument deals with the value you want to pass.  
The third argument sets a fall back message which gets displayed if it
is unable to generate the text message.

## Usage of the function

    app.sendTexMessage(app.renderMessage("id-number"),{id : id_number},"Here are the details for your login id: {{id_no}}")
