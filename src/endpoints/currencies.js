import AbstractEndpoint from '../endpoint'

export default class CurrenciesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/currencies'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
  }
}
