# API

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
- PORT: HTTP Server Port (Default: 8080)
- VERSION: API Version (Default: v2)
```
PORT=1337 VERSION=v4 npm start
```

## API

### /api/v2/user/session

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

### /api/v2/feedback_db/_table/customer_projects
#### GET
Always returns
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

### /api/v2/feedback_db/_table/projects
#### GET
Always returns
```
{
    resource: [
      {
        project_id: '1',
        project_name: 'Brontales Projekt'
      },
      {
        project_id: '2',
        project_name: 'Normales Projekt'
      }
    ]
}
```