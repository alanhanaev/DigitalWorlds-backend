var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var cors = require('koa-cors');
const db = require('monk')("login:password@id_addr:port/db");
const serializeError = require('serialize-error');
var http = require('http');
var https = require('https');
var fs = require('fs');
var enforceHttps = require('koa-sslify');
var serve = require('koa-static');
const posts_collection = db.get('posts');


var app = new koa();
// app.use(enforceHttps());
app.use(cors({ origin: '*' }));
app.use(serve('./public'));

var router = new Router();
router.use(bodyParser());
router.get('/posts', get_posts);
router.get('/post', get_post);
router.put('/post', add_post);
router.get('/comments', get_comments);
router.put('/comment', add_comment);

app.use(router.routes());
app.use(router.allowedMethods());


// SSL options 
// var options = {
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.crt')
// }


// start the server 
http.createServer(app.callback()).listen(80);
// https.createServer(options, app.callback()).listen(443);




/** Сериализует ошибку в текст */
function stringify_error(error) {
    if (error)
        return JSON.stringify(serializeError(error));
    else
        return "";
}

/** Генерирует уникальный id */
function Guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + "-" + S4());
}


/** Метод для получения списка всех постов с комментариями*/
async function get_posts(ctx) {
    var body = ctx.request.body; //name, text
    result = { success: false, error_msg: "Произошла ошибка" };
    try {
        var response = await posts_collection.find({}, { comments: 0 });
        if (Array.isArray(response))
            result = { success: true, values: response };
    }
    catch (e) {
        console.log(stringify_error(e));
    }
    ctx.body = result;
}

/** Метод для получения одного поста с комментариями*/
async function get_post(ctx) {
    var post_id = ctx.request.query.post_id;
    result = { success: false, error_msg: "Произошла ошибка" };
    if (post_id)
        try {
            var response = await posts_collection.find({ _id: post_id }, {});
            if (Array.isArray(response))
                result = { success: true, value: response.length > 0 ? response[0] : {} };
        }
        catch (e) {
            console.log(stringify_error(e));
        }
    ctx.body = result;
}

/** Метод для добавления нового поста */
async function add_post(ctx) {
    var body = ctx.request.body; //name, text
    result = { success: false, error_msg: "Произошла ошибка" };
    try {
        var response = await posts_collection.insert({
            add_date: new Date(),
            name: body.name,
            text: body.text,
            comments: []
        });
        result = { success: true, value: response };
    }
    catch (e) {
        console.log(stringify_error(e));
    }
    ctx.body = result;
}

/** Метод для добавления нового комментария к посту */
async function add_comment(ctx) {
    var body = ctx.request.body; //name, text, post_id
    var result = { success: false, error_msg: "" };
    try {
        var comment = {
            id: Guid(),
            add_date: new Date(),
            name: body.name,
            text: body.text
        }
        var response = await posts_collection.update(
            {
                _id: body.post_id
            },
            {
                $push: {
                    comments: comment
                }
            }
        );
        if (response && response.nModified > 0) {
            result = {
                success: true,
                value: comment
            };
        }
        else {
            console.log(stringify_error(response));
            result = { success: false, error_msg: "Произошла ошибка, либо поста с таким _id не существует" };
        }
    }
    catch (e) {
        console.log(stringify_error(e));
        result = { success: false, error_msg: "Произошла ошибка, либо поста с таким _id не существует" };
    }
    ctx.body = result;
}


/** Метод для получения списка всех комментариев для постов*/
async function get_comments(ctx) {
    var post_id = ctx.request.query.post_id;
    result = { success: false, error_msg: "Произошла ошибка, либо неправильный post_id" };
    if (post_id)
        try {
            var response = await posts_collection.find({ _id: post_id }, { comments: 1 });
            if (Array.isArray(response))
                result = { success: true, values: response.length > 0 ? response[0].comments : [] };
        }
        catch (e) {
            console.log(stringify_error(e));
        }
    ctx.body = result;
}
