# Structure of files locations in the project in my pc
# ./app/.package.json
# ./app/.dockerignore
# ./app/dockerfile
# ./app/src/server.js
ใน directory นี้ใชัสำหรับทำ nodejs image โดยใช้ dokcer file
โดยขั้นตอนดังนี้
1. สร้าง package.json ที่มี dependence สำหรับ express
(หมายเหตุ การ run ผ่าน terminal จะทำที่ pwd = ./app คือ อยู่ใน app แล้ว run)
#docker run -it --rm -v ${pwd}:/app -w /app node:16-alpine3.12 npm init
#docker run -it --rm -v ${pwd}:/app -w /app node:16-alpine3.12 npm install express --save
2. สร้าง dockerfile ดังดำแหน่งและเนื้อหาตามใน project นี้
#docker build -t nodejs:dev .
3. ทดสอบสร้าง container ด้วย command line ใช้งาน image ที่สร้างใหม่
#docker run -d --name node-dev1 -v  ${pwd}/src:/app/src -p 3000:3000 nodejs:dev node src/server.js
ผลลัพท์ เมื่อเปิด browser -> url -> localhost:3000 จะขึ้น Hello world ใช้งานได้ ^_^
========================================================================
project นี้ เกี่ยวเนื่องใช้งาน image ที่สร้างจาก dokcerfile ใน ./node102
โดยจะสร้าง NodeJS Container โดยใช้ docker-compose.yml (ใน node101 ใช้ command line ในการทดลองรัน)
ที่ ./app/docker-compose.yml
แล้ว run ที่ pwd->./app/
#docker-compose up -d --build

การใช้ nginx dokcer ปกติ
PS D:\Programming> code .
PS D:\Programming> cd devops1
PS D:\Programming\devops1> docker-compose up -d nginx


==================git================================================
////////////////////// ข้อความจาก repository ของ github.com //////////////////////////////////////////////////////////////////////
…or create a new repository on the command line
git config --global --list

echo "# node1" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/artthavuj/node1.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/artthavuj/node1.git
git branch -M main
git push -u origin main
////////////////////////////////////// จบ ข้อความจาก repository ของ github.com ///////////////////////////////////////////////////////

=====================================================================