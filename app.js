// 服务器设置
const querystring = require('querystring');
const handleBlogRoute = require('./src/routes/blog');

// 处理POST数据
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({});
            return;
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({});
            return;
        }
        let postData = '';
        req.on('data', (chunk) => {
            postData += chunk;
        });
        req.on('end', () => {
            if (!postData) {
                resolve({});
                return;
            }
            resolve(JSON.parse(postData));
        })
    });
    return promise;
}

const serverHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const url = req.url;
    const path = url.split('?')[0];
    const query = url.split('?')[1]

    req.path = path;
    // 解析query
    req.query = querystring.parse(query);

    getPostData(req).then((postData) => {
        req.body = postData;

        const blogDataPromise = handleBlogRoute(req, res);
        if (blogDataPromise) {
            blogDataPromise.then(blogData => {
                res.end(JSON.stringify(blogData))
            })
            return;
        }

        //未匹配到任何路由
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 NOT Found');
        res.end();
    })


}

module.exports = serverHandler