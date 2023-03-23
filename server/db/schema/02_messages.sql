-- schema/02_messages.sql
DROP TABLE IF EXISTS urls CASCADE;

-- CREATE URLS
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  sender VARCHAR(255) NOT NULL,
  group_id VARCHAR(255) NOT NULL,
);

sender recipient group_id