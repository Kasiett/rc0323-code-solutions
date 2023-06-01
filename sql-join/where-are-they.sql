select "a"."line1" as "streetAddr",
       "cities"."name" as "city",
       "a"."district",
       "c"."name" as "country"
  from "addresses" as "a"
inner join "cities"
on "cities"."cityId" = "a"."cityId"
inner join "countries" as "c"
on "c"."countryId" = "cities"."countryId";
