class Singleton:
    instance = None

    def __new__(cls):
        if cls.instance is None:
            cls.instance = super().__new__(cls)
            cls.instance.value = 0
        return cls.instance
    
    def increment(self):
        self.value += 1
        print(f"Value: {self.value}")



# Cliente
s1 = Singleton()
s2 = Singleton()
s3 = Singleton()
s4 = Singleton()

print (s1 == s2)    # True

s1.increment()
s2.increment()
s3.increment()
s4.increment()