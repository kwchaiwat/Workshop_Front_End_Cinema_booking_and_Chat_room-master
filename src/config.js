const PROTOCAL = 'http://'
const DOMAIN = '192.168.253.44'
const PORT = '3000'
const API = `${PROTOCAL}${DOMAIN}:${PORT}`

const DOMAIN2 = 'localhost'
const PORT2 = '8080'
const API2 = `${PROTOCAL}${DOMAIN2}:${PORT2}`
const APINOTHTTP = `${DOMAIN}:${PORT}`
module.exports = {
  API,
  APINOTHTTP,
  API2
}
