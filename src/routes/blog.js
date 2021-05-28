const { SuccessModel, ErrorModel } = require('../model/responseModel');
const { getList, getDetail, createNewBlog, updateBlog, deleteBlog } = require('../controllers/blog.js');

const handleBlogRoute = (req, res) => {
    const method = req.method;
    const { id } = req.query;
    const blogData = req.body;
    const author = 'coderxpxx';
    req.body.author = author;


    if (method === 'GET' && req.path === '/api/blog/list') {
        const { author, keyword } = req.query
        const listDataPromise = getList(author, keyword);
        return listDataPromise.then(listData => {
            return new SuccessModel(listData)
        })
    }
    if (method === 'GET' && req.path === '/api/blog/detail') {
    
        const detailDataPromise = getDetail(id)
        return detailDataPromise.then(detailData => {
            return new SuccessModel(detailData)
        })
    }
    if (method === 'POST' && req.path === '/api/blog/new') {
        const newBlogDataPromise = createNewBlog(blogData)
        return newBlogDataPromise.then((newBlogData) => {
            return new SuccessModel(newBlogData)
        })
    }
    if (method === 'POST' && req.path === '/api/blog/update') {
        const updatedBlogDataPromise = updateBlog(id, blogData)
        return updatedBlogDataPromise.then((updateBlogData) => {
            if (updateBlogData) {
                return new SuccessModel('更新博客成功')
            } else {
                return new ErrorModel('更新博客失败')
            }
        })
    }
    if (method === 'POST' && req.path === '/api/blog/delete') {
        const deleteBlogDataPromise = deleteBlog(id, author)
        return deleteBlogDataPromise.then(deleteBlogData => {
            if (deleteBlogData) {
                return new SuccessModel('删除博客成功')
            } else {
                return new ErrorModel('删除博客失败')
            }
        })
    }
}

module.exports = handleBlogRoute