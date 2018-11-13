'use strict'

const Database = use('Database')

class LoadMoreController {
  async index({ request }) {
    const offsetLoad = request.all().countTours

    console.log(offsetLoad)
    return await Database
      .select('*')
      .limit(3)
      .offset(offsetLoad)
      .into('tours')
  }
}

module.exports = LoadMoreController
