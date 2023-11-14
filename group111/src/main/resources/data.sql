INSERT INTO PRODUCTS(NAME, DESCRIPTION, GENRE, INITIALPRICE, TOTALTIME, AUCTIONTYPE, SHIPPINGTIME)
VALUES
('Rumours', 'Clasic album by Fleetwood Mac', 'Rock', 120, 2500, 'Dutch', 14 ),
('Tusk', 'Fleetwood Mac Experimental','Rock', 110, 3000, 'Dutch', 14 ),
('Mirage', 'Best Fleetwood Mac Album','Rock', 120, 2000, 'Forward', 12 ),
('Currents', 'Tame Impala Psychedelic Album', 'Psychadelic', 130, 4000, 'Forward', 7),
('Lonerisms', 'Tame Impala breakthrough album', 'Psychadelic', 140, 5000, 'Forward', 8),
('Slow Rush', 'Latest Tame Impala album', 'Psychadelic',150, 1000, 'Forward', 9),
('IV', 'Led Zeppelin fourth album', 'Hip Hop', 160, 1500, 'Dutch', 11 ),
('Dark Side of the Moon', 'Classic Pink Floyd album', 'Rock',  170, 1200, 'Forward', 13 ),
('Wish You Were Here', 'Tyler the Creator latest album', 'Hip Hop', 180, 1400, 'Dutch', 15 ),
('Kill Me Gently', 'Kanye West Unreleased album', 'Hip Hop', 190, 2400, 'Forward',6);

INSERT INTO HIGHESTBIDS(HIGHESTBIDAMOUNT, PRODUCTID)
SELECT INITIALPRICE, ID FROM PRODUCTS;

INSERT INTO USERS(FIRSTNAME,LASTNAME,EMAIL,PASSWORD,STREETADDRESS, POSTALCODE,CITY,COUNTRY)
VALUES
('Hashim', 'Khan', 'hashimak@gmail.com', 'khan', '215 blvd', 'm3n', 'toronto', 'canada'),
('Nish', 'Singh', 'nishs@gmail.com', 'nish', '215 blvd', 'm3n', 'toronto', 'canada' );

INSERT INTO TOKENS(TOKEN,CREATEDDATE,USERID)
VALUES
('b5eccb4c-2982-4d6d-807b-2270ecff6d25', '2023-11-13', 1),
('ada7dbd4-18f0-4167-af7b-751f3bc5e706', '2023-11-13', 2);
