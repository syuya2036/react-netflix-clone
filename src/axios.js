import axios from 'axios'

// TMDB へのリクエストを行う axios インスタンスを作成する
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})

export default instance