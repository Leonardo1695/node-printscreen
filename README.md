# node-printscreen

node http server for generating and retrieving screenshots of the current running machine

## scripts:

on first run remember to run yarn to download dependencies:

    yarn

run in development mode (with hot reload):

    yarn dev

run in opmized mode:

    yarn start

## instalation && how to use:

1: install nodejs

installer(windows or linux/ubunto): [link](https://nodejs.org/en/download/)

or running(linux):

    sudo apt-get install nodejs

2: install yarn:

    npm install --global yarn

3: install git && imagemagick(linux only):

windows: [link](https://git-scm.com/download/win)

linux/ubunto:

    sudo apt update
    sudo apt install imagemagick
    sudo apt install git

4: clone this repository:

    git clone https://github.com/Leonardo1695/node-printscreen.git

5: download dependencies

inside the cloned repository folder run:

    yarn

6: start the script

inside the cloned repository folder run:

    yarn start

OBS: To mantain the server running keep the terminal openned


7: testing

in any browser navigate to:

server status:

    127.0.0.1:3000/

get screenshot

    127.0.0.1:3000/getscreenshot

OR :

server status:

    localhost:3000/

get screenshot

    localhost:3000/getscreenshot

## V2

implemented image clipping

how to config:

edit file config.js to define SIZE and LOCATION of the crop

    src/config.js

EX.: for a image with proportions 1920 - 1080 picking only the center will be APROX:

width: 960
height: 680
top: 340
left: 480

## License

[MIT](https://choosealicense.com/licenses/mit/)


