const Router = require('koa-router')
import fs from 'fs'
import $ from 'axios'
import path from 'path'
let router = new Router()
router.get('/', async (ctx) => {
    var htmlFile = await (new Promise(function (resolve, reject) {
        fs.readFile('views/dist/index.html', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;

})
router.get('/bbb', async (ctx) => {
    console.log('run')
    ctx.body = 123
})
router.get('/ccc', async (ctx) => {
    var htmlFile = await (new Promise(function (resolve, reject) {
        fs.readFile('public/index.html', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }))
    ctx.type = 'html';
    ctx.body = htmlFile;
})
router.get('/mock', async (ctx) => {
    console.log('run')
    await $.get(
        'http://mock.mistong.cn/mock/59bf74a3809bb814a342412a/example/default'
    ).then(res => {
        // ctx.body = res.data

        ctx.body = res.data
    })

})

module.exports = router