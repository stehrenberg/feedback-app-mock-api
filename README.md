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
Always returns
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