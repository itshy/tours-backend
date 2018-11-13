'use strict'

const Database = use('Database')

class CommentController {
  async index({ request }) {
    const tourToAdd = request.only(['comment', 'tourID'])
    return await Database
      .insert([{
        comment: tourToAdd.comment,
        tourID: tourToAdd.tourID,
      }])
      .into('comments')
  }
}

module.exports = CommentController
