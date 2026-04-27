const http = require('http');

const server = http.createServer((req, res) => {
    const currentTime = new Date().toLocaleString();

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`
        <html>
        <head>
            <title>Lambda CI/CD App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: linear-gradient(to right, #1e3c72, #2a5298);
                    color: white;
                    text-align: center;
                    padding-top: 100px;
                }
                h1 {
                    font-size: 40px;
                }
                .box {
                    background: rgba(255,255,255,0.1);
                    padding: 20px;
                    border-radius: 10px;
                    display: inline-block;
                }
                .time {
                    margin-top: 15px;
                    font-size: 18px;
                    color: #ffd700;
                }
                .footer {
                    margin-top: 30px;
                    font-size: 14px;
                    opacity: 0.7;
                }
            </style>
        </head>
        <body>
            <div class="box">
                <h1>🚀 Lambda CI/CD Pipeline</h1>
                <p>Deployment Successful 🎉</p>
                <div class="time">Current Time: ${currentTime}</div>
                <div class="footer">Powered by AWS CI/CD</div>
            </div>
        </body>
        </html>
    `);

    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});