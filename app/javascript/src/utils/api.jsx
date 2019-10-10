class Api {
  _handleError(err) {
    if (err.status === 401) {
      sessionStorage.removeItem('auth')
      window.location = `${window.location.origin}/login`
      return Promise.reject()
    }
    return Promise.reject(err)
  }

  request(endpoint, options = {}) {

    const request = new Request(`${window.location.origin }${endpoint}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      credentials: 'include',
      ...options,
    })

    return fetch(request)
      .then(r => (r.status <= 200 ? r.json() : Promise.reject(r)))
      .catch(this._handleError)
  }
}

const api = new Api

export default api
