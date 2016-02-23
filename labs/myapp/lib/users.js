var userArray = [{
    id: 1,
    email: 'rgutierrez@nearsoft.com',
    name: {
        first: 'Rafael',
        last: 'Gutierrez'
    }
}, {
    id: 2,
    email: 'mcoba@nearsoft.com',
    name: {
        first: 'Miguel',
        last: 'Coba'
    }
}, {
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
    findById: function(id) {
        return userArray[0];
    }
}