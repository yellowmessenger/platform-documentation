# app.prediction

This object contains all the predicted information from the data entered
by the user


 

 

 Typical
prediction object

 

 

 

 

``` java
{
  core: false,
  intents: {
    weather-report: 0.3,
    trigger1: 0.111,
    trigger2: 0.123,
    get-function-data: 0.381
  },
  language_detected: "en",
  sentiment: "neutral",
  text: "i want to book movie tickets for tomorrow",
  parser: {
    noun_chunks: [
      {
        dep: "nsubj",
        chunk: "i",
        root_text: "want",
        tag: "PRP",
        pos: "PRON"
      },
      {
        dep: "dobj",
        chunk: "movie tickets",
        root_text: "book",
        tag: "NNS",
        pos: "NOUN"
      },
      {
        dep: "pobj",
        chunk: "tomorrow",
        root_text: "for",
        tag: "NN",
        pos: "NOUN"
      }
    ],
    lemmas: [
      "want",
      "book",
      "movie",
      "ticket",
      "tomorrow"
    ],
    sentences: [
      "i want to book movie tickets for tomorrow"
    ],
    tokens: [
      {
        text: "i",
        pos: "PRON",
        lemma: "i"
      },
      {
        text: "want",
        pos: "VERB",
        lemma: "want"
      },
      {
        text: "to",
        pos: "PART",
        lemma: "to"
      },
      {
        text: "book",
        pos: "VERB",
        lemma: "book"
      },
      {
        text: "movie",
        pos: "NOUN",
        lemma: "movie"
      },
      {
        text: "tickets",
        pos: "NOUN",
        lemma: "ticket"
      },
      {
        text: "for",
        pos: "ADP",
        lemma: "for"
      },
      {
        text: "tomorrow",
        pos: "NOUN",
        lemma: "tomorrow"
      }
    ],
    entities: [
      {
        text: "Tomorrow",
        label: "DATE"
      }
    ],
    other_keywords: [
      {
        text: "want",
        pos: "VERB",
        lemma: "want"
      },
      {
        text: "book",
        pos: "VERB",
        lemma: "book"
      },
      {
        text: "movie",
        pos: "NOUN",
        lemma: "movie"
      },
      {
        text: "tickets",
        pos: "NOUN",
        lemma: "ticket"
      },
      {
        text: "tomorrow",
        pos: "NOUN",
        lemma: "tomorrow"
      }
    ],
    parsed_tree: [
      {
        head_pos: 100,
        dep: "nsubj",
        text: "i",
        pos: "PRON",
        head_text: "want",
        children: []
      },
      {
        head_pos: 100,
        dep: "ROOT",
        text: "want",
        pos: "VERB",
        head_text: "want",
        children: [
          "i",
          "book"
        ]
      },
      {
        head_pos: 100,
        dep: "aux",
        text: "to",
        pos: "PART",
        head_text: "book",
        children: []
      },
      {
        head_pos: 100,
        dep: "xcomp",
        text: "book",
        pos: "VERB",
        head_text: "want",
        children: [
          "to",
          "tickets",
          "for"
        ]
      },
      {
        head_pos: 92,
        dep: "compound",
        text: "movie",
        pos: "NOUN",
        head_text: "tickets",
        children: []
      },
      {
        head_pos: 100,
        dep: "dobj",
        text: "tickets",
        pos: "NOUN",
        head_text: "book",
        children: [
          "movie"
        ]
      },
      {
        head_pos: 100,
        dep: "prep",
        text: "for",
        pos: "ADP",
        head_text: "book",
        children: [
          "tomorrow"
        ]
      },
      {
        head_pos: 85,
        dep: "pobj",
        text: "tomorrow",
        pos: "NOUN",
        head_text: "for",
        children: []
      }
    ],
    lemma_list: [
      {
        lemma: "want",
        pos: "VERB",
        text: "want"
      },
      {
        lemma: "book",
        pos: "VERB",
        text: "book"
      },
      {
        lemma: "movie",
        pos: "NOUN",
        text: "movie"
      },
      {
        lemma: "ticket",
        pos: "NOUN",
        text: "tickets"
      },
      {
        lemma: "tomorrow",
        pos: "NOUN",
        text: "tomorrow"
      }
    ]
  },
  confidence: 0.381,
  global_entities: [
    {
      text: "Tomorrow",
      label: "DATE"
    }
  ],
  entities: {
    date: [
      {
        text: "tomorrow",
        value: {
          grain: "day",
          value: "2020-01-30T00:00:00.000Z",
          others: [
            {
              grain: "day",
              value: "2020-01-30T00:00:00.000Z"
            }
          ]
        }
      }
    ]
  },
  synonym_detected: false,
  intent: "get-function-data",
  global_model: {
    confidence: 0.5346315503120422,
    intent: "what"
  },
  response: {}
}
```

 

 

 

 

## Arrays

### global_entities

This array contains global entity objects

#### example

 

 

``` java
global_entities: [
      {
        text: "Tomorrow",
        label: "DATE"
      }
]
```

 

 

------------------------------------------------------------------------

## Objects

### intents

This object contains all the predicted intents (matched intents)

#### example

 

 

``` java
"intents": {
      weather-report: 0.3,
      trigger1: 0.111,
      trigger2: 0.123,
      get-function-data: 0.381
}
```

 

 

------------------------------------------------------------------------

### parser

This object contains parsed data i.e. `noun_chunks`, `lemmas`,
`sentence`, `tokens`, `entities`, `other_keywords`, `parsed_tree`,
`lemma_list`,

#### example

> I *want to book movie tickets for tomorrow*

 

 

 parser
object

 

 

 

 

