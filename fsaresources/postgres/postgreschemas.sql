#1 
		create table if not exists Brands (
		    id serial primary key,
		    brandname text not null
		);


		INSERT INTO Brands (brandname)  <  argument(s) must match column(s)
			VALUES ('Kona'),
			('Trek'),
			('Specialized'),
			('Doberman'),
			('BlkMrkt')

#2
		#//table two for models made by that brand
		create table if not exists Models (
		    id serial primary key,
		    bike text not null,
		    description text not null,
		    maker_id integer references Brands  < the maker_id column will be a number that references brands
		    
		);


		INSERT INTO Models(bike, description, maker_id)
			VALUES ('stumpjumper', 'all-mountain', 3), 
			('p.3', 'dj', 3),
			('demo', 'dh', 3),
			('mob', 'dj', 5),
			('pinscher', 'dj / street', 4),
			('ticket', 'ss freeride', 2),
			('fuel', 'xc', 2),
			('stinky', 'dh', 1),
			('riot', 'dj', 5)

#3 oops i forgot i want to add a column on brands
		ALTER TABLE Brands ADD COLUMN Models integer references Models  maker_id# // √ column added





# how to create a column that refereneces another tables column 

stores data on server
  DB BIKES
  - 2 tables
  	- Brands √
  	    col: id | brandname
  		ref => model
  	- Model 
  	    col: id | modelname | description | ref to brandname 
  	  Brand / ID / ModelName / Cost
  	  	ref => brand 


learn about primary key 