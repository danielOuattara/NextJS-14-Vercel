
CREATE TABLE IF NOT EXISTS quizzes (
    quiz_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    question_text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);


CREATE TABLE IF NOT EXISTS answers (
    answer_id SERIAL PRIMARY KEY,
    quiz_id  INT REFERENCES quizzes("quiz_id") ON DELETE CASCADE,
    answer_text TEXT NOt NULL,
    is_correct BOOLEAN NOT NULL
);




-- Insert quizzes
INSERT INTO quizzes (title, description, question_text)
VALUES
    ('Math Quiz', 'Test your math skills with this quiz.', 'What is 2 + 2?'),
    ('History Quiz', 'Test your knowledge of historical events.', 'Who was the first president of the United States?'),
    ('Science Quiz', 'Answer questions about various scientific topics.', 'What is the chemical symbol for water?'),
    ('Literature Quiz', 'Explore questions about famous literary works.', 'Who wrote "Romeo and Juliet"?'),
    ('Geography Quiz', 'Test your knowledge of world geography.', 'What is the capital of France?');

-- Insert answers for Math Quiz
INSERT INTO answers (quiz_id, answer_text, is_correct)
VALUES
    (1, '3', false),
    (1, '4', true),
    (1, '5', false),
    (1, '6', false);

-- Insert answers for History Quiz
INSERT INTO answers (quiz_id, answer_text, is_correct)
VALUES
    (2, 'George Washington', true),
    (2, 'Abraham Lincoln', false),
    (2, 'Thomas Jefferson', false),
    (2, 'John F. Kennedy', false);

-- Insert answers for Science Quiz
INSERT INTO answers (quiz_id, answer_text, is_correct)
VALUES
    (3, 'H2O', true),
    (3, 'CO2', false),
    (3, 'O2', false),
    (3, 'N2', false);

-- Insert answers for Literature Quiz
INSERT INTO answers (quiz_id, answer_text, is_correct)
VALUES
    (4, 'William Shakespeare', true),
    (4, 'Charles Dickens', false),
    (4, 'Jane Austen', false),
    (4, 'Mark Twain', false);

-- Insert answers for Geography Quiz
INSERT INTO answers (quiz_id, answer_text, is_correct)
VALUES
    (5, 'Berlin', false),
    (5, 'Madrid', false),
    (5, 'London', false),
    (5, 'Paris', true);
