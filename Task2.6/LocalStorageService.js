class LocalStorageService {
    save(key, data){
        localStorage.setItem(key, data)
    }
    getData(key){
        localStorage.getItem(key)
    }
    remove(key, data){
        localStorage.removeItem(key)
    }
    clear(){
        localStorage.clear()
    }
}
const localStorageService = new LocalStorageService()