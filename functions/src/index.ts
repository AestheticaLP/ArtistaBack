import {https, logger} from 'firebase-functions';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = https.onRequest((request, response): void => {
  logger.info('Hello logs!', {structuredData: true});
  response.send('Hello from Firebase!');
});
