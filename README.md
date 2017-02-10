# micro app

## Docker

```bash
docker build -t micro-app .
docker run -d -p 3000:3000 micro-app
```

## PM2

```bash
pm2 start ecosystem.config.js
```
