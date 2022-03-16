# gitlabrunner-admin

## Start Project
```
npx create-react-app --template typescript .
```

## Import Module

https://www.npmjs.com/

```
npm i sass
npm install react-router-dom
npm i --save-dev @types/react-router-dom
npm i --save-dev @types/react
npm i concurrently

npm i react-helmet-async
npm i react-lazy-load-image-component
npm i --save-dev @types/react-lazy-load-image-component
npm install react-icons --save
npm i --save-dev @types/react-dom

npm i react-youtube
```

## Project
Create the below files.

* main.scss
* main.css

And add script to package.json.

```
"scripts": {
	"scss": "sass src/main.scss src/main.css --watch --no-source-map --style compressed",
    "dev": "concurrently \" npm run start \" \" npm run scss \"",
}
```

We need to install [Concurrently](https://www.npmjs.com/package/concurrently) package!

