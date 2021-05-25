const handleBlogRoute = (req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];

    if (method === 'GET' && path === '/api/blog/list') {
        return {
            message: '获取博客列表接口'
        }
    }
}

module.exports = handleBlogRoute