export class Helper {
    static log(msg) {
        console.log(msg);
    }

    static RandomString(strLength = 8){
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(let i = 0; i < strLength; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    static CreateCookie(name, value, days){
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = `${name}=${value}${expires}; path=/`;
    }

    static ReadCookie(name){
        const nameEQ = `${name}=`;
        const cookies = document.cookie.split(';');
        for(let cookie of cookies) {
            let trimmedCookie = cookie;
            while (trimmedCookie.startsWith(' ')) trimmedCookie = trimmedCookie.substring(1, trimmedCookie.length);
            if (trimmedCookie.startsWith(nameEQ)) return trimmedCookie.substring(nameEQ.length, trimmedCookie.length);
        }
        return null;
    }

    static DestroyCookie(name) {
        this.CreateCookie(name, "", -1);
    }

    static StripTrailingSlash(str){
        if(str.length > 1 && str.charAt(str.length - 1) === "/") {
            str = str.substr(0, str.length - 1);
        }
        return str;
    }

    static Redirect(route = ''){
        window.location.hash = `#${route}`;
    }
}
