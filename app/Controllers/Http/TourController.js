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

  async getTours() {
    return await Database
    .table('tours')
    .select('*')
    .limit(3)
  }

  async comment({ request }) {
    const tourToAdd = request.only(['comment', 'tourID'])
    return await Database
      .insert([{
        comment: tourToAdd.comment,
        tourID: tourToAdd.tourID,
      }])
      .into('comments')
  }

  async getComments({ request }) {
    const tourID = request.all().tourID

    if (tourID != 'загрузка') {
      return await (
        Database.table('comments')
          .select('*')
          .where('tourID', tourID)
      )
    }
  }

  async makeOrderController({ request }) {
    const { tourID, active } = request.body

    return await Database
      .table('tours')
      .where('id', tourID)
      .update('active', active)
  }

  async sortByPriceUpController({ request }) {
    const countTours = request.all().countTours
    
    return await Database
      .select('*')
      .orderBy('price', 'asc')
      .limit(countTours)
      .into('tours')
  }

  async sortByPriceDownController({ request }) {
    const countTours = request.all().countTours

    return await Database
      .select('*')
      .orderBy('price', 'desc')
      .limit(countTours)
      .into('tours')
  }

  async loadMoreController({ request }) {
    const offsetLoad = request.all().countTours

    console.log(offsetLoad)
    return await Database
      .select('*')
      .limit(3)
      .offset(offsetLoad)
      .into('tours')
  }
}

module.exports = TourController
