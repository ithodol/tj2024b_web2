--drop database if exists springweb;
--create database springweb;
--use springweb;

-- ---------------------- day13 ------------------------------
DROP TABLE if EXISTS day13users;
CREATE TABLE day13users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    money INT UNSIGNED DEFAULT 0
);

-- -------------------------- day11 --------------------------
--DROP TABLE IF EXISTS day11products;
--CREATE TABLE day11products (
--    product_id INT PRIMARY KEY AUTO_INCREMENT, -- 상품 ID (자동 증가)
--    product_name VARCHAR(255) NOT NULL,        -- 상품명
--    stock_quantity INT NOT NULL                -- 재고 수량
--);


-- -------------------------- web --------------------------

--DROP TABLE if EXISTS member;
--CREATE TABLE member (
--    mno   INT UNSIGNED AUTO_INCREMENT,  -- 회원 번호 (기본키)
--    mid   VARCHAR(50) NOT NULL UNIQUE,     -- 회원 아이디
--    mpwd  VARCHAR(255) NOT NULL,           -- 비밀번호
--    mname VARCHAR(100) NOT NULL,           -- 회원 이름
--    mimg  VARCHAR(255) DEFAULT NULL,        -- 프로필 이미지 URL
--    CONSTRAINT PRIMARY KEY(mno)
--);


-- -------------------------- day09 --------------------------
-- drop database if exists bookplatform;
-- create database bookplatform;
-- use bookplatform;

--DROP TABLE if EXISTS book;
--create table book(
--	bid int auto_increment,
--    bname varchar(50),
--    bwriter varchar(20),
--    bcontent varchar(100),
--    bpwd varchar(20),
--    constraint primary key(bid)
--);
--
--DROP TABLE if EXISTS review;
--create table review(
--	rid int auto_increment,
--	rcontent varchar(100),
--	rpwd varchar(20),
--	bid int,
--	constraint primary key(rid),
--	constraint foreign key(bid) references book(bid) on delete cascade
--);
