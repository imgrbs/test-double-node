const UserService = require('./user/user-service')

async function main() {
    console.log('hello !');

    const users = await UserService.getAllUsers()
    console.log('users : ', users)
}

main()
