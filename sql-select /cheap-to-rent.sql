select "filmId"
       "title"
from "films"
where "rentalRate" < 1
order by "replacementCost" desc
limit 50;
