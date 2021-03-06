import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import * as config from '../config.json'
import * as serviceAccount from '../service_account.json'
import * as handler from './handlers'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.firebase.databaseURL
});

export const createUser = functions.https.onRequest(handler.createUser)
export const requestOneTimePassword = functions.https.onRequest(handler.requestOneTimePassword)
export const velifyOneTimePassword = functions.https.onRequest(handler.velifyOneTimePassword)
