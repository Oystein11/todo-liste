const client = new client ();

client
    .setEndpoint ("http://localhost/v1")
    .setProject ("653787afe8820d84f01e")
;

const account = new Account (client);

//register user
account.create (ID.unique(), "me@example.com", "password", "John Doe")
    .then(function (response) {
        console.log (response);
    }, function (error){
        console.log (error);
    });

    