import sqlite3
from flask_sqlalchemy import sqlalchemy
import pandas as pd

# setup connection to sqlite database
engine = sqlalchemy.create_engine('sqlite:///spotify_songs_db.sqlite3')
sq_con = sqlite3.connect('spotify_songs_db.sqlite3')
sq_curs = sq_con.cursor()

# load the data into a pandas dataframe and set the index
song_data = pd.read_csv('data/data_o_clean.csv')
# song_data.rename(columns={'Unnamed: 0': 'id'}, inplace=True)
# song_data.set_index('id', inplace=True)

# load the dataframe into a sqlite3 database
song_data.to_sql('data_o_clean', con=engine, if_exists='replace')
