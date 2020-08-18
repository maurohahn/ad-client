const adErrors = require('./adErrors.json');

/**
 * @param {String} err String with error
 * @param {String} lang String with selected language
 */
const get_adErrorMsgs = (err, lang) => {

  const errList = Object.values(adErrors[lang])

  let result = null;

  errList.filter(item => {
    if (err.indexOf(item.code) != -1) {
      result = item.msg;
    }
    if (item.code == 'genericError' && result == null) {
      result = item.msg
    }
  })

  return result

}

module.exports = get_adErrorMsgs;