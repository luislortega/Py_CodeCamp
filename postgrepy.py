# install psycopg2
import psycopg2
from pprint import pprint

class DatabaseConnection:
    def __init__(self):
        try:
            # WARNING! the port crash the app.
            self.connection = psycopg2.connect("dbname='python' user='postgres' host='localhost' password='1298Luis'")
            self.connection.autocommit = True
            self.cursor = self.connection.cursor()
        except:
            pprint("Cannot connect to database")
    
    def create_table(self):
        create_table_command = "CREATE TABLE pet(id serial PRIMARY KEY, name varchar(100))"
        self.cursor.execute(create_table_command)
        pprint("new table")

    def insert_new_record(self):
        new_recor = ("misameow")
        insert_command = "INSERT INTO pet(name) VALUES('lol')"
        pprint(insert_command)
        self.cursor.execute(insert_command)

if __name__ == '__main__':
    database_connection = DatabaseConnection()
    #database_connection.create_table()
    database_connection.insert_new_record()