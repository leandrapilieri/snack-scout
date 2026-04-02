insert into public.products
(slug,name,brand,category,calories,added_sugar_g,fiber_g,protein_g,sodium_mg,ingredients,allergens,flags,image)
values
('soft-baked-oat-bar','Soft Baked Oat Bar','Harvest Path','granola bars',140,5,3,4,105,array['whole grain oats','dates','sunflower seed butter','apple puree','cinnamon'],array[]::text[],array['lunchbox-friendly','whole grain'],'/products/snack-1.svg'),
('rainbow-fruit-bites','Rainbow Fruit Bites','FunMunch','fruit snacks',90,12,1,0,35,array['corn syrup','sugar','gelatin','citric acid','red 40','blue 1'],array[]::text[],array['dye-aware'],'/products/snack-2.svg'),
('mini-cheese-crackers','Mini Cheese Crackers','Craveables','crackers',150,1,1,3,220,array['enriched flour','cheddar cheese','canola oil','salt'],array['dairy','gluten'],array['lunchbox-friendly'],'/products/snack-3.svg'),
('apple-spinach-pouch','Apple Spinach Pouch','SproutLane','pouches',80,0,2,1,5,array['apple puree','spinach puree','lemon juice'],array[]::text[],array['toddler-friendly','organic'],'/products/snack-4.svg'),
('greek-yogurt-drops','Greek Yogurt Drops','HappyDairy','yogurt snacks',110,6,0,6,55,array['cultured skim milk','strawberry puree','cane sugar'],array['dairy'],array['protein'],'/products/snack-5.svg')
on conflict (slug) do nothing;
