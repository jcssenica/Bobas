This is an API that users can 

1. enter a series of names for Milk Teas
and get to know all the ingredient included

A list of milk tea users can enter:
Earl Grey Milk Tea
Jasmine Milk Tea
Trio Milk Tea
Oreo Garden Milk Tea
Oolong Milk Tea
Thai Milk Tea


2. users can enter a specific ingredient and get to know
which milk tea includes that ingredient

A list of ingredient users can enter:
black tea
jasmine tea
earl grey tea
thai ice tea
milk
condensed milk
boba
grass jelly
pudding
cane sugar


Example:
1.
curl "127.0.0.1:3001/milkTea/Earl%20Grey%20Milk%20Tea"

{"name":"Earl Grey Milk Tea","ingredients":["black tea","milk","boba"]}

2.
curl "127.0.0.1:3001/?ingredient=milk"

[{"id":"1","name":"Earl Grey Milk Tea","ingredients":
["black tea","milk","boba"]},{"id":"2","name":"Jasmine 
Milk Tea","ingredients":["jasmin tea","milk","boba"]},
{"id":"3","name":"Trio Milk Tea","ingredients":["black 
rtea","milk","boba","grass jelly","pudding"]},{"id":"4"
,"name":"Oreo Garden Milk Tea","ingredients":["earl 
gray tea","milk","oreo cookie crumbs"]},{"id":"5","name":
"Oolong Milk Tea","ingredients":["oolong tea","milk"]}]


