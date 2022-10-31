import axios from "../axios"

const sessionIdKey = 'guest-session-id'

export const createSessionId = () =>
    axios.get(`/authentication/guest_session/new?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)

export const getSessionId = () => sessionStorage.getItem(sessionIdKey);

export const setSessionId = value => sessionStorage.setItem(sessionIdKey, value);