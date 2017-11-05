'use strict';
module.exports = function(apiRoutes) {
  var gallery = require('../controllers/galleryController');

  // todoList Routes
  apiRoutes.get('/listallimages', gallery.list_all_images);
    // .post(todoList.create_a_task);

  apiRoutes.get('/listfeaturedimages', gallery.list_featured_images);

  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};
