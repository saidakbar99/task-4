import {makeAutoObservable} from "mobx"
import AuthService from "../services/AuthService"

export default class Store {
    user = {}
    isAuth = false
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }

    setLoading(bool) {
        this.isLoading = bool
    }

    async login(username, password) {
        try {
            const response = await AuthService.login(username, password)
            sessionStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            return response.status
        } catch (e) {
            console.error(e.response?.data?.message)
            return e.response?.status
        }
    }

    async registration(username, password, email ) {
        try {
            const response = await AuthService.registration(username, password, email)
            sessionStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.error(e.response?.data?.message)
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            sessionStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        } catch (e) {
            console.error(e.response?.data?.message)
        }
    }
}