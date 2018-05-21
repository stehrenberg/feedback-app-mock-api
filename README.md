# react-questionnaire-api

## Setup
```
npm install
npm start
```

## Dev mode
```
npm run dev
```

## Server Params
- PORT: HTTP Server Port (Default: `8080`)
- VERSION: API Version (Default: `v2`)
```
PORT=1337 VERSION=v4 npm start
```

Version `v4` would mean, that the API url is `http://localhost:8080/api/v4`

## Caveats
Nothing is stored permanently. Once the server is restarted, any stored information is gone. You can alter
the data available on startup by configuring the JSON files in the `config` folder.

## Config Files
|File|Description|
|----|-----------|
|config/projects.json|List of all available projects.|
|config/surveys.json|List of all surveys available on startup|
|config/surveyResults.json|List of all surveys results available on startup|
|config/todos.json|List of all todos available on startup|

## API

### `/api/v2/user/session`

#### PUT
If session_token provided, will return the session_token. Example: Session Token 1337 provided, will return
```
{
    session_token: 1337
}
```
otherwise will return
```
{}
```

#### POST
Use E-Mail adress 'fail' to get 403 response
Any other response will return
```
{
    session_token: 42
}
```

### `/api/v2/feedback_db/_table/customer_projects`
#### GET
Will return the project_ids of the projects defined in `config/projects.json`. Example:
```
{
    resource: [
      {
        project_id: '1'
      },
      {
        project_id: '2'
      }
    ]
}
```

### `/api/v2/feedback_db/_table/projects`
#### GET
Will return the projects defined in `config/projects.json`. Example:
```
{
    resource: [
      {
        project_id: '1',
        project_name: 'Die intolerante Isi'
      },
      {
        project_id: '2',
        project_name: 'Bärenwasser'
      }
    ]
}
```

### `/api/v2/feedback_db/_table/survey`
#### POST
Stores the survey and returns the POST body

#### PATCH
Alters a given survey and returns the patched survey
```
{
    "survey_id":"20180520-a",
    "project_name":"a",
    "created_at":""
}
```

### `/api/v2/feedback_db/_table/survey_[projectName]`
#### GET
Returns all surveys available. On startup these are te ones from `config/surveys.json`. Example:
```
{
    "resource": [
      {
        "survey_id": "20180521-Die intolerante Isi",
        "project_name": "Die intolerante Isi",
        "created_at": ""
      }
    ]
}
```

### `/api/v2/feedback_db/_table/survey_result`
#### POST
Stores the survey result and returns the POST body

#### PATCH
Alters a given set of survey results and returns the patched survey results
```
{  
   "resource":[  
      {  
         "survey_id":"20180520-a",
         "question_id":1,
         "question_answer":6.5
      },
      {  
         "survey_id":"20180520-a",
         "question_id":2,
         "question_answer":8.5
      },
      {  
         "survey_id":"20180520-a",
         "question_id":3,
         "question_answer":"Yes"
      }
   ]
}
```

### `/api/v2/feedback_db/_table/survey_result_[projectName]`
#### GET
Returns all survey results available. On startuop these are the ones from `config/surveyResults.json`. Example:
```
{  
   "resource":[  
        {
          "survey_id": "20180521-Die intolerante Isi",
          "question_id": 1,
          "question_answer": 9
        },
        {
          "survey_id": "20180521-Die intolerante Isi",
          "question_id": 2,
          "question_answer": 6
        },
        {
          "survey_id": "20180521-Die intolerante Isi",
          "question_id": 3,
          "question_answer": "Website"
        }
   ]
}
```

### `/api/v2/feedback_db/_table/todos`
#### POST
Stores the given todo and returns the POST body:
```
{
    "resource": {
        "todo_id": "dd5c0437-3215-45d0-a17e-cbb9f5c6809c",
        "survey_id": "20180521-a",
        "text": "Foo",
        "completed": false
    }
}
```

#### PATCH
Updates the given todos and returns the patched todos
```
{
    "resource": [
        {
            "todo_id": "dd5c0437-3215-45d0-a17e-cbb9f5c6809c",
            "survey_id": "20180521-a",
            "text": "Foo",
            "completed": false
        },
        {
            "todo_id": "9c697aa7-6e5a-490d-94b8-6d7f610f5bbc",
            "survey_id": "20180521-a",
            "text": "Bar",
            "completed":false
        }
    ]
}
```

### `/api/v2/feedback_db/_table/todos/[todoId]`
#### DELETE
Removes the Todo with the given todo. Always returns HTTP Status `200`

### `/api/v2/feedback_db/_table/todos_[projectName]`
#### GET
Returns all the todos available. On startup these are the ones from `config/todos.json`. Example:
```
{
    "resource": [
        {
            "todo_id": "34b881fe-7923-4487-87f9-456adb99a635",
            "survey_id": "20180521-Die intolerante Isi",
            "text": "Create paper prototype example",
            "completed": false
        },
        {
            "todo_id": "6e217b42-815c-4cef-a946-cf816065ba75",
            "survey_id": "20180521-Die intolerante Isi",
            "text": "Invite customer to Daily",
            "completed": true
        }
    ]
}
```