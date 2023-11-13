INSERT INTO PRODUCTS(NAME, DESCRIPTION, INITIALPRICE, TOTALTIME, AUCTIONTYPE, SHIPPINGTIME)
VALUES
('abc', 'xyz', 100, 2500, 'Dutch', 14 ),
('def', 'blah', 110, 3000, 'Dutch', 14 ),
('ghi', 'aah', 120, 2000, 'Forward', 12 ),
('jk', 'aahha', 130, 4000, 'Forward', 7),
('lm', 'aanoo', 140, 5000, 'Forward', 8),
('no', 'nooyes', 150, 1000, 'Forward', 9),
('pq', 'yessno', 160, 1500, 'Dutch', 11 ),
('rs', 'brpo8', 170, 1200, 'Forward', 13 ),
('t', 'brpo9', 180, 1400, 'Dutch', 15 ),
('xyz', 'brpo10', 190, 2400, 'Forward',6);

INSERT INTO HIGHESTBIDS(HIGHESTBIDAMOUNT, PRODUCTID)
SELECT INITIALPRICE, ID FROM PRODUCTS;