create database tasks_test;

\c tasks_test
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
\c postgres;
