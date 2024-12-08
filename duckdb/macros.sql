create or replace macro req2path(req) as (
  split_part(req, ' ', 2)
    .regexp_replace('\?.+$', '?<query>')
    .regexp_replace('[0-9A-Z]{26}', '[ulid]')
    .regexp_replace('[0-9]+', '[0-9]+')
    .regexp_replace('\@[a-z]+', '@[a-z]+')
    .regexp_replace('.*.js$', '[js]')
);
