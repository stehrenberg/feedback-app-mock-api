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