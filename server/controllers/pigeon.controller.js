'use strict';

const { Pigeon } = require('../../config/db');
const { messages } = require('./../helper');

module.exports = {
  create(req, res) {
    const assignPigeon = Object.assign({}, req.body);
    Pigeon.create(assignPigeon)
      .then(pigeon => res.status(201).json({
        'pigeon': pigeon,
        'message': messages.createPigeon,
        'view': messages.success}
      ))
      .catch(error => res.status(400).json({
        'error': error,
        'message': messages.pigeonNotCreate,
        'view': messages.danger
      }));
  },

  list(req, res) {
    // const userId = req.decoded.id;
    // Guest.findAll({
    //   where: {
    //     user_id: userId
    //   },
    //   include: [Event]
    // }).then(guestEvents => {
    //   Event.findAll({
    //     where: {
    //       owner: userId
    //     },
    //     order: [
    //       ['createdAt', 'DESC']
    //     ]
    //   })
    //   .then(events => res.status(200).send({myEvents: events, myInvitations: guestEvents}))
    //   .catch(error => res.status(400).send(error));
    // });
  },

  retrieve(req, res) {
    // const eventId = req.params.id;
    // const userId = req.decoded.id;
    // Event.findById(eventId)
    // .then(event =>
    //   Guest.findOne({
    //     where: {
    //       event_id: eventId,
    //       user_id: userId
    //     }
    //   }).then(guest => {
    //     const status = guest && guest.status;
    //     return event && (guest || event.owner === userId) &&
    //     res.status(200).send({event, status}) ||
    //     res.status(400).json({
    //       'message': messages.eventNotFound,
    //       'view': messages.danger
    //     });
    //   })
    // )
    // .catch(error => res.status(400).json({
    //   'error': error,
    //   'message': messages.eventNotFound,
    //   'view': messages.danger
    // }));
  },

  update(req, res) {
    // Event.findById(req.params.id).then(event => {
    //   if (event.dataValues.owner !== req.decoded.id || !event) {
    //     res.status(404).json({
    //       'message': messages.eventNotFound,
    //       'view': messages.danger
    //     });
    //   }
    //   const updatedEvent = Object.assign({}, req.body);
    //   (event.status_event === 'draft') &&
    //   event.updateAttributes(updatedEvent)
    //   .then(event =>
    //   (event.status_event === 'public') &&
    //   res.status(200).json({
    //     'event': event,
    //     'message': messages.publishEvent,
    //     'view': messages.success
    //   }) ||
    //   res.status(200).json({
    //     'event': event,
    //     'message': messages.updateEvent,
    //     'view': messages.success
    //   }))
    //   .catch(error => res.status(400).json({
    //     'error': error,
    //     'message': messages.eventNotUpdate,
    //     'view': messages.danger
    //   })) || res.status(403).json({
    //       'message': messages.accessDenied,
    //       'view': messages.danger
    //     });
    // })
    // .catch(error => res.status(400).json({
    //   'error': error,
    //   'message': messages.eventNotFound,
    //   'view': messages.danger
    // }));
  },

  destroy(req, res) {
    // Event.findById(req.params.id).then(event => {
    //     if (event.dataValues.owner !== req.decoded.id || !event) {
    //       res.status(404).json({
    //         'message': messages.eventNotFound,
    //         'view': messages.danger
    //       });
    //     }
    //     (event.status_event === 'draft') &&
    //       event.destroy()
    //       .then(() => res.status(200).json({
    //         'message': messages.eventDeleted,
    //         'view': messages.success
    //       }))
    //       .catch(error => res.status(400).json({
    //         'error': error,
    //         'message': messages.eventNotDeleted,
    //         'view': messages.danger
    //       })) ||
    //       res.status(403).json({
    //         'message': messages.accessDenied,
    //         'view': messages.danger
    //       });
    //   })
    //   .catch(error => res.status(400).json({
    //     'error': error,
    //     'message': messages.eventNotFound,
    //     'view': messages.danger
    //   }));
  }
};