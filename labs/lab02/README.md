# A Simple Express App

## Starting the app

Go to `labs/lab02/myapp` and run:

```
$> npm install
$> npm start
```

Go to `http://localhost:3000/`

Click link `Go to Users`

You will see a list of already existing users.

Buttons "New User", "Edit", "X" are not working. It is you job to implement its functionality. Also `email` link.

## Implement routes

You have to implement what is missing so the simple "Users" app could work.

Open file `myapp/app.js` and there is a TODO.

If you look at the exisint views in `views/users` you will see that you need to implement:

GET /users - to list all users
GET /users/new - to show the form to create a new user
POST /users - to create a new user
GET /users/:userId - to view the details of an existing user
GET /users/:userId/edit - to show the form to edit an existing user
POST /users/:userId - to update the an existing user
GET /users/:userId/delete - to delete an existin user

## Users module

There is already a module in `lib/users.js` so you can findAll, findById, sava and delete users.
You will need to `require` this module in the file where you are going to use it.

## Accesing parameters in the form using the request object

Since the app is already configured the `body-parser` module. The parameters in a form could be
retrived from the `request` object in a handler using:

```
// to get a parameter called age
req.body.age

// to get a parameter called name
req.body.name
```

## Accesing path variables

You can define path variables in path using the following:

```
app.get('/:userId', function(req, res, next) {
    // to get the path variable value
    var userId = req.params.userId;
    // ...
});
```

You can also use Regular Expressions in path variables to limit how the path is going to be matched:

```
// match /report/xxxx where xxxx is from 1 to 10 letters
app.get('/report/:name([a-z]{1, 10}', function(req, res, next) {
    // to get the path variable value
    var name = req.params.name;
    // ...
});

## Rendering

The `response` object in a handler has several methods [http://expressjs.com/en/4x/api.html].

Since this app is already using `jade` [http://jade-lang.com/] as template engine, you need to use
the `res.render()` method:

```
// to render views/index.jade
res.render('index', { ... });

// to redner views/users/list.jade
res.render('users/list', { ... });
```

The second parameter of the `res.render()` method is an object whose properties define local variables that
are accesible from the view/template.

## Implement routes
