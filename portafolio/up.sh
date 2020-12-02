cd ~/portafolio/portafolio
sudo docker build --tag portafolio .
containerID=$(sudo docker container ls | sudo grep "0.0.0.0:80" | sudo awk '{print $1}')
echo $containerID
sudo docker stop $containerID
sudo docker rm $containerID
sudo docker run -d -p 80:80 portafolio
sudo docker system prune -a --force