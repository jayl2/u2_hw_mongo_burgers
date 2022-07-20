// create 5 burgers (at least 3 should be beef)
db.burgers.insertMany([
  { burger: 'beef', cheese: 'yes', ing: ['bacon', 'pickles'] },
  { burger: 'beef', cheese: 'no', ing: ['lettuce'] },
  { burger: 'chicken', cheese: 'yes', ing: ['bacon', 'pickles'] },
  { burger: 'chicken', cheese: 'no', ing: ['lettuce', 'bacon', 'pickles'] },
  { burger: 'beef', cheese: 'yes', ing: ['tomatoes', 'lettuce'] }
])
// find all the burgers
db.burgers.find({})
// show just the meat of each burger
db.burgers.find({}, { burger: 1 })
// show just the toppings of each burger
db.burgers.find({}, { ing: 1 })
// show everything but the cheese
db.burgers.find({}, { cheese: 0 })
// find all the burgers with beef
db.burgers.find({ burger: 'beef' })
// find all the burgers that are not beef
db.burgers.find({ burger: { $ne: 'beef' } })
// find the first burger with cheese
db.burgers.findOne({ cheese: 'yes' })
// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.updateOne({ cheese: 'yes' }, { $set: { cheese: 'double cheese' } })
// find the burger you updated to have double cheese
db.burgers.findOne({ cheese: 'double cheese' })
// find and update all the beef burgers to be 'veggie'
db.burgers.updateMany({ burger: 'beef' }, { $set: { burger: 'veggie' } })
// delete one of your veggie burgers
db.burgers.deleteOne({ burger: 'veggie' })
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burgers.deleteMany({ burger: 'veggie' })
// drop the collection
db.burgers.drop()
//Expected Output
//true

// drop the database
db.dropDatabase()

//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'
db.burgers.updateMany({}, { $rename: { cheese: 'pumpkinSpice' } })
// find all the burgers with ketchup (or another topping you used at least once)
db.burgers.find({ ing: 'lettuce' })
// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burgers.updateMany({}, { $pull: { ing: 'lettuce' } })
// add a topping of 'eggs' to all the beef burgers
db.burgers.updateMany({ burger: 'beef' }, { $push: { ing: 'eggs' } })
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
//Add a price to each burger, start with $5.00 for each burger
db.burgers.updateMany({}, { $set: { price: '$5.00' } })
