// Autentisering og database
import { Client, Databases, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('653787afe8820d84f01e');

const databases = new Databases(client);

const account = new Account (client);

const wish = account.createEmailSession ("email@example.com", "password");

wish.then (function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

const promise = databases.createDocument(
    '653787fb47692d4c16a4',
    'auto-generated',
    ID.unique(),
    { "title": "Hamlet" }
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});