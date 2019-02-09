# RollCallOne

Princess Anne Police Roll Call Program


1. Install Mode JS on AWS
    sudo apt-get update
    sudo apt-get install npm
    https://www.tecmint.com/install-pm2-to-run-nodejs-apps-on-linux-server/
    https://www.tecmint.com/install-pm2-to-run-nodejs-apps-on-linux-server/

    ---------- Install Node.js v11.x ----------
    $ curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
    $ sudo apt-get install -y nodejs

    ---------- Install Node.js v10.x ----------
    $ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    $ sudo apt-get install -y nodejs



2. Install PM2
    sudo npm i -g pm2
    pm2 start app.js
    pm2 stop     <app_name|id|'all'|json_conf>
    pm2 restart  <app_name|id|'all'|json_conf>
    pm2 delete   <app_name|id|'all'|json_conf>
    pm2 monit

    https://www.npmjs.com/package/pm2

3. Install Mongo
    https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
    a. sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
    b. echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
    c. sudo apt-get update
    d. sudo apt-get install -y mongodb-org
    e. sudo service mongod start
    f. [initandlisten] waiting for connections on port 27017
    g. sudo service mongod stop
    h. sudo service mongod restart
    i. mongo  - to run in terminal

Public IP
18.225.37.52:5000



NGINX
    sudo apt-get install nginx
    https://medium.com/@nishankjaintdk/setting-up-a-node-js-app-on-a-linux-ami-on-an-aws-ec2-instance-with-nginx-59cbc1bcc68c

    sudo su -
    systemctl status nginx  "q" to end
    systemctl status nginx  --no-pager
    systemctl start nginx
    systemctl stop nginx
    systemctl reload nginx
    nginx -T | less
    nginx -t test fine
    





// Load User Model
// require('../models/User');
// const User = mongoose.model('users');




// TESTING
// router.get('/', ensureAuthenticated, (req, res) => {
//     User.find({user: req.user.id})
//         .sort({date:'desc'})
//         .then(users => {
//             res.render('ideas/index', {
//                 users:users
//             });
//         });
// });







