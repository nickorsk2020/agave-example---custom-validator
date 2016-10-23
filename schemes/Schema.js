let Schema = {
    "nameform":"register_form",
    "errorForm":"Данные заполнены не верно",
    "classes": {
        "errorForm":"error-form-validate"
    },
    "elements": {
        "name": {
            "type":'input',
            "classes":{
                "label":"",
                "input":""
            },
            "props": {
                "name": "Имя",
                "type": "text"
            },
            "value": "",
            "validators": [
                {
                    "type": "notNull",
                    "error": "Введите ваше имя"
                }
            ]
        },
        "surname": {
            "type":'input',
            "classes":{
                "label":"",
                "input":""
            },
            "props": {
                "name": "Фамилия",
                "type": "text"
            },
            "value": "",
            "validators": [
                {
                    "type": "notNull",
                    "error": "Введите вашу фамилию"
                }
            ]
        },
        "email": {
            "type":'input',
            "classes":{
                "label":"",
                "input":""
            },
            "props": {
                "name": "Емейл",
                "type": "email"
            }
            ,
            "value": "",
            "validators": [
                {
                    "type": "notNull",
                    "error": "Email не должен быть пустым"
                },
                {
                    "type": "isEmail",
                    "error": "Должно быть email"
                }
            ]
        },
        "password": {
            "type":'input',
            "classes":{
                "label":"",
                "input":""
            },
            "props": {
                "name": "Пароль",
                "type": "password"
            }
            ,
            "value": "",
            "validators": [
                {
                    "type": "notNull",
                    "error": "Пароль не должен быть пустым"
                },
                {
                    "type": "leastOneUpperCase",
                    "error": "Пароль должен содержать как минимум одну большую букву и одну цифру"
                },
                {
                    "type": "leastOneDigit",
                    "error": "Пароль должен содержать как минимум одну большую букву и одну цифру"
                }
            ]
        },
        "password_confirm": {
            "type":'input',
            "classes":{
                "label":"",
                "input":""
            },
            "props": {
                "name": "Повторите пароль",
                "type": "password"
            }
            ,
            "value": "",
            "validators": [
                {
                    "type":"custom",
                    "validator":function (Result) {
                        let Form = Result.Form;
                        let password = Form.getValueElement('password');
                        let password_confirm = Form.getValueElement('password_confirm');
                        if (password_confirm != password) {
                            return false;
                        }
                        return true;
                    },
                    "error":"Пароли не совпадают"
                }
            ]
        },
        "submit": {
            "type":'submit',
            "classes":{
                "button":"btn btn-primary",
            },
            "props": {
                "name":"Регистрация"
            }
        }
    }
};
export  default Schema;