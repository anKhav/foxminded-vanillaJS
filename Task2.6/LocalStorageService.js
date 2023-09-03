class LocalStorageService {
    save(key, data){
        localStorage.setItem(key, JSON.stringify(data))
    }
    getData(key){
        return JSON.parse(localStorage.getItem(key))
    }
    clear(){
        localStorage.clear()
    }
}
const localStorageService = new LocalStorageService()