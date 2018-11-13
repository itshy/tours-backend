'use strict'

const Database = use('Database')

class SortByPriceDownController {
  async index({ request }) {
    const countTours = request.all().countTours

    return await Database
      .select('*')
      .orderBy('price', 'desc')
      .limit(countTours)
      .into('tours')
  }
}

module.exports = SortByPriceDownController
