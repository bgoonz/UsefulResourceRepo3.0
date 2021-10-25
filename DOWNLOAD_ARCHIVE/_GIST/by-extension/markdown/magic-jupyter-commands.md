# 1\. Displaying Plots

Chances are, the `%matplotlib inline` is one of the earliest magic commands you have ever encountered. It is used to display matplotlib plots onto the notebook directly, such as the following:

import matplotlib.pyplot as plt\
import numpy as np%matplotlib inline

And now we are going to plot a scatter plot

a = np.linspace(0,1,5)\
b = np.linspace(1,2,5)plt.scatter(a,b)

The resulting graph will look like this in your notebook

![](https://miro.medium.com/max/30/1*ae3EJo2lbz2RBaPUfT5n5A.png?q=20)

![](https://miro.medium.com/max/415/1*ae3EJo2lbz2RBaPUfT5n5A.png)

matplotlib inline magic command (image from author)

# 2\. Interactive Plotting

Another useful magic command is `%matplotlib widget` that enables your plots to be interactive.

You can activate this magic command by:

- `conda install -c conda-forge ipympl`
- `jupyter nbextension enable --py widgetsnbextension`

After completing the installation process, add it into your notebook such as the following:

import matplotlib.pyplot as plt\
import pandas as pd%matplotlib widget

And plotting it as per normal:

iris = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')plt.scatter('sepal_length', 'petal_width', data=iris)

![](https://miro.medium.com/freeze/max/30/1*pYpkr67Iv29ZgCH7Lv6jTQ.gif?q=20)

![](https://miro.medium.com/max/655/1*pYpkr67Iv29ZgCH7Lv6jTQ.gif)

interactive plot (image from author)

# 3\. Checking and Setting Environment Variable

You can check and set your environment variable easily too using the `%env` command:

- check all of your current environment variables: `%env`
- check specific environment variable: `%env <NAME>` (e.g. `%env HOME` )
- set environment variable: `%env <NAME> <NEW VALUE>` (e.g. `%env HOME /user/home` )

# 4\. Running an External File

You can run an external Python script using the `%run <FILENAME.py>` magic command. For instance,

%run hello_world.py

# 5\. Checking Code Execution Time

Sometimes you want to just check how fast (or slow) your program or your piece of code is running. You can now easily do this using the `%%time` in the particular cell that you want to track.

![](https://miro.medium.com/max/30/1*cQQs66Vr-kdRPUgfPHniDA.png?q=20)

![](https://miro.medium.com/max/395/1*cQQs66Vr-kdRPUgfPHniDA.png)

checking execution time (image from author)

# 6\. Copying Code to Another File

Sometimes you want to copy and paste a block of code to an external file, say as a Python script. Now you can easily do this by using `%%writefile <FILENAME>` . An example would be:

%%writefile hello_world.pydef hello_world():\
 print("hello world")

The resulting file of `hello_world.py` will contain our newly written function!

# 7\. Displaying Content of a File

Similar to `cat` in any unix-based OS, we have the `%pycat <FILENAME>` to print out the content of any file. For instance,

%pycat hello_world.py

will give us

![](https://miro.medium.com/max/30/1*4mVj42a3OdY2tx51QDYVag.png?q=20)

![](https://miro.medium.com/max/219/1*4mVj42a3OdY2tx51QDYVag.png)

printout from %pycat (image from author)

# 8\. Listing Variables

The magic command `%who` is especially useful to check what are some of the running variables currently stored in-memory.

If we have the following:

a = [1,2,3]\
b = "hi there"%who

The printout will look something like this, indicating the variables `a` and `b` (and `np` as the previously loaded numpy library).

![](https://miro.medium.com/max/30/1*jmNy3gYZpF0G51SVurZTqQ.png?q=20)

![](https://miro.medium.com/max/162/1*jmNy3gYZpF0G51SVurZTqQ.png)

%who magic command (image from author)

# 9\. Acquiring Object's Details

In addition to `%who` , we can further inspect our variable of interest using `%pinfo <VARIABLE>` . Using our variables `a` and `b` above, we can run the following:

%pinfo a

And the printout will look something like this:

![](https://miro.medium.com/max/30/1*LUpym5vsRIr8b-ZzoLDLdg.png?q=20)

![](https://miro.medium.com/max/472/1*LUpym5vsRIr8b-ZzoLDLdg.png)

%pinfo (image from author)

Notice how it provides us with the `type` , `content` , and other information pertaining to the variable we are currently inspecting.

# 10\. Sharing Data Across Notebooks

If you have multiple data across notebooks that need to be shared, you can easily do so by using the `%store` command. Using our example above, we can store the variable `a` as in

%store a

and retrieve it on another notebook by passing in the `-r` argument as in

%store -r a

# 11\. Autosaving

This is probably one of the most important magic commands out there. It avoids so many heartbreaks and tears from unsaved progress! The magic command can be used simply as follows:

%autosave <DURATION_IN_SECONDS>

So if you want to autosave your notebook every 120 seconds, you can run

%autosave 120

# 12\. Listing all Magic Commands

This is probably the most useful magic commands of all: listing all available magic command by running `%lsmagic` .

![](https://miro.medium.com/max/30/1*OLIydEG9cOBCKn3gcDuiFQ.png?q=20)

![](https://miro.medium.com/max/709/1*OLIydEG9cOBCKn3gcDuiFQ.png)

listing all magic command (image from author)

# Concluding Remarks

That's it for our tutorial. I hope you learn something useful from this post. We have discussed some of the more popular magic commands in Python that can be of valuable tools to save up time and troubles. As always, if you have more cool magic tools that you want to share with us, do leave the suggestions in the response section!
