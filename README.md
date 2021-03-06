# FTP Express Server

## 1. Clone this project

```shell
git clone https://github.com/tranphuquy19/ftp-express-server.git
cd ftp-express-server
```

## 2. Install dependencies

```npm install``` or ```yarn```

## 3. Run this project

```npm start``` or ```yarn start```

## 4. Open ftp server

Open this link [ftp://127.0.0.1:2121](ftp://127.0.0.1:2121) in incognito window (Ctrl+Shift+N) to test login function.

## 5. Open http server

Server started at port: `3000` - [http://localhost:3000](http://localhost:3000)

## 6. Advanced

### 6.1 Change FTP or HTTP server port

The HTTP server is started at the default port `3000`, and the FTP server is `2121`. Remove the "#" character before `PORT=xxxx` in the ".env" file to customize the server port

**Note**: on Linux operating system environment, to start the server with port value from 0 - 1023, supperuser permission is required. To fix, running `sudo node start` or` sudo yarn start`, enter the password if required! 

**Attention**: Running applications at these ports may conflict with existing OS services

### 6.2 Change FTP username and FTP password

By default, the user logs in to the ftp server with any username and password as "quydeptroai". Please edit the file ".env" and re-run server to apply the new username and password!

## Q&A

- Q: The FTP server successfully logged in at localhost but the other host(another ip) failed?
- A: Please change the host's ip value at .env file