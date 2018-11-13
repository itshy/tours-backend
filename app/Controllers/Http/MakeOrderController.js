'use strict'

const Database = use('Database')

class MakeOrderController {
  async index({ request }) {
    const { tourID, active } = request.body

    return await Database
      .table('tours')
      .where('id', tourID)
      .update('active', active)
  }
}

module.exports = MakeOrderController
