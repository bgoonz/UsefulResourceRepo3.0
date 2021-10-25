<!--


---
 'ReactJS : lazy loading large libraries'
excerpt: To keep the initial loading faster, we can lazy load the heavy library as
  we render the component
date: 2019-11-07 00:05:00 IST
updated: 2019-11-07 00:05:00 IST
categories: javascript
tags: reactjs
image: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/react-large-libraries/stijn-swinnen-145895-unsplash.resized.jpg
---
We tend to use different external libraries for various purposes. The size of those libraries varies from small/medium/large.
What happens when you want to use a large library only for a particular route?

It doesn't make any sense to load that library along with the initial bundle or with the vendor. Such large libraries are needed only when a user
navigates to that particular route.

This blog post will discuss how we can achieve this in a ReactJS application

![React lazy load heavy libraries](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/react-large-libraries/stijn-swinnen-145895-unsplash.resized.jpg){: width="100%"}
<center>Image by <a href="https://unsplash.com/@stijnswinnen?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Stijn Swinnen</a></center>

For this blog post, let's take the highcharts as the heavy library.

## <a class="anchor" name="without-lazy-load" href="#without-lazy-load"><i class="anchor-icon"></i></a>Without Lazy load

If you add basic `highcharts` it will be ~150KB (gzipped). So without lazyload, you will be shipping this 150KB in the main bundle itself.
You can see this in action on [now.sh][without_lazy_load] and code is on [github][without_lazy_load_github].

In this, we wrote `Chart` component which will be used for any highcharts usage in the project.
This component is already set with default options needed for the Charts for the whole project.

```jsx
// Chart.jsx
import React from 'react';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import noDataToDisplay from 'highcharts/modules/no-data-to-display';

noDataToDisplay(Highcharts);

class Chart extends React.Component {
  getDefaultOptions() {
    return {
      credits: {
        enabled: false
      },
      noData: {
        position: {
          x: 0,
          y: 0,
          align: 'center',
          verticalAlign: 'middle'
        }
      }
    };
  }
  render() {
    const options = {
      ...this.getDefaultOptions(),
      ...this.props.options
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default Chart;
```

Now when we need a `PieChart` we will use this `Chart` component and override the options.

```jsx
// PieChart.jsx
import React from 'react';

import Chart from './Chart';

class PieChart extends React.Component {
  getOptions = () => {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in January, 2018'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [
        // data
      ]
    };
  };

  render() {
    return <Chart options={this.getOptions()} />;
  }
}

export default PieChart;
```

![bundle without lazy load](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/react-large-libraries/without-lazy-load-bundles.png){: width="100%"}

And when you look into the network tab the whole bundle is downloaded even though it is not required.

![network without lazy load](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/react-large-libraries/without-lazy-load-network.png){: width="100%"}


## <a class="anchor" name="with-lazy-load" href="#with-lazy-load"><i class="anchor-icon"></i></a>With Lazy load

Next we will be converting this to lazyload the chart component.
To do this we don't have to change anything in `Chart.jsx`.

The only change will be in `PieChart.jsx`

```diff
// PieChart.jsx
import React from "react";

-import Chart from "./Chart";
+const Chart = React.lazy(() =>
+  import(/* webpackChunkName: 'chart' */ "./Chart")
+);

+const Loader = () => {
+  return <div>Loading...</div>;
+};

class PieChart extends React.Component {
  getOptions = () => {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie"
      },
      title: {
        text: "Browser market shares in January, 2018"
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %"
          }
        }
      },
      series: [
        // data 
      ]
    };
  };

  render() {
-   return <Chart options={this.getOptions()} />;
+   return (
+        <React.Suspense fallback={<Loader />}>
+            <Chart options={this.getOptions()} />;
+        </React.Suspense>
+    );
  }
}

export default PieChart;
```

The two main changes in the above code is
* `React.lazy` to load the dynamic import of `Chart.jsx`
* `React.Suspense` to load and render the component. while it loads library it will show the `<loader/>` given in `fallback` option.

Lets see the different in the bundle sizes and how they gets loaded.

![bundle with lazy load](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/react-large-libraries/withlazyload-bundles.png){: width="100%"}

In the network tab when we are in `Home` route it loads only initial bundle.

![network (initial) with lazy load](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/react-large-libraries/withlazyload-initial-network.png){: width="100%"}

And then we me navigates to `Chart` route it loads the highcharts the heavy library.

![network with lazy load](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/react-large-libraries/withlazyload-network.png){: width="100%"}

{: style="text-align:center"}
![lazy load chart](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/react-large-libraries/lazyload.gif)

See this in action on [now.sh][with_lazy_load] and code is on [github][with_lazy_load_github].


[without_lazy_load]: https://withoutlazyload.rsknow.now.sh/
[with_lazy_load]: https://withlazyload.rsknow.now.sh/
[without_lazy_load_github]: https://github.com/revathskumar/react-lazy-load/tree/master/without-lazy-load
[with_lazy_load_github]: https://github.com/revathskumar/react-lazy-load/tree/master/with-lazy-load
