const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for voting");
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const recipientsFormat = recipients
      .split(",")
      .map(email => ({ email: email.trim() }));

    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipientsFormat,
      _user: req.user.id,
      dateSend: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();

      req.user.credits -= 1;

      const user = await req.user.save();

      res.status(200).send(user);
    } catch (error) {
      res.status(422).send({ message: error.message });
    }
  });
};
