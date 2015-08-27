# [3D Repository][3dr]

The [ADL 3D Repository][github] is a social web application for uploading, discovering, and downloading 3D models. The server is written in C# with frontend templates written in ASP.NET and a MySQL database handling the storage of relational data.

When I started at ADL, one of the first items I was tasked with completing was adding a simple word cloud to the 3DR. This meant learning how to use the 3DR's data access layer (DAL) to pull relevant information, modifying relevant endpoints, and wiring up ASP.NET templates. Easy enough, I thought.

However, during my initial exploratory phase, I made a number of discoveries that had serious security implications. I immediately made my concerns known within the organization and I promptly led an effort to immediately increase security in the 3DR.

![3DR Screenshot][screenshot]

## Role
* Full stack developer, part of larger team
* Led an effort to dramatically increase security
* Created a word cloud of most popular tags

## Tech
* C#
* [ASP.NET][asp]
* [MySQL][mysql]

[github]: https://github.com/adlnet/3D-Repository
[3dr]: https://3dr.adlnet.gov/
[screenshot]: ../../img/3dr.png

[mysql]: https://www.mysql.com/
[asp]: http://www.asp.net/
