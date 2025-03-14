
drop database if exists bookplatform;
create database bookplatform;
use bookplatform;

DROP TABLE if EXISTS book;
create table book(
	bid int auto_increment,
    bname varchar(50),
    bwriter varchar(20),
    bcontent varchar(100),
    bpwd varchar(20),
    constraint primary key(bid)
);

DROP TABLE if EXISTS review;
create table review(
	rid int auto_increment,
	rcontent varchar(100),
	rpwd varchar(20),
	bid int,
	constraint primary key(rid),
	constraint foreign key(bid) references book(bid)
);