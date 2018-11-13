'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Test extends Model {
    static get table () {
        return 'test'
      }

      static get primaryKey () {
        return 'id'
      }
}

module.exports = Test
