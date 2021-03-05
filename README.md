# 概要
TypeScriptでReactの環境構築を勉強がてらやてーみる

# やったことメモ
* `Dockerfile`と`docker-compose.yml`を用意
* build
```
$ docker-compose up --build -d
```
* Reactプロジェクトの作成
```
$ docker exec -it local.frontend /bin/sh 
/usr/src/app # npx create-react-app frontend --template typescript
npx: installed 67 in 8.196s

Creating a new React app in /usr/src/app/frontend.
・・・・・＜省略＞・・・・・
success Uninstalled packages.
Done in 94.36s.

Success! Created frontend at /usr/src/app/frontend
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd frontend
  yarn start

Happy hacking!
```
* 個人的に、この方法だと階層が1つ深くなる（frontend）のがしっくりこない（root directoryにfrontend配下のものが見えてて欲しい）ので、必要なものをroot directoryに移動
  * `README.md`はこのファイルの下の方に追記
  * `.gitignore`は元々作成していたものから足りないそうなものを転記
  * `package.json` コマンドが一部階層化されていたので `frontend` を削除
* `docker-compose.yml`に下記commandを追加
```
command: sh -c "yarn install && yarn start"
```
→ makeファイルとかで実行させるでも良いので、commandは不要かも
* linterの追加
```
$ docker exec -it local.frontend /bin/sh
/usr/src/app # ./node_modules/.bin/eslint --init
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-standard@latest
・・・＜省略＞・・・
130 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Successfully created .eslintrc.json file in /usr/src/app
ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.
```
→ lintがうまく動かないので、一旦外した><
* [Tutorial](https://ja.reactjs.org/tutorial/tutorial.html) をTSでやってみた

# 移行したREADMEの内容
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
