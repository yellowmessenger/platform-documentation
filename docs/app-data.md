---
id: app.data
title: app.data
sidebar_label: app.data
---

Object which holds the current user’s typed message, uploaded file or any event triggered in the app.

If bot receives user's message, the app.data will be
```
{
    "message": "hello!"
}
```

If bot receives an image, the app.data will be
```
{
    "image": "https://cdn.yellowmessenger.com/H79Mp47********.png"
}
```

If bot receives a file, the app.data will be
```
{
    "file": "https://cdn.yellowmessenger.com/Erz22x********.zip"
}
```

If bot receives an event, the app.data will be
```
{
    "event": {
        "code": "event_code",
        "data": "some_value"
    }
}
```

> Data can be anything that is attached to the event by the source which is triggering the event.

