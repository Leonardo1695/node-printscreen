# node-printscreen

node http server for generating and retrieving screenshots of the current running machine

scripts:
    run in development mode (with hot reload):
        yarn/npm dev
    run in opmized mode:
        yarn/npm start

how to use:

1: install nodejs
    installer
        https://nodejs.org/en/download/
    or running:
        sudo apt-get install nodejs
2: install yarn running:
    npm install --global yarn
3: install git running:
    sudo apt update
    sudo apt install git
4: clone this repository running:
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

