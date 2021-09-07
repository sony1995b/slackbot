const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'
const USER_ID = 'user_id'
const EMAIL_ADDRESS = 'email_address'
const PHASH = 'p_hash'
const SECURITY_LEVEL = 'security_level'
const TEMP_JSON = 'temp_json'
/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
const TempService = {
    getJSON() {
        if(localStorage.getItem(TEMP_JSON)){
            return JSON.parse(localStorage.getItem(TEMP_JSON))
        }else{
            return {}
        }
    },
    saveJSON(value){
        localStorage.setItem(TEMP_JSON, JSON.stringify(value))
    }
}

class TokenService {
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    }

    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    }

    saveUserID(user_id) {
        localStorage.setItem(USER_ID, user_id)
    }

    getUserID() {
        return localStorage.getItem(USER_ID)
    }

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    }

    removeUserID() {
        localStorage.removeItem(USER_ID)
    }

    saveEmailAddress(email_address) {
        localStorage.setItem(EMAIL_ADDRESS, email_address)
    }

    getEmailAddress() {
        return localStorage.getItem(EMAIL_ADDRESS)
    }

    removeEmailAddress() {
        localStorage.removeItem(EMAIL_ADDRESS)
    }

    savePHash(p_hash) {
        localStorage.setItem(PHASH, p_hash)
    }

    getPHash() {
        return localStorage.getItem(PHASH)
    }

    removePHash() {
        localStorage.removeItem(PHASH)
    }

    saveSecurityLevel(security_level) {
        localStorage.setItem(SECURITY_LEVEL, security_level)
    }

    getSecurityLevel() {
        return localStorage.getItem(SECURITY_LEVEL)
    }

    removeSecurityLevel() {
        localStorage.removeItem(SECURITY_LEVEL)
    }

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    }

    saveRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    }

    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    }
}

export { TokenService, TempService }

export class TokenServicee {
}