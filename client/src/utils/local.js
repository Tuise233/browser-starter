const local = {
    setLocal(key = "", value = ""){
        localStorage.setItem(key, value);
    },

    getLocal(key = ""){
        return key == null ? null : localStorage.getItem(key);
    },

    removeLocal(key = ""){
        localStorage.removeItem(key);
    },
    
    clearLocal(){
        localStorage.clear();
    }
};

export default local;