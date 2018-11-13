'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ToursSchema extends Schema {
  up () {
    this.create('tours', (table) => {
      table.increments()
      table.string('name').nullable()
      table.string('about').nullable()
      table.integer('price').nullable()
      table.integer('rate').nullable()
      table.boolean('active').nullable()
      table.boolean('img').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tours')
  }
}

module.exports = ToursSchema
