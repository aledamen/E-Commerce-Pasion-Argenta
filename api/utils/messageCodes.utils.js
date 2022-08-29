const messageCodes = (code, data) => {
const codeArr =  [
    {
      code: "signup",
      subject: "Your registration on Pasion Argenta is complete",
      body:
      `Hi ${data.username}, you have registered to Pasion Argenta, if this was not you, please click on the following link`,
        
    },
    {
      code: "orderCreated",
      subject: `Your order number:${data.order} has been created`,
      body: `Hi ${data.username} Your order number:${data.order} has been created`
    },
    {
      code: "orderDispatched",

    },
    {
      code: "OrderCancelled",
    },
  ];
  return codeArr[code]
};

module.exports = messageCodes;
