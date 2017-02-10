# private node app

## Docker

```bash
docker build -t private-node-app .
docker run -d -p 3000:3000 private-node-app
```

## PM2

```bash
pm2 start ecosystem.config.js
```
