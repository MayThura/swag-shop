export const NOTI_WISHLIST_CHANGED = "noti_wishlist_changed";

var observers = {};
let instance = null;

class NotificationService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }
    
    postNotification = (notiName, data) => {
        let obs = observers[notiName];
        for (var x = 0; x < obs.length; x++) {
            var obj = obs[x];
            console.log(obj);
            obj.callBack(data);
        }
    }
    
    removeObserver = (observer, notiName) => {
        var obs = observers[notiName];
        
        if (obs) {
            for (var x = 0; x < obs.length; x++) {
                if (observer === obs[x].observer) {
                    obs.splice(x,1);
                    observers[notiName] = obs;
                    break;
                }
            }
        }
    }
    
    addObserver = (notiName, observer, callBack) => {
        let obs = observers[notiName];
        if (!obs) {
            observers[notiName] = [];
        }
        
        let obj = {observer: observer, callBack: callBack};
        observers[notiName].push(obj);
    }
}

export default NotificationService;