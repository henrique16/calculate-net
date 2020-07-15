rm -rf dist
npm run tsc
cp -r client/ dist/
pm2 start dist/index.js