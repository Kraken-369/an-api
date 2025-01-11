const db = require('../connect/db');

const getProfessional = async (req, res) => {
  try {
    const dbInstance = db.getDB();
    const professional = await dbInstance.collection('professional').find({}).toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(professional[0]);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}

module.exports = { getProfessional };