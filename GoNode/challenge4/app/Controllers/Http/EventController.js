'use strict'

const Event = use('App/Models/Event')
const moment = require('moment')

class EventController {
  async index ({ request }) {
    const { page, date } = request.get()

    let query = Event.query().with('user')

    if (date) {
      query = query.whereRaw(`"when"::date = ?`, date)
    }

    const events = await query.paginate(page)

    return events
  }

  async store ({ request, response, auth }) {
    const data = request.only(['name', 'where', 'when'])

    try {
      await Event.findByOrFail('when', data.when)

      return response.status(401).send({
        error: {
          message: 'Não é possível definir dois eventos no mesmo horário.'
        }
      })
    } catch (err) {
      const event = await Event.create({ ...data, user_id: auth.user.id })
      return event
    }
  }

  async show ({ params, response, auth }) {
    const event = await Event.findOrFail(params.id)

    if (event.user_id !== auth.user.id) {
      return response.status(401).send({
        error: {
          message: 'Apenas o criador do evento pode vê-lo.'
        }
      })
    }

    return event
  }

  async update ({ params, request, response, auth }) {
    const event = await Event.findOrFail(params.id)

    if (event.user_id !== auth.user.id) {
      return response.status(401).send({
        error: {
          message: 'Apenas o criador do evento pode edita-lo.'
        }
      })
    }

    const passed = moment().isAfter(event.when)

    if (passed) {
      return response.status(401).send({
        error: {
          message: 'Você não pode editar eventos passados.'
        }
      })
    }

    const data = request.only(['name', 'where', 'when'])

    try {
      const event = await Event.findByOrFail('when', data.when)
      if (event.id !== Number(params.id)) {
        return response.status(401).send({
          error: {
            message: 'Não é possível definir dois eventos no mesmo horário.'
          }
        })
      }
    } catch (err) {}

    event.merge(data)

    await event.save()

    return event
  }

  async destroy ({ params, response, auth }) {
    const event = await Event.findOrFail(params.id)

    if (event.user_id !== auth.user.id) {
      return response.status(401).send({
        error: {
          message: 'Apenas o criador do evento pode excluí-lo.'
        }
      })
    }

    const passed = moment().isAfter(event.when)

    if (passed) {
      return response.status(401).send({
        error: {
          message: 'Você não pode excluir eventos passados.'
        }
      })
    }

    await event.delete()
  }
}

module.exports = EventController
