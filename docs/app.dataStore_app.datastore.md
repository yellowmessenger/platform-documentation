# app.dataStore \| app.datastore

This `app.dataStore` or `app.datastore` object provides methods to
insert, search, delete and update MongoDB database. `search` method is a
wrapper over full-text search engine
[elasticsearch](https://www.elastic.co/).


# Methods

## Insert

Insert method inserts a given record (document in MongoDB terminology)
into the table.

### Syntax

 

 

``` js
app.dataStore.insert(document) // document => { table: collection, record: recordObject }
```

 

 

### Parameters

#### document \| `object`

#### table \| `string`

A string representing the name of the record in the table (collections
in MongoDB).

#### record \| `object`

An object representing the data to be inserted into the table.

### Return Value

returns a Promise which resolves an `object` representing the record
information that is just inserted.

### Example

 

 

``` java
app.dataStore.insert({ table, record }
    .then(result => result)
```

 

 

------------------------------------------------------------------------

# Search

Search method is a wrapper over [elasticsearch](https://www.elastic.co/)
which is used to query the database (MongoDB).

### Syntax

 

 

``` js
app.dataStore.search(options)
```

 

 

### Parameters

#### options \| `object`

#### table \| `string`

A string representing the name of the record in the table (collections
in MongoDB).

**record \|** `object`

An object representing the elasticsearch search syntax to query the
database.

### Return Value

returns a Promise which resolves an `object` representing the meta of
search result and list of resultant records.

### Example

 

 

``` java
app.dataStore.search({
        table: table,
        body: {
            "query": {
                "term": {
                    [column]: query
                }
            }
        }
    }).then(result => result)
```

 

 

------------------------------------------------------------------------

# Update

update method updates the given record (document in MongoDB terminology)
in the table.

### Syntax

 

 

``` js
app.dataStore.update(options)
```

 

 

### Parameters

#### options \| `object`

#### table \| `string`

A string representing the name of the record in the table (collections
in MongoDB).

#### record \| `object`

An object representing record data to be updated in the table.

### Return Value

returns a Promise which resolves an `object` representing the record
information that is just updated.

### Example

 

 

``` java
app.dataStore.update({ table, record })
        .then(result => result)
```

 

Remember, To update the record in the table, we need to pass `_id` of
the record ( In MongoDB, Every document has a unique ID). So, to get the
\_id of the record, we need to do perform a search on database and grab
the \_id of the record from the result.

 

 