``` java
parser: {
      noun_chunks: [
        {
          dep: "nsubj",
          chunk: "i",
          root_text: "want",
          tag: "PRP",
          pos: "PRON"
        },
        {
          dep: "dobj",
          chunk: "movie tickets",
          root_text: "book",
          tag: "NNS",
          pos: "NOUN"
        },
        {
          dep: "pobj",
          chunk: "tomorrow",
          root_text: "for",
          tag: "NN",
          pos: "NOUN"
        }
      ],
      lemmas: [
        "want",
        "book",
        "movie",
        "ticket",
        "tomorrow"
      ],
      sentences: [
        "i want to book movie tickets for tomorrow"
      ],
      tokens: [
        {
          text: "i",
          pos: "PRON",
          lemma: "i"
        },
        {
          text: "want",
          pos: "VERB",
          lemma: "want"
        },
        {
          text: "to",
          pos: "PART",
          lemma: "to"
        },
        {
          text: "book",
          pos: "VERB",
          lemma: "book"
        },
        {
          text: "movie",
          pos: "NOUN",
          lemma: "movie"
        },
        {
          text: "tickets",
          pos: "NOUN",
          lemma: "ticket"
        },
        {
          text: "for",
          pos: "ADP",
          lemma: "for"
        },
        {
          text: "tomorrow",
          pos: "NOUN",
          lemma: "tomorrow"
        }
      ],
      entities: [
        {
          text: "Tomorrow",
          label: "DATE"
        }
      ],
      other_keywords: [
        {
          text: "want",
          pos: "VERB",
          lemma: "want"
        },
        {
          text: "book",
          pos: "VERB",
          lemma: "book"
        },
        {
          text: "movie",
          pos: "NOUN",
          lemma: "movie"
        },
        {
          text: "tickets",
          pos: "NOUN",
          lemma: "ticket"
        },
        {
          text: "tomorrow",
          pos: "NOUN",
          lemma: "tomorrow"
        }
      ],
      parsed_tree: [
        {
          head_pos: 100,
          dep: "nsubj",
          text: "i",
          pos: "PRON",
          head_text: "want",
          children: []
        },
        {
          head_pos: 100,
          dep: "ROOT",
          text: "want",
          pos: "VERB",
          head_text: "want",
          children: [
            "i",
            "book"
          ]
        },
        {
          head_pos: 100,
          dep: "aux",
          text: "to",
          pos: "PART",
          head_text: "book",
          children: []
        },
        {
          head_pos: 100,
          dep: "xcomp",
          text: "book",
          pos: "VERB",
          head_text: "want",
          children: [
            "to",
            "tickets",
            "for"
          ]
        },
        {
          head_pos: 92,
          dep: "compound",
          text: "movie",
          pos: "NOUN",
          head_text: "tickets",
          children: []
        },
        {
          head_pos: 100,
          dep: "dobj",
          text: "tickets",
          pos: "NOUN",
          head_text: "book",
          children: [
            "movie"
          ]
        },
        {
          head_pos: 100,
          dep: "prep",
          text: "for",
          pos: "ADP",
          head_text: "book",
          children: [
            "tomorrow"
          ]
        },
        {
          head_pos: 85,
          dep: "pobj",
          text: "tomorrow",
          pos: "NOUN",
          head_text: "for",
          children: []
        }
      ],
      lemma_list: [
        {
          lemma: "want",
          pos: "VERB",
          text: "want"
        },
        {
          lemma: "book",
          pos: "VERB",
          text: "book"
        },
        {
          lemma: "movie",
          pos: "NOUN",
          text: "movie"
        },
        {
          lemma: "ticket",
          pos: "NOUN",
          text: "tickets"
        },
        {
          lemma: "tomorrow",
          pos: "NOUN",
          text: "tomorrow"
        }
      ]
    }
```

 

 

 

 

------------------------------------------------------------------------

### entities

This object contains entities trained for matching and global entities
like date, city, etc..

#### example

 

 

``` java
entities: {
      date: [
        {
          text: "tomorrow",
          value: {
            grain: "day",
            value: "2020-01-30T00:00:00.000Z",
            others: [
              {
                grain: "day",
                value: "2020-01-30T00:00:00.000Z"
              }
            ]
          }
        }
      ]
}
```

 

 

------------------------------------------------------------------------

### global_model

This object contains confidence and intent values

#### example

 

 

``` java
global_model: {
      confidence: 0.5346315503120422,
      intent: "what"
}
```

 

 

------------------------------------------------------------------------

## Properties

### core \| `boolean`

Has the boolean value

#### example

 

 

``` java
"core" : false
```

 

 

------------------------------------------------------------------------

### language_detected \| `string`

Has the value of detected language code

#### example

 

 

``` java
"language_detected": "en"
```

 

 

------------------------------------------------------------------------

### sentiment \| `string`

Has the sentiment value of entered text i.e. `positive`, `negative` and
`neutral`.

#### example

 

 

``` java
"sentiment": "neutral"
```

 

 

------------------------------------------------------------------------

### text \| `string`

Has the value of exact text entered by the user

#### example

 

 

``` java
"text": "i want to book movie tickets for tomorrow"
```

 

 

------------------------------------------------------------------------

### confidence \| `int`

Has the max value of confidence among matched intents

#### example

 

 

``` java
"confidence": 0.381
```

 

 

------------------------------------------------------------------------

### synonym_detected \| `boolean`

Has the boolean value about synonyms detected or not

#### example

 

 

``` java
"synonym_detected": false
```

 

 

------------------------------------------------------------------------

### intent \| `string`

Has the slug name of highest confidence intent matched

#### example

 

 

``` java
"intent": "get-function-data"
```

 

 

------------------------------------------------------------------------
