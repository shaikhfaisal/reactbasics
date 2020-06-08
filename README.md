Install babel using the following commands:

brew update
brew doctor
brew install npm
npm install --save-dev @babel/core @babel/cli
npm install babel-preset-react-app --save-dev
npm install --save-dev @babel/preset-react@3
npm install --save-dev @babel/plugin-proposal-class-properties

Run the following command to start watching the files and:

1.  compiling JSX to JS
2.  transpiling class functions
    npx babel --plugins @babel/plugin-proposal-class-properties --watch src --out-dir . --presets @babel/preset-react --verbose

Run the following command to compile TS to JS and build the app
npx webpack --watch

TODO:

- Pagination
- HoC
- reuse interfaces? how to think about this?
- unit testing react components
- e2e or UI testing ?
- styling..
