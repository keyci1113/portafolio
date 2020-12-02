echo "Deploy..."
mkdir ~/.ssh
echo "$key"> ~/.ssh/key.pem
ssh-keyscan -t ecdsa $DEPLOY_HOST >> ~/.ssh/known_hosts
chmod 400 ~/.ssh/key.pem
ssh -i "~/.ssh/key.pem" $DEPLOY_USER@$DEPLOY_HOST "cd ~/portafolio/;sudo git checkout .;sudo git pull;sh portafolio/up.sh"
rm ~/.ssh/key.pem
echo "Deploy success!!! you are awesome."