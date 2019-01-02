# Blockchain data

<!-- ![](preview.gif) -->

Simple express server to serve a static json file with cors support

- You can find a project using this data [here](https://github.com/eeegor/blockchain-ico)

## :gear: Configuration

Modify configuration in `.env` (start by renaming `env.example` to `.env`, [wondering why?](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7))


## :rocket: Getting started

After you have cloned the repository to your computer please run the following commands inside the project folder:

```bash
# install dependencies
yarn

# run the app (localhost:8080)
yarn start
```
## :truck: Deploy to Zeit.co with `now`

If you wish, you can deploy this app to Zeit.co. To do so please configure the following settings before you hit `yarn deploy` 

> Info: It's also possible to host with any other providers (e.g. Heroku) which support `node.js` but you'll need to configure them on your own :cry:

1. Modify configuration in `.env` (start by renaming `env.example` to `.env`, [wondering why?](https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7))
2. Modify configuration in `now.json` (start by renaming `now.example.json` to `now.json`
3. Deploy!

> Info: `Zeit.co now` creates deployments with random url names. In order to properly configure `cors` it is recommended to create an `alias` for your domain. 
> 
> It's easy to do with the following command after deployment:
> 
> ```bash
> now alias {the-random-deployment-url} {alias-name}

Finally now you're ready to:

```bash
# deploy app to production
yarn deploy
```
> Info: This will run `format` and `lint` in the `prebuild` step, to make sure the deployed version is meeting the requirements.
>
> If you want to skip this step, you can remove the flag from the `prebuild` in `package.json/scripts`

## :green_book: Tools, Libraries and Packages

### Express

Fast, unopinionated, minimalist web framework for Node.js

[https://expressjs.com/](https://expressjs.com/)

##### Additional Packages
- [cors](https://github.com/expressjs/cors)
  - Helps with Cross-origin resource sharing

### Dotenv

Loads environment variables from `.env` file 

More info [here](https://github.com/motdotla/dotenv)