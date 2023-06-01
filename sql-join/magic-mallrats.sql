select "c"."firstName",
       "c"."lastName"
  from "rentals"
  join "customers" as "c" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
 where "films"."title" = 'Magic Mallrats'
