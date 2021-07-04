const { expect } = require('chai')
const sinon = require('sinon')

const UserRepository = require('../../src/user/user-repository')
const UserService = require('../../src/user/user-service')

describe('Test user service', () => {
    it('Test get all users', async () => {
        const users = [{ userId: 1 }]

        sinon.stub(UserRepository, 'findAll')
            .callsFake(() => Promise.resolve(users))

        const result = await UserService.getAllUsers()

        expect(result).eq(users)
    })
})
