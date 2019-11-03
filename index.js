const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/classroom.courses', 
                'https://www.googleapis.com/auth/classroom.coursework.students',
                'https://www.googleapis.com/auth/classroom.rosters'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

//functions
const classavg = require('./func/classavg');
const classroom = require('./func/classroom');
const grades = require('./func/grades');
const listcourses = require('./func/listcourses');
const mentor= require('./func/mentor');
const score = require('./func/score');
const students = require('./func/students');
// const classroom = require('./func/classroom');

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Classroom API.
  //var authenticate = authorize(JSON.parse(content));
  const {client_secret, client_id, redirect_uris} = (JSON.parse(content)).installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client);
    oAuth2Client.setCredentials(JSON.parse(token));
    
    // grades.execute(oAuth2Client,'46904651667', '107194452475327942169');
    // classavg.execute(oAuth2Client, '46904651667', '46904651778')
    // listcourses.execute(oAuth2Client);
    // classroom.execute(oAuth2Client,'46904651667');
    // mentor.execute(oAuth2Client,'46904651667');
    // students.execute(oAuth2Client, '46904651667');
    // score.execute(oAuth2Client,'46904651667','123');
  })
});


/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 */
function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      return oAuth2Client;
    });
  });
}

