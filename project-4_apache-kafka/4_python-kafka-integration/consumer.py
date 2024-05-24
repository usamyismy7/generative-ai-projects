from confluent_kafka import Consumer, KafkaException, KafkaError

# Configuration
conf = {
    'bootstrap.servers': 'localhost:9092',
    'group.id': 'mygroup',
    'auto.offset.reset': 'earliest'
}

# Create Consumer instance
consumer = Consumer(conf)

# Subscribe to topic
consumer.subscribe(['mytopic'])

# Poll for messages
try:
    while True:
        msg = consumer.poll(timeout=1.0)
        if msg is None:
            continue
        if msg.error():
            if msg.error().code() == KafkaError._PARTITION_EOF:
                print(f'End of partition reached {msg.topic()}/{msg.partition()}')
            elif msg.error():
                raise KafkaException(msg.error())
        else:
            print(f'Received message: {msg.value().decode("utf-8")}')
except KeyboardInterrupt:
    pass
finally:
    consumer.close()
