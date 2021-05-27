const { execSQL }  = require('../db/mysql.js');
// 博客相关的方法
const getList = (author, keyword) => {
    // 从数据库里拿数据
    let sql = `select * from blogs where 1=1 `;

    if(author) {
        sql += `and author='${author}' `;
    }
    if(keyword) {
        sql += `and title like '%${keyword}%'`;
    }

    return execSQL(sql);
    // return [
    //     {
    //         id: 1,
    //         title: '在线答疑',
    //         content: '请拨打电话188818181818',
    //         author: 'loyal.pan',
    //         createdAt: '2017-12-12',
    //     },
    //     {
    //         id: 2,
    //         title: '在线答疑',
    //         content: '请拨打电话188818181818',
    //         author: 'loyal.pan',
    //         createdAt: '2018-12-12',
    //     }
    // ]

}
// 获取博客详情
const getDetail = (id) => {
    return {
        id: 1,
        title: '在线答疑',
        content: '请拨打电话188818181818',
        author: 'loyal.pan',
        createdAt: '2017-12-12',
    }
}

// 创建新的博客
const createNewBlog = (blogData = {}) => {
    console.log('createNewBlog', blogData)
    return {
        id: 1
    }
}
// 更新博客
const updateBlog = (id, blogData = {}) => {
    console.log('id', id)
    console.log('blogData', blogData)
    return true;
}
// 删除博客
const deleteBlog = (id) => {
    console.log('id', id)
    return true;
}
module.exports = {
    getList,
    getDetail,
    createNewBlog,
    updateBlog,
    deleteBlog
}