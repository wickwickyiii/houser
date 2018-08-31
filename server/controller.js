module.exports = {
  post: (req, res, next) => {
    const db = req.app.get("db");
    const {
      property_name,
      address,
      city,
      state,
      zip_code,
      img,
      monthly_mortgage,
      desired_monthly_rent
    } = req.body;
    db.post_house([
      property_name,
      address,
      city,
      state,
      zip_code,
      img,
      monthly_mortgage,
      desired_monthly_rent
    ])
      .then(() => res.sendStatus(200))
      .catch(err => res.status(500).json(console.log("whoops", err)));
  },
  get: (req, res, next) => {
    const db = req.app.get("db");
    db.read_houses()
      .then(houses => res.status(200).json(houses))
      .catch(err => res.status(500).json(console.log("homeless status", err)));
  },
  delete: (req, res, next) => {
    const db = req.app.get("db");
    db.delete_house(req.params.id)
      .then(() => res.status(200).json(console.log("deleted")))
      .catch(err => res.status(500).json(console.log(err)));
  }
};
