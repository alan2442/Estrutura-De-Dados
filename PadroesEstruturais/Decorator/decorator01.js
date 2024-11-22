// Componente 
class ComponenteNotificador {
    enviar(msg) {
        console.log(`Enviando mensagem: ${msg}`)
    }
}


// Decorator Base
class DecoratorNotificador {
    constructor(componente) {
        this.componente = componente;
    }

    enviar(msg) {
        this.componente.enviar(msg)
    }
    
}


// Decorator Concreto 1 - Simulando SMS:
class NotificadorSMS extends DecoratorNotificador {
    enviar(msg) {
        super.enviar(msg);
        console.log(`Enviando mensagem por SMS: ${msg}`);
    }
}


// Decorator Concreto 2 - Simulando WhatsApp:
class NotificadorWhatsApp extends DecoratorNotificador {
    enviar(msg) {
        super.enviar(msg);
        console.log(`Enviando mensagem por WhatsApp: ${msg}`);
    }
}


// Decorator Concreto 3 - Simulando Email:
class NotificadorEmail extends DecoratorNotificador {
    enviar(msg) {
        super.enviar(msg);
        console.log(`Enviando mensagem por Email: ${msg}`);
    }
}


class NotificadorFacebook extends DecoratorNotificador {
    enviar(msg) {
        super.enviar(msg);
        console.log(`Enviando mensagem por Facebook: ${msg}`);
    }
}


// Interface de Utilização -----------------------------
const notificador = new ComponenteNotificador();
const notificadorSMS = new NotificadorSMS(notificador);
const notificadorWhatsApp = new NotificadorWhatsApp(notificador);
const notificadorEmail = new NotificadorEmail(notificador);
const notificadorFacebook = new NotificadorFacebook(notificador);

const mensagem = "Olá Mundo.."
notificadorWhatsApp.enviar(mensagem);
notificadorEmail.enviar(mensagem);
notificadorSMS.enviar(mensagem);
notificadorFacebook.enviar(mensagem);






