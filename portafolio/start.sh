echo "Deploy..."
echo "$key"> .ssh/key.pem
ssh-keyscan -t ecdsa $DEPLOY_HOST >> ~/.ssh/known_hosts
chmod 400 ~.ssh/key.pem
ssh -i "key.pem" -o StrictHostKeyChecking=yes  $DEPLOY_USER@$DEPLOY_HOST "cd ~/portafolio/;sudo git checkout .;sudo git pull;sh up.sh"
rm key.pem
echo "Deploy success!!! you are awesome."