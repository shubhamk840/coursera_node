before using the npm start command for this application
run this two commands

1. mongod --port 27017 --dbpath=data
this will start runnning a database at the folder path /data
2. after this starts running create another terminal and run the following command
   mongo
   db
   use conFusion
   db.dishes

   // this will create a database naming conFusion and then db.dishes will create a collection in
     that database file.