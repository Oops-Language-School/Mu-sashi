#!/bin/bash

# install mongoDB

#sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5

#echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

#sudo apt-get update

#sudo apt-get install -y mongodb-org

# install nginx

#sudo apt-get install nginx
#sudo ufw app list
#sudo ufw allow 'Nginx HTTP'
#sudo ufw status

#systemctl status nginx
#ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'

#curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
#sudo bash nodesource_setup.sh
#sudo apt-get install nodejs
#sudo apt-get install build-essential
#sudo npm cache clean -f
#sudo npm install -g n
#sudo n stable

# install Let's Encrypt

#sudo add-apt-repository ppa:certbot/certbot
#sudo apt-get update
#sudo apt-get install python-certbot-nginx

# sudo vim /etc/nginx/sites-available/default
# server_name example.com www.example.com;
# sudo nginx -t

#sudo systemctl reload nginx
# sudo ufw status
# sudo ufw enable
# sudo ufw allow 'Nginx Full'
# sudo ufw delete allow 'Nginx HTTP'
# sudo ufw allow 'OpenSSH'
# sudo certbot --nginx -d example.com -d www.example.com

# sudo certbot renew --dry-run
# sudo npm install -g pm2
#pm2 start index --watch
#pm2 startup systemd
# sudo env PATH=$PATH:/usr/local/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
# systemctl status pm2-ubuntu


# sudo vim /etc/nginx/sites-available/default
#
#
