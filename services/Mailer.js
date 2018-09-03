const sendgrid = require("sendgrid");
const keys = require("../config/keys");
const helper = sendgrid.mail;

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    console.log("key", keys.sendGridKey);

    this.from_email = new helper.Email("no-replay@emaily.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);

    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    console.log(this.recipients);
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });

    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON()
    });

    try {
      const response = await this.sgApi.API(request);
      return response;
    } catch (errr) {
      console.log("errorrrrrrrrrr", errr.response.body);
    }
  }
}

module.exports = Mailer;