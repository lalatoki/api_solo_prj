# Schema Design

`pk` = Primary Key
`ref: >` = Many to one
`ref: <` = One to many
`ref: -` = One to one

## Employee Table

```
Table employee {
  id int [pk] // [not null, unique]
  email varchar(32)
  first_name varchar(32) [not null]
  last_name varchar(32) [not null]
  department varchar(64)
  position varchar(64) ['s': secretary, 'm': mob]
  start_date date [not null]
  end_date date
  timestamps
}
```

## mob_sec Table

```
Table mob_sec {
  id int [pk]
  mob_id [ ref: > employee.id, not null]
  sec_id [ ref: > employee.id, not null]
  start_date date
  end_date date [not null]
}
```