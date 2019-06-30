PlayChain-UI
============

This is a blockchain explorer that connects to a PlayChain API provided by the *witness_node* executable.

## Getting started

PlayChain-UI depends node Node.js, and version 9+ is required.

On Ubuntu and OSX, the easiest way to install Node is to use the [Node Version Manager](https://github.com/creationix/nvm).

To install NVM for Linux/OSX, simply copy paste the following in a terminal:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
nvm install v9
nvm use v9
```

Once you have Node installed, you can clone the repo:

```
git clone https://github.com/totalgames/playchain-ui.git
cd playchain-ui
```

Before launching the GUI you will need to install the npm packages:

```
npm install
```

## Running the dev server

The dev server uses Express in combination with Webpack.

Once all the packages have been installed you can start the development server by running:

```
npm start
```

Once the compilation is done the GUI will be available in your browser at: `localhost:8082` or `127.0.0.1:8082`. Hot Reloading is enabled so the browser will live update as you edit the source files.


## Testnet
Playchain UI uses TESTNET and MAINNET gateway url
There are npm commands to access TESTNET:
```
npm start
npm run start-stage
```

To access MAINNET:
```
npm run start-prod
```

For webpack building:
```
npm rub build-stage
npm rub build-prod
```
Look at package.json to change default gateway url


## Production
If you'd like to host your own wallet somewhere, you should create a production build and host it using NGINX or Apache. In order to create a prod bundle, simply run the following command:

```
npm run build
```
This will create a bundle in the ./build/dist folder that can be hosted with the web server of your choice.


### Installable wallets
We use Electron to provide installable wallets, available for Windows, OSX and Linux Debian platforms such as Ubuntu. First, make sure your local python version is 2.7.x, as a dependency requires this.

On Linux you will need to install the following packages to handle icon generation:

`sudo apt-get install --no-install-recommends -y icnsutils graphicsmagick xz-utils`

For building, each architecture has it's own script that you can use to build your native binary:

__Linux__
`npm run package-deb`  
__Windows__
`npm run package-win`  
__Mac__
`npm run package-mac`  

This will compile the UI with some special modifications for use with Electron, generate installable binaries with Electron and copy the result to the root `build/binaries` folder.


### Docker

Clone this repository, run `docker-compose up` and visit localhost:80


## Contributing & Coding style guideline
See [CONTRIBUTING.md](CONTRIBUTING.md)

## Code of Conduct
This repository has a Code of Conduct that should be followed by everyone. 
Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

**Please keep comments constructive and clean**

## BrowserStack 

The PlayChain UI is integrated with BrowserStack (https://www.browserstack.com) to allow manual compatibility testing across devices and browser versions. In the future we will switch to a automated Selenium testing framework.
![image](https://user-images.githubusercontent.com/33128181/48697885-05f8d880-ebe6-11e8-95a2-d87516cbb3d9.png)



