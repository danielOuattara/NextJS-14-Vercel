# DATABASE SETUP

```sql
DROP DATABASE quizzes_nextjs14;

DROP TABLE quizzes;

\conninfo

CREATE DATABASE quizzes_nextjs14;

\l

\c quizzes_nextjs14

\l quizzes_nextjs14

\dp quizzes

CREATE TABLE quizzes_nextjs14 (
    quizId SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO quizzes (title, description)
VALUES
    ('Math Quiz', 'Test your math skills with this quiz.'),
    ('History Quiz', 'Test your knowledge of historical events.'),
    ('Science Quiz', 'Answer questions about various scientific topics.'),
    ('Literature Quiz', 'Explore questions about famous literary works.'),
    ('Geography Quiz', 'Test your knowledge of world geography.');

CREATE TABLE quizzes (
    quizId SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO quizzes (title, description)
VALUES
    ('Math Quiz', 'Test your math skills with this quiz.'),
    ('History Quiz', 'Test your knowledge of historical events.'),
    ('Science Quiz', 'Answer questions about various scientific topics.'),
    ('Literature Quiz', 'Explore questions about famous literary works.'),
    ('Geography Quiz', 'Test your knowledge of world geography.');
\dt

DROP TABLE quizzes_nextjs14;

\dt

SELECT * FROM quizzes;

ALTER TABLE quizzes RENAME COLUMN quizid TO quizId;

ALTER TABLE quizzes RENAME COLUMN quizid TO quizId;

-- First, drop the primary key constraint on the column "quizId"
ALTER TABLE quizzes DROP CONSTRAINT IF EXISTS quizzes_pkey;

-- Then, drop the column "quizId" if it exists
ALTER TABLE quizzes DROP COLUMN IF EXISTS quizId;

-- Now you can rename the column "quizid" to "quizId"
ALTER TABLE quizzes RENAME COLUMN quizid TO quizId;

\dt

select * from quizzes ;

DROP TABLE quizzes;

CREATE TABLE quizzes (
    quizId SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO quizzes (title, description)
VALUES
    ('Math Quiz', 'Test your math skills with this quiz.'),
    ('History Quiz', 'Test your knowledge of historical events.'),
    ('Science Quiz', 'Answer questions about various scientific topics.'),
    ('Literature Quiz', 'Explore questions about famous literary works.'),
    ('Geography Quiz', 'Test your knowledge of world geography.');

select * from quizzes ;

ALTER TABLE quizzes RENAME COLUMN quizid TO quiz_id;

SELECT * FROM quizzes;

DROP TABLE quizzes;

CREATE TABLE quizzes (
    quizId SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO quizzes (title, description)
VALUES
    ('Math Quiz', 'Test your math skills with this quiz.'),
    ('History Quiz', 'Test your knowledge of historical events.'),
    ('Science Quiz', 'Answer questions about various scientific topics.'),
    ('Literature Quiz', 'Explore questions about famous literary works.'),
    ('Geography Quiz', 'Test your knowledge of world geography.');

SELECT* FROM quizzes;

DROP TABLE quizzes;

ALTER TABLE quizzes RENAME COLUMN quizid TO quiz_id;

SELECT * FROM quizzes;

DROP TABLE quizzes;

CREATE TABLE quizzes (
    quizId SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO quizzes (title, description)
VALUES
    ('Math Quiz', 'Test your math skills with this quiz.'),
    ('History Quiz', 'Test your knowledge of historical events.'),
    ('Science Quiz', 'Answer questions about various scientific topics.'),
    ('Literature Quiz', 'Explore questions about famous literary works.'),
    ('Geography Quiz', 'Test your knowledge of world geography.');

SELECT * FROM quizzes;

DROP TABLE quizzes;

\dt

CREATE TABLE quizzes (
    "quizId" SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

\dt

INSERT INTO quizzes (title, description)
VALUES
    ('Math Quiz', 'Test your math skills with this quiz.'),
    ('History Quiz', 'Test your knowledge of historical events.'),
    ('Science Quiz', 'Answer questions about various scientific topics.'),
    ('Literature Quiz', 'Explore questions about famous literary works.'),
    ('Geography Quiz', 'Test your knowledge of world geography.');

```
