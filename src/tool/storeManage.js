import store from 'store'

class Token {
  static $token = store.get('token')

  get Token () {
    return Token.$token
  }

  set Token (obj) {
    store.set('token', obj)
    Token.$token = obj
  }

  clearToken () {
    Token.$token = null
    store.remove('token')
    return null
  }
}

class ShoppingCarHistory {
  static $history = store.get('ShoppingCar') || []

  get History () {
    return ShoppingCarHistory.$history
  }

  set History (token) {
    store.set('ShoppingCar', token)
    ShoppingCarHistory.$history = token
  }

  clearHistory () {
    ShoppingCarHistory.$history = []
    store.remove('ShoppingCar')
    return null
  }
}

const token = new Token()
const ShoppingCar = new ShoppingCarHistory()
export {
  token,
  ShoppingCar
}
