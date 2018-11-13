'use strict'

const Database = use('Database')

class SortByPriceUpController {
  async index({ request }) {
    const countTours = request.all().countTours
    
    return await Database
      .select('*')
      .orderBy('price', 'asc')
      .limit(countTours)
      .into('tours')
  }
}

module.exports = SortByPriceUpController
