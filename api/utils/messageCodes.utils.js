const messageCodes = (code, data, order) => {
const codeArr =  [
    {
      code: "signup",
      subject: "Your registration on Pasion Argenta is complete",
      body:
      `Hi ${data.username}, you have registered to Pasion Argenta, if this was not you, please click on the following link... yeah, I know, there's no link, I mean, this site is fake, what did you expect?`,
        
    },
    {
      code: "orderCreated",
      subject: `Your order number:${order} has been created`,
      body: `Hi ${data.username} Your order, number:${order} has been created, we are probably not preparing anything to dispatch because this site is fake, have a lovely day, or night`
    },
    {
      code: "orderDispatched",
      subject: `Your order number:${order} has been dispatched!`,
      body: `Hi ${data.username} Your order, number: ${order} has been dispatched`

    },
    {
      code: "OrderCancelled",
      subject: `Your order number:${order} has been cancelled!`,
      body: `Hi ${data.username} Your order, number: ${order} has been cancelled by you. If you think this is a mistake, I'm sorry, we haven't programmed that yet, and we'll problably never do it because this projects ends this friday and I will not be around. Anyway, have a great day, you and your people`
    },
  ];
  return codeArr[code]
};

module.exports = messageCodes;
