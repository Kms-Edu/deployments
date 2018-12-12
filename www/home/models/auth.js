import axios from 'axios'
import { effect } from 'easy-peasy';

export default {
  auth: {
    token: null,
    login: effect(async (dispatch, payload, getState) => {
      const loginUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:3001/' : '/login'
      const loginRequest = axios.post(loginUrl, {id_token: payload.tokenId})
      try {
        const [loginResponse] = await Promise.all([loginRequest])
        const { token } = loginResponse.data
        if (token) {
          localStorage.setItem('token', token)
          dispatch.auth.tokenSaved({token})
        }
      } catch (error) {
        dispatch.auth.tokenSaved({token: null})
      }
    }),
    logout: effect(async (dispatch, payload, getState) => {
      const currentToken = getState().auth.token
      const logoutUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:3001/' : '/logout'
      const logoutRequest = axios.post(logoutUrl, {id_token: currentToken})
      try {
        await Promise.all([logoutRequest])
        localStorage.removeItem('token')
        dispatch.auth.tokenSaved({token: null})
      } catch (error) {
        dispatch.auth.tokenSaved({token: null})
      }
    }),
    tokenSaved: (state, payload) => {
      state.token = payload.token
    }
  }
}


