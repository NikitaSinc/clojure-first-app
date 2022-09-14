\c postgres
drop database if exists tasks;
drop database if exists tasks_test;
alter user postgres with password '1111';
create database tasks;
create database tasks_test;
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

\c tasks_test
drop table if exists tasks;

create table tasks(
        id serial primary key,
        description char(200) not null,
        done boolean not null
);
\c postgres;
