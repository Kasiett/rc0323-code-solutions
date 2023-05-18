select "c"."firstName",
       "c"."lastName",
       sum("payments"."amount") as "total paid"
  from "customers" as "c"
  join "payments" using ("customerId")
  group by "c"."customerId"
  order by "total paid" desc;
