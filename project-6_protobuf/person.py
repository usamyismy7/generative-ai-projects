from person_pb2 import Person

# Create a new person
person = Person()
person.name = "John Doe"
person.id = 123
person.email = "john.doe@example.com"

# Serialize to binary
serialized_data = person.SerializeToBinary()

# Deserialized from binary
new_person = Person()
new_person.ParseFromBinary(serialized_data)

print(new_person)