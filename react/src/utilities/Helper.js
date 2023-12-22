export class Helper {
    
    static log(msg) {
        console.log(msg);
    }     
    
    static RandomString(strLength){
        if(typeof strLength === 'undefined') { 
            strLength = 8;
        }

        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(let i=0; i < strLength; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;

    }

    static CreateCookie(name,value,days){
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }

        document.cookie = name + "=" + value + expires + "; path=/";
    }

    static ReadCookie(name){
        const nombreEQ = name + "=";
        const ca = document.cookie.split(';');
        for(const c of ca) {
            let recorteC = c.trim();
            if (recorteC.startsWith(nombreEQ)){
                return recorteC.substring(nombreEQ.length);
            }
        }
        return null;
    }

    static DestroyCookie(name) {
        this.CreateCookie(name,"",-1);
    }
    
    static StripTrailingSlash(str){

        // string is probably single '/', no need to strip last '/'
        if(str.length === 1) {
            return str;
        }
        else {
            if(str.charAt(str.length-1) === "/") { 
                str = str.substr(0, str.length - 1);
            }
            return str;
        }
    }

    static Redirect(route){
        if(route) {
            window.location.hash = '#' + route;
        } else {
             window.location.hash = '#';
        }
    }

}