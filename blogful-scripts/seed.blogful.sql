BEGIN;

INSERT INTO blogful_articles
    (title, date_published, content)
VALUES
  ('Northeast', '2016-01-16 12:00:00',       'Despotato'),
  ('Hi Midwest ',  '2016-05-01 15:00:00',       'Shape of Pooh'),
  ('couth',     '2017-02-22 12:00:00',       'UpTown Monk'),
  ('Midwist ',  now() - '5 days'::INTERVAL,  'Cats that teach yoga'),
  ('Northeast', now() - '3 days'::INTERVAL,  'Cats that teach SQL'),
  ('Soulllth',     now() - '3 days'::INTERVAL,  'Despotato'),
  ('South',     now() - '3 days'::INTERVAL,  'Man''s not torrid'),
  ('Jo South',     now() - '2 days'::INTERVAL,  'Ma''s no torri'),
  ('Northeast', now() - '10 hours'::INTERVAL, 'Shape of Poop'),
  ('Domething', now() - '10 hours'::INTERVAL, 'Shane of Poor');

