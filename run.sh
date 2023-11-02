sudo docker build . -t homepage 
sudo docker run --name homepage-nginx -p 80:80 -d homepage