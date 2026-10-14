// 로컬 미리보기용 정적 서버: node mesa-weekly/serve.js → http://localhost:4320
const http = require('http');
const fs = require('fs');
const path = require('path');
const types = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8'};
http.createServer((req, res) => {
  const name = req.url.split('?')[0] === '/' ? 'index.html' : path.basename(req.url.split('?')[0]);
  fs.readFile(path.join(__dirname, name), (err, data) => {
    if (err) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, {'Content-Type': types[path.extname(name)] || 'text/plain'});
    res.end(data);
  });
}).listen(4320, () => console.log('listening on 4320'));
