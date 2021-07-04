const UserRepository = require('./user-repository')

module.exports = {
    getAllUsers: () => {
        return UserRepository.findAll()
    }
}
