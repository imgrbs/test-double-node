const UserRepository = require('./user-repository')

module.exports = {
    getAllUsers: async () => {
        return await UserRepository.findAll()
    }
}
