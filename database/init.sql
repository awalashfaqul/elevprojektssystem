CREATE TABLE students (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, /* Unikt automatiskt ID för eleven */
  first_name VARCHAR(100) NOT NULL, /* Elevens förnamn, obligatoriskt */
  last_name VARCHAR(100) NOT NULL, /* Elevens efternamn, obligatoriskt */
  email VARCHAR(255) NOT NULL UNIQUE, /* Obligatorisk och får inte förekomma två gånger */
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP /* Tidpunkten då eleven registrerades */
);