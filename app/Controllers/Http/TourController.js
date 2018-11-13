'use strict'

const Database = use('Database')

class TourController {
  async index({request}) {
    const reviewInfo = request.only(['name', 'about', 'price', 'rate', 'active'])
    return await Database
      .insert([{
        name: reviewInfo.name,
        about: reviewInfo.about,
        price: reviewInfo.price,
        rate: reviewInfo.rate,
        active: reviewInfo.active,
      }])
      .into('tours')
  }
}

module.exports = TourController
