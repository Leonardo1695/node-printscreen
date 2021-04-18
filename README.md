# node-printscreen

node http server for generating and retrieving screenshots of the current running machine

## scripts:
    run in development mode (with hot reload):
    ```bash
        yarn dev
    ```
    run in opmized mode:
    ```bash
        yarn start
    ```bash

## instalation && how to use:

1: install nodejs

    installer: https://nodejs.org/en/download/

    or running:

    ```bash
        sudo apt-get install nodejs
    ```

2: install yarn running:

    ```bash
    npm install --global yarn
    ```

3: install git running:

    ```bash
    sudo apt update
    sudo apt install git
    ```

4: clone this repository running:

    ```bash
    git clone https://github.com/Leonardo1695/node-printscreen.git
    ```

5: download dependencies

    inside the cloned repository folder run:

    ```bash
        yarn
    ```

6: start the script

    inside the cloned repository folder run:

        ```bash
        yarn start
        ```

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

## License
[MIT](https://choosealicense.com/licenses/mit/)


