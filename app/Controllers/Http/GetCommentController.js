'use strict'

const Database = use('Database')

class GetCommentController {
  async index({ request }) {
    const tourID = request.all().tourID

    if (tourID != 'загрузка') {
      return await (
        Database.table('comments')
          .select('*')
          .where('tourID', tourID)
      )
    }
  }
}

module.exports = GetCommentController
