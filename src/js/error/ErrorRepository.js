export default class ErrorRepository {
    constructor() {
        this.storageError = new Map([
        [100, 'Нельзя повысить уровень умершего!'],
        [200, 'Такого типа не существует!'],
        [300, 'Персонаж мертв!']
    ]);
    }

    translate(code) {
        if(!this.storageError.get(code)) {
            return 'Unknown error'
        }
        return this.storageError.get(code);
    }

    
}