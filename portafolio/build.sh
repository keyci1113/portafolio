cd portafolio/
echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin;
echo "REACT_APP_HOST_API=http://$DEPLOY_HOST:5000" > .env
docker build --tag image:latest .;
rm .env
imageId=$(docker images | grep "image" | awk '{print $3}');
docker tag $imageId al3xleonel/portafolio:latest;
docker push al3xleonel/portafolio;
