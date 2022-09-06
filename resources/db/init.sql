drop database if exists tasks;

create database tasks;
\c tasks
drop table if exists tasks;

create table tasks(
        id serial primary key,
        description char(200) not null,
        done boolean not null
);

insert into tasks (description, done)
values  ('try httpkit', true),
        ('try router', true),
        ('try postres', false);

