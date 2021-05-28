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
    const { title, content, author } = blogData
    const createdAt = Date.now()

    let sql = `insert into blogs (title, content, author, createdAt) values ('${title}', '${content}', '${author}', ${createdAt})`
    
    return execSQL(sql).then(insertedResult => {
        console.log(insertedResult)
        return {
            id: insertedResult.insertId
        }
    })
}
// 更新博客
const updateBlog = (id, blogData = {}) => {
    const { title, content } = blogData
    let sql = `update blogs set title='${title}',content='${content}' where id=${id}`
    return execSQL(sql).then(updateResult => {
        console.log(updateResult)
        const {affectedRows}=updateResult
        let result = affectedRows == 1 ? true:  false
        return result;
    })
}
// 删除博客
const deleteBlog = (id, author) => {
    let sql =  `delete from blogs where id=${id} and author='${author}'`

    return execSQL(sql).then(deleteResult => {
        console.log(deleteResult)
        const {affectedRows} = deleteResult
        let result = affectedRows === 1 ? true : false
        return result
    })
}
module.exports = {
    getList,
    getDetail,
    createNewBlog,
    updateBlog,
    deleteBlog
}