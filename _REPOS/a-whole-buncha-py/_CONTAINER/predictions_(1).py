# Imports from 3rd party libraries
import dash
from dash_core_components.Markdown import Markdown
from plotly.express import colors
import dash_bootstrap_components as dbc
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import pandas as pd
import plotly.express as px
from joblib import load
import numpy as np

# Imports from this application
from app import app

# 2 column layout. 1st column width = 4/12
# https://dash-bootstrap-components.opensource.faculty.ai/l/components/layout
column1 = dbc.Col(
    [
        dcc.Markdown('## Predictions:'),
        dcc.Markdown('#### Kickstarter Name'),
        dcc.Input(
            id = 'Name',
            placeholder= 'Enter name here...',
            type= 'text',
            value = '',
            className='mb-5',
            ),
        
    
        dcc.Markdown('#### Description'),
        dcc.Textarea(
            id = 'Desc',
            placeholder= 'Enter Description Here...',
            value = 'Enter Full Description Here',
            style={'width':'100%'},
            className='mb-5',    
        ),
        dcc.Markdown('''
                     #### Keywords
                     
                     Keywords must be entered with a dash in between with NO spaces
                     '''),
        dcc.Input(
            id= 'Keywords',
            placeholder= 'Enter-keywords-as-shown...',
            type= 'text',
            value = '',
            className= 'mb-5',
        ),
        
        dcc.Markdown('''
                     #### Backer Count
                     
                     Is your backer count greater than x?
                     '''),
        dcc.Dropdown(
            id = 'Backers_count',
            options =[
                {'label' : 'Yes', 'value' : '1'},
                {'label' : 'No', 'value': '0'}
            ],
            value='No',
            className='mb-5',
            ),
    ],
    md=4,
)

column2 = dbc.Col(
    [
        dcc.Markdown('##  ', className='mb-5'),
        dcc.Markdown('''
                     #### Currency
                     
                     Three letter acronym for origin of currency
                     '''),
        dcc.Input(
            id = 'Currency',
            type = 'text',
            value='USD',
            className='mb-5',
        ),
        dcc.Markdown('#### Country'),
        dcc.Input(
            id = 'Country',
            type = 'text',
            value = 'US',
            className = 'mb-5',
        ),
        dcc.Markdown('#### Duration'),
        dcc.Input(""),
        dcc.Markdown('#### Goal'),
        dcc.Input("")
    ]
)

column3 = dbc.Col(
    [
    dcc.Graph(id='pie-chart')
    ]
)

layout = dbc.Row([column1, column2, column3])

#@app.callback(
    #Output('pie-chart', 'figure'),
   # [Input("Name", "value"),
    # Input("Desc", "value"),
    # Input("Keywords", "value"),
    # Input("Backers_count", "value"),
   #  Input("Currency", "value"),
    # Input("Country", "value"),
   #  Input("Duration", "value"),])