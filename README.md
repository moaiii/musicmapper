# Frets to Keys

Map your fretboard notes and chords to their corresponding keyboard equivelent. 
Built using React, Node, AWS lambda and other goodies. 

## Develop
`npm run dev` to run the webpack live reload server with eslint. 

## Deploy
This ueses a travis-ci deployment pipeline. Run `git push origin master` and if all unit and integration tests pass the app will be automatically deployed.

## Tests
Tests use the Jest and Pupeteer frameworks and are broken into 3 sections.

1. Reducers
`npm run test:reducers` or `npm run test:reducers:watch`
2. Api
`npm run test:api` or `npm run test:api:watch`
3. Integration
`npm run test:integration` or `npm run test:integration:watch`
4. Run all
`npm run test` or `npm run test:watch`

## Live URL
http://ec2-54-77-155-243.eu-west-1.compute.amazonaws.com:4444

~moaiii
