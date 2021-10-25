import csv

import boto3


def get_available_methods(service):
    client = boto3.client(service)
    all_attributes = dir(client)
    available_methods = [attribute for attribute in all_attributes if callable(getattr(client, attribute))]
    available_methods = [i for i in available_methods if not i.startswith('_')]
    return available_methods


with open('aws_services.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerow(['ranking', 'method', 'service'])
    counter = 0
    sess = boto3.Session()
    services = sess.get_available_services()
    for service in services:
        methods = get_available_methods(service)
        for method in methods:
            print("{}, {}, {}".format(counter, method, service))
            writer.writerow([counter, method, service])
            counter += 1