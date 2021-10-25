
# super class
class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age



    def speak(self):
        return "I am an Animal"

# sub class
class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age)
        self.breed = breed
    

animal1 = Dog("Dave", 100, "Collie")
animal2 = Dog("Sue", 10, "Pincher")
animal3 = Dog("Fim", 1, "Corgi")

# print(dir({}))



animal_list = [animal1, animal2, animal3]
animal_dict = { "dave": animal1, "sue": animal2, "jim": animal3 }

# for k in animal_dict:
#     if "D" in animal_dict[k].name[0]:
#         print(animal_dict[k].name)

# for animal in animal_list:
#     if animal.name[0] >= "C" and animal.name[0] <= "G":
#         print(animal.name) 
b = [animal.name for animal in animal_list if animal.name[0] >= "C" and animal.name[0] <= "G"]
# [k.name for k in animal_dict]
# animal_list[0]
# animal1
print(b)
# animal_dict["sue"].speak()
# animal2.speak()


