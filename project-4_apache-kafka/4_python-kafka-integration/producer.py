from confluent_kafka import Producer

# Configuration
conf = {'bootstrap.servers': 'localhost:9092'}

# Create Producer instance
producer = Producer(conf)

# Function to handle message delivery reports
def delivery_report(err, msg):
    if err is not None:
        print(f"Message delivery failed: {err}")
    else:
        print(f"Message delivered to {msg.topic()} [{msg.partition()}]")
        print(f"Delivered message: {msg.value().decode('utf-8')} from topic: {msg.topic()}")

# Produce a message
producer.produce('mytopic', key='key', value='Lorum Ipsum dolor sit', callback=delivery_report)

# Wait for any outstanding messages to be delivered and delivery reports to be received
producer.flush()
