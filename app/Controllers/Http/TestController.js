'use strict'
const Test = use('App/Models/Test')
class TestController {
    async index ({response}) {
       // let books = await Test.all()

        return response.json({title: 'hey'})
    }
}

module.exports = TestController
