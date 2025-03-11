-- ---------------------- day08 ---------------------------------- --

DROP database if EXISTS productsample;
create database productsample;
use productsample;
DROP TABLE if EXISTS products;
create table products(
   id int auto_increment ,
    name varchar(20) ,
    price int ,
    comment longtext ,
    constraint primary key ( id )
);
-- ---------------------- ------ ---------------------------------- --
