# cv-uploader

This webapp allows you to submit your full name, birthdate as well as your Curriculum Vitae, in order to be part of the recuritment process.
It restricts the candidates to be over 18 years old.

It uses mysql as the database. The project is mainly done with javascript.

# Prerequisites:
  
   **mysql-server**, **npm**, **nodemon**

# Usage:
Steps:
- Install mysql-server.
- In mysql:
  - Run the create.db script in ./db.
    `source /path/to/cv-uploader/db/create.sql` 
    
  - Create user with privileges to select and insert into the database
  
    `CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';`
    
    `GRANT SELECT, INSERT ON cv_uploader.candidates TO username@'localhost';`
- In /cv-uploader
  - Change credentials on app.js to the user and password you chose before.
  - Run the command `npm install`
  - Install nodemon: `npm install nodemon -g`
 
- To run project:
  - Run `nodemon app.js`
  - Open in your browser [localhost:5000](http://localhost:5000) (port by default)
 
 
 
 
> **TODO** : When user submits file, on page refresh, allow to download the same file.

  
  
