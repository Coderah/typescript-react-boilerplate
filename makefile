node_path = NODE_PATH=./bin:.:./node_modules:`npm root`
webpack = node ./node_modules/webpack/bin/webpack.js --progress
webpack-dev-server = node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js
electron = ./node_modules/electron-prebuilt/dist/electron
ava = ${node_path} ./node_modules/ava/cli.js bin/**/*.test.{js,jsx}
tsc = ./node_modules/typescript/bin/tsc

.PHONY: default prod dev app test test-watch watch-tsc

default:
	${webpack}

prod:
	NODE_ENV=production ${webpack} --env.production -p

watch-tsc:
	${tsc} -w

test:
	${tsc} && ${ava}

test-watch:
	${ava} --watch

dev:
	${webpack-dev-server} --config webpack-devserver.config.js --content-base dist/
