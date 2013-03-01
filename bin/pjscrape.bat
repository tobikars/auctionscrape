:: Example batch file - update the path below, place the batch file in your
:: system path, and you can run pjscrape as a command
C:\xampp\htdocs\phantomjs-1.8.1-windows\phantomjs --debug=no --load-images=no  --proxy=localhost:7070 --proxy-type=socks5 ..\pjscrape.js %*
:: mongoimport -d meteor -c auctions data.json