'use strict'

const Model = use('Model')

class Event extends Model {
  static get dates () {
    return super.dates.concat(['when'])
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Event
