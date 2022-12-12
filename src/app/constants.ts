export class LocalStorageKeys {
    public static PERSONS: string = "PERSONS";
}

export class States {
    public static persons: string = "persons";
    public static rxjs: string = "rxjs";
    public static login: string = "login";
}

export class Endpoints {
    private static baseUrl: string = "http://localhost:5000/"
    public static login: string = `${Endpoints.baseUrl}auth/login`
    public static userById: string = `${Endpoints.baseUrl}user/`
}

export class Values {
    public static GenderArr: string[] = [
        "Male",
        "Female",
        "Non-binary"
    ];
}
