# Imports from 3rd party libraries
import dash
from dash_core_components.Dropdown import Dropdown
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
            style={'width':'70%'},
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
        
        dcc.Markdown('#### Number of Backers'),
        dcc.Input(
            id = 'Backers_count',
            type = 'text',
            placeholder = '10',
            className = 'mb-5',
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
            placeholder='USD',
            className='mb-5',
        ),
        dcc.Markdown('#### Country'),
        dcc.Input(
            id = 'Country',
            type = 'text',
            placeholder = 'US',
            className = 'mb-5',
        ),
        dcc.Markdown('''
                     #### Duration
                     
                     How many days will your campaign run?
                     '''),
        dcc.Input(
            id = 'Duration',
            type = 'text',
            placeholder = '5',
            className = 'mb-5',
        ),
            
        dcc.Markdown('''
                     #### Goal (USD)
                     '''),
        dcc.Textarea(
            id= 'Goal',
            value= '1000',
            style={'width': '70%', 'height': 30},
            className= 'mb-5'
        ),
        dbc.Button('Predict My Success!', id= 'button', color='primary', n_clicks=0)
    ]
)

column3 = dbc.Col(
    [
    dcc.Graph(id='pie-chart')
    ]
)

layout = dbc.Row([column1, column2, column3])

@app.callback(
    Output("pie-chart", "figure"), 
    [Input("Name", "value"),
     Input("Keywords", "value"),
     Input("Desc", "value"),
     Input("Backers_count", "value"),
     Input("Country", "value"),
     Input("Currency", "value"), 
     Input("Duration", "value"),
     Input("Goal", "value"),
     Input("button", 'n_clicks')])
def predict(name, keywords, desc, backers_count, country, currency, duration, goal,n_clicks):
        NameLen = len(str(name))
        keywordsLen = len(str(keywords))
        descLen = len(str(desc))
        goalint = int(goal)
        df = pd.DataFrame(
            columns=['NameLen', 'keywordsLen', 'descLen', 'backers_count','country', 'currency','duration', 'goal'], 
            data=[[NameLen, keywordsLen, descLen, backers_count, country, currency, duration, goalint]]
        )
        pipeline = load('Model/pipeline.joblib')
        y_pred = pipeline.predict_proba(df)[0]*100
        formatd0 = np.round(y_pred, decimals = 2)
        data = {'one': ['Value1', ['Value2']]}
        df1 = pd.DataFrame(data, columns= ['one'])
        fig0 = px.pie(df1, names= ['Succeed', 'Fail'], color_discrete_sequence=px.colors.sequential.RdBu)
        fig0.update_layout(margin=dict(t=0, b=0, l=10, r=0))
        df2 = pd.DataFrame(data = formatd0, columns = ['one'])
        fig = px.pie(df2, values= df2['one'], names=['Succeed', 'Fail'], color_discrete_sequence=px.colors.sequential.RdBu)
        fig.update_layout(margin=dict(t=0, b=0, l=10, r=0))
        if n_clicks == 0:
            return fig0
        else:
            return fig
    