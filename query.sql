;WITH cte AS
(
 SELECT *,
     ROW_NUMBER() OVER (PARTITION BY id_murid ORDER BY time_create desc) AS rowid
 FROM pendidikan
)



select d.id_murid, c.name, d.status as pendidikan_terakhir, c.time_create, d.time_create as time_update from murid c inner join 
(
SELECT *
FROM cte
WHERE rowid = 1
) d on c.id = d.id_murid
