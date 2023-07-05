const notFound = (req,res)=> res.status(404).send('Route doesnt not exists')

module.exports = notFound;