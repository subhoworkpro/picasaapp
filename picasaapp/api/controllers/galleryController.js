'use strict';


// var mongoose = require('mongoose'),
//   Task = mongoose.model('Tasks');

exports.list_all_images = function(req, res) {
  res.json([{"vote_count":2906,"id":346364,"video":false,"vote_average":7.4,"title":"It","popularity":783.749289,"poster_path":"\/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg","original_language":"en","original_title":"It","genre_ids":[53,27,18],"backdrop_path":"\/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg","adult":false,"overview":"In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.","release_date":"2017-09-05"},{"vote_count":4847,"id":211672,"video":false,"vote_average":6.4,"title":"Minions","popularity":630.052201,"poster_path":"\/q0R4crx2SehcEEQEkYObktdeFy.jpg","original_language":"en","original_title":"Minions","genre_ids":[10751,16,12,35],"backdrop_path":"\/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg","adult":false,"overview":"Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.","release_date":"2015-06-17"},{"vote_count":1276,"id":335984,"video":false,"vote_average":7.6,"title":"Blade Runner 2049","popularity":388.556363,"poster_path":"\/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg","original_language":"en","original_title":"Blade Runner 2049","genre_ids":[28,9648,878,53],"backdrop_path":"\/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg","adult":false,"overview":"Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.","release_date":"2017-10-04"}]);
};




// exports.create_a_task = function(req, res) {
//   var new_task = new Task(req.body);
//   new_task.save(function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.delete_a_task = function(req, res) {


//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };


