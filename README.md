##
* docker build --tag koa-info-2 .
* docker run -d --restart unless-stopped --name=koaInfo1 -v /d1/app/js/koa/koa-info-2:/koa-info-2 -p 5001:5001 koa-info-2
* docker logs koaInfo2
* docker exec -it koaInfo2 pm2 list





