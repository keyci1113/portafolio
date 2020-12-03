cd ~/portafolio/portafolio
sudo docker build --tag portafolio .
containerID=$(sudo docker container ls | sudo grep "0.0.0.0:443" | sudo awk '{print $1}')
echo $containerID
sudo docker stop $containerID
sudo docker rm $containerID
sudo docker run -d -p 443:80 portafolio
sudo docker system prune -a --force