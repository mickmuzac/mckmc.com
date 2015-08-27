# [xAPI Dashboard][dashboard]

The xAPI Dashboard is a Javascript library designed to simplify the process of extracting meaningful aggregate data from [Experience API (xAPI)][xAPI] statements. It is composed of two parts. The first part, the Collection class, enables developers to run SQL-like queries, filters, and aggregations over xAPI data. The second part, the XAPIDashboard class, can generate numerous types of charts and visualizations based on that aggregated xAPI data.

The project began in early 2014, a few weeks after an [ADL][adl]-hosted [xAPI][xAPI] plugfest event. During that event (while the xAPI was still relatively new), a presentation was given highlighting the power and versatility of the xAPI. However, all queries, aggregations, and visualizations were hard-coded and manually generated for that specific presentation. I thought there had to be a better, more generalizable and reusable way. Thus, the xAPI Dashboard was born.

![xAPI Dashboard Screenshot][screenshot]

## Role
* Original developer
* Worked as part of a two-man team

## Tech
* [D3][d3]
* [NVD3][nvd3]
* [xAPI][xAPI]
* [xAPI Wrapper][wrapper]

[d3]: http://d3js.org
[nvd3]: http://nvd3.org
[screenshot]: https://raw.githubusercontent.com/adlnet/xAPI-Dashboard/master/extra/chart_final.png
[dashboard]: https://github.com/adlnet/xAPI-Dashboard
[adl]: http://adlnet.gov
[xAPI]: http://adlnet.gov/capabilities/tla/experience-api.html
[wrapper]: https://github.com/adlnet/xAPIWrapper
