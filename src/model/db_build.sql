BEGIN;

DROP TABLE IF EXISTS preppers, preps, apocalypses, bridge CASCADE;

CREATE TABLE preppers (
  prepper_id SERIAL PRIMARY KEY,
  prepper_name VARCHAR NOT NULL,
  hashed_password VARCHAR NOT NULL,
  star_sign VARCHAR NOT NULL,
  movie VARCHAR NOT NULL
);

CREATE TABLE preps (
  prep_id SERIAL PRIMARY KEY,
  prep_name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  prep_type VARCHAR NOT NULL,
  image_url VARCHAR
);

CREATE TABLE apocalypses (
  apocalypse_id SERIAL PRIMARY KEY,
  apocalypse_type VARCHAR NOT NULL
);

CREATE TABLE bridge (
  bridge_id SERIAL PRIMARY KEY,
  prepper_id INTEGER REFERENCES preppers(prepper_id),
  prep_id INTEGER REFERENCES preps(prep_id),
  apocalypse_id INTEGER REFERENCES apocalypses(apocalypse_id)
);

INSERT INTO preppers (prepper_name, hashed_password, star_sign, movie) VALUES
('Maria', '$2y$12$rNlZJapyFS2XfHJ8fIeDOOeg0Vs.dO31v1Mv84AuT3xlNWUcJRBQC', 'Aquarius', 'Resident Evil'),
('Jamie', '$2y$12$etQ8BfHuFZE5anbprJ8MzeitMh3G/Txqi0gclaimBUGxEN1wLlEcS', 'Leo', 'Waterworld'),
('Reggie', '$2y$12$1MBVnXoVF2VfGXFK/Ua7mOiu7jZTfEahzqzhhOCowA390o0FLCdPO', 'Sagittarius', 'Titanic'),
('Dan', '$2y$12$l.4x/AfrnClssczdWZeyWebzJuiRcE1HrU0F3UEMqguqdxBWEaRZu', 'Virgo', 'Mad Max: Fury Road');

INSERT INTO preps (prep_name, description, prep_type, image_url) VALUES
('Piety', 'Memorise a new biblical verse everyday and pray on the regs', 'Skill', 'https://uqvk92z67p11sbpjb3nr4qo1-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/apocalypse-1400x788.jpg'),
('Blend in', 'Cosplay as the predator on weekends', 'Tip', 'https://uqvk92z67p11sbpjb3nr4qo1-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/apocalypse-1400x788.jpg'),
('Machete', 'Swing at the zombies head with the pointy end', 'Item', 'https://uqvk92z67p11sbpjb3nr4qo1-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/apocalypse-1400x788.jpg'),
('Botany', 'Cultivate heat resistant rice for the arid plains of Florida', 'Skill', 'https://uqvk92z67p11sbpjb3nr4qo1-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/apocalypse-1400x788.jpg'),
('Diplomacy', 'Talk down your enemies through the power of love', 'Skill', 'https://uqvk92z67p11sbpjb3nr4qo1-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/apocalypse-1400x788.jpg'),
('Immunise', 'Vaccinate your kids and your friends kids', 'Tip', 'https://uqvk92z67p11sbpjb3nr4qo1-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/apocalypse-1400x788.jpg'),
('EMP bomb', 'Short-circuit those super intelligent bastard machines', 'Item', 'https://uqvk92z67p11sbpjb3nr4qo1-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/apocalypse-1400x788.jpg');

INSERT INTO apocalypses (apocalypse_type) VALUES
('Biblical'),
('Aliens'),
('Zombies'),
('Ecological'),
('War'),
('Biological'),
('Technological');

INSERT INTO bridge (prepper_id, prep_id, apocalypse_id) VALUES
(4,1,1), (3,2,2), (2,3,3), (4,4,4), (1,5,5), (3,6,6), (1,7,7);

COMMIT;
