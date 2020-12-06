# $1 : password de Docker hub
# $2 : Usuario de docker hub
# $3 : puerto que se desea deshabilitar
# $3 : tag de la imagen en docker hub
echo $1 | sudo docker login -u $2 --password-stdin;
sudo docker pull al3xleonel/portafolio:$4;
sudo docker stop $(sudo docker ps | sudo grep "0.0.0.0:$3" | sudo awk '{print $1}');
sudo docker rm $(sudo docker ps -a | sudo grep "Exited" | sudo awk '{print $1}');
sudo docker run -d -p 443:80 al3xleonel/portafolio:$4;