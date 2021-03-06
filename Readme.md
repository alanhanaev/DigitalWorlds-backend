### Метод добавления поста

URL: "http://localhost/post" <br />
Method: "PUT" <br />
Json params: 
```
{
	"name":"Alan",
	"text":"Hello ! This is my first post "
}
```
Response: 
```
{
    "success": true,
    "value": {
        "add_date": "2018-04-25T09:40:49.756Z",
        "name": "alan",
        "text": "Hello ! This is my first post ",
        "_id": "5ae04d213e3d4e1258d879b7"
    }
}
либо
{
    "success": false,
    "error_msg": "Error description"
}
```


### Метод добавления комментария к посту

URL: "http://localhost/comment"<br />
Method: "PUT"<br />
Json params: 
```
{
	"name":"Vasia",
	"text": "Hello ! This is my first comment ",
    	"post_id": 2
}
```
Response: 
```
{
    "success": true,
    "value": {
        "add_date": "2018-04-25T09:40:49.756Z",
        "name": "alan",
        "text": "Hello ! This is my first post ",
        "id": "5ae04d213e3d4e1258d879b7"
    }
}
либо
{
    "success": false,
    "error_msg": "Error description"
}
```



### Метод получения списка всех постов без комментариев

URL: "http://localhost/posts"<br />
Method: "GET"<br />
Response: 
```
{
    "success": true,
    "values": [
    {
        "add_date": "2018-04-25T09:40:49.756Z",
        "name": "alan",
        "text": "Hello ! This is my first post ",
        "_id": "5ae04d213e3d4e1258d879b7"
    },
    {
        "add_date": "2018-04-25T09:40:49.756Z",
        "name": "alan",
        "text": "Hello ! This is my first post ",
        "_id": "5ae04d213e3d4e1258d879b7"
    }    
    ]
}
либо
{
    "success": false,
    "error_msg": "Error description"
}
```

### Метод получения одного поста с комментариями

URL: "http://localhost/post?post_id=45434"<br />
Method: "GET"<br />
Response: 
```
{
    "success": true,
    "value": {
        "add_date": "2018-04-25T09:40:49.756Z",
        "name": "alan",
        "text": "Hello ! This is my first post ",
        "_id": "5ae04d213e3d4e1258d879b7",
        "comments":[
            {
                "add_date": "2018-04-25T09:40:49.756Z",
                "name": "alan",
                "text": "Hello ! This is my first post ",
                "id": "5ae04d213e3d4e1258d879b7"
            },
            {
                "add_date": "2018-04-25T09:40:49.756Z",
                "name": "alan",
                "text": "Hello ! This is my first post ",
                "id": "5ae04d213e3d4e1258d879b7"
            },
        ]
    }    
}
либо
{
    "success": false,
    "error_msg": "Error description"
}
```


### Метод получения списка комментариев для поста
URL: "http://localhost/comments"<br />
Method: "GET"<br />
URL params: 
```
post_id - id поста
```
Response: 
```
{
    "success": true,
    "values": [
        {
            "id": "7301-48a0",
            "add_date": "2018-04-25T11:08:20.035Z",
            "name": "Vova",
            "text": "Hello all ! This is my first comment"
        },
        {
            "id": "ac87-1635",
            "add_date": "2018-04-25T11:08:28.844Z",
            "name": "Petya",
            "text": "Hello Petya ! This is my first comment"
        }
    ]
}
либо
{
    "success": true,
    "values": []
}
либо
{
    "success": false,
    "error_msg": "Error description"
}
```
