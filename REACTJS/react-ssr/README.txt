search engines for google and etc..

* npm create-razzle-app nameofapp



*Admin panel - we can build our backend visualy
create strapi-app my-project --quickstart



***to deploy react app to github pages {steps}

add property "homepage":"http://username.github.io/weather/" into package.json
	npm install gh-pages --save-dev
	In the existing scripts property, add a predeploy property and a deploy property
	"predeploy":"npm run build"
	"deploy":"gh-pages -d build"
	init git folder in app folder {git init}
	git remote add origin https://github.com/username/weather.git
	npm run deploy