docker-compose build nodejs  <- สำหรับเลือกเฉพาะ services-> nodejs ใน docker-compose file
docker-compose up nodejs

--------------------------------------------------
Nginx

$ docker run -it --rm -d -p 8080:80 --name web nginx:1.21.0-alpine