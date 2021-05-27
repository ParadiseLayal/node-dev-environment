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

}
// 获取博客详情
const getDetail = (id) => {
    let sql = `select * from blogs where id='${id}'`
    return execSQL(sql);
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