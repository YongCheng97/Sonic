How to Deploy Sonic?

1) Initialising of database:

- Change api/.env file according to your PSQL specifications.
- Using PSQL command prompt, change directory into sql folder and run "\i init.sql".
- In the case when you have to reset the whole database, simply run "\i init.sql" to clean all the data.

2) Initialising of back-end server:

- Using command prompt, change directory into the api folder and run "npm install".
- Then, to start the server, run "npm start".
- In the case when you want to stop the server, run "npm stop".

3) Initialising of front-end:

- Using command prmopt, change directory into any of the 4 frontend folders in the root directory (e.g. "frontend-riders").
- Run "npm install".
- Then, to start the server, run "ng serve".
- In the case when you want to stop the server, interrupt the server using the Ctrl-C command.
