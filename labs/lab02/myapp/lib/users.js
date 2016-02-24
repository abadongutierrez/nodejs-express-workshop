var _ = require('lodash');

var userArray = [{
    id: 1,
    email: 'slopez@nearsoft.com',
    name: {
        first: 'Saidel',
        last: 'Lopez'
    }
}, {
    id: 2,
    email: 'jnajera@nearsoft.com',
    name: {
        first: 'Juan',
        last: 'Najera'
    }
}, {
    id: 3,
    email: 'mpacheco@nearsoft.com',
    name: {
        first: 'Mario',
        last: 'Pacheco'
    }
}]

module.exports = {
    findAll: function () {
        return userArray;
    },
    findById: function (id) {
        return _.find(userArray, function(user) {
            return user.id == id;
        });
    },
    save: function  (userConfig) {
        console.log(userConfig);
        var nextId = userArray.length + 1;
        userArray.push({
            id: nextId,
            email: userConfig.email,
            name: {
                first: userConfig.name,
                last: userConfig.lastName
            }
        });
        return this.findById(nextId);
    },
    delete: function (userId) {
        _.remove(userArray, function (user) {
            return user.id == userId;
        })
    }
}