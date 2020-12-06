cd portafolio/
echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin;
docker build --tag image:latest .;
imageId=$(docker images | grep "image" | awk '{print $3}');
docker tag $imageId al3xleonel/portafolio:lastet;
docker push al3xleonel/portafolio;

mkdir ~/.ssh
touch ~/.ssh/known_hosts
echo "Deploy..."
echo -e "$key"> ~/.ssh/key.pem
ssh-keyscan -t ecdsa $DEPLOY_HOST >> ~/.ssh/known_hosts
chmod 400 ~/.ssh/key.pem
ssh -i "~/.ssh/key.pem"  $DEPLOY_USER@$DEPLOY_HOST "sh ~/up.sh $DOCKER_PASS $DOCKER_USER 443 lastet";
echo Y | rm ~/.ssh/key.pem
rm -r ~/.ssh
echo "Deploy success!!! you are awesome."