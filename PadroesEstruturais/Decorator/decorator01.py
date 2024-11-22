# Componente
class ComponenteNotificador:
    def enviar(self, msg):
        print(f"Enviando mensagem: {msg}")

# Decorador Base:
class DecoradorNotificador:
    def __init__(self, componente):
        self.componente = componente
    
    def enviar(self, msg):
        self.componente.enviar(msg)

# Decorador Concreto 1 - Simulando SMS:
class NotificadorSMS(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f"Enviando mensagem SMS: {msg}")

# Decorador Concreto 2 - Simulando WhatsApp:
class NotificadorWhatsApp(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f"Enviando mensagem WhatsApp: {msg}")
    
# Decorador Concreto 3 - Simulando Email:
class NotificadorEmail(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f"Enviando mensagem Email: {msg}")
    
# Interface de Utilização ------------------------------------
notificador = ComponenteNotificador()
notificadorSMS = NotificadorSMS(notificador)
notificadorWhatsApp = NotificadorWhatsApp(notificador)
notificadorEmail = NotificadorEmail(notificador)

mensagem = "Ola Mundo pelo Python... "

notificadorWhatsApp.enviar(mensagem)
notificadorEmail.enviar(mensagem)
notificadorSMS.enviar(mensagem)