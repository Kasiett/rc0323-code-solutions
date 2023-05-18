select "co"."name",
    count(*) as "# of cities"
    from "countries" as "co"
    join "cities" using ("countryId")
    group by "co"."countryId"
    order by "co"."name" asc
