
INSERT INTO tb_user (name, email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana Green', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');


INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre (name) VALUES ('Ação');
INSERT INTO tb_genre (name) VALUES ('Suspense');
INSERT INTO tb_genre (name) VALUES ('Drama');

INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Flash', 'Flash', 2014, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg', 'Barry enfrenta diversos assassinos que invadem a premiação onde ele acompanha Iris, mas os efeitos colaterais de seus novos superpoderes representam uma ameaça.', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Zona de Combate', 'Zona de Combate', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg', 'Em um futuro próximo, um piloto de drone e um androide ultrassecreto trabalham lado a lado no campo de batalha para evitar um ataque nuclear.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Vikings', 'Vikings', 2013, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/gNIwh41v7Pe8hwF8XEu5JdH4s6B.jpg', 'Ragnar Lothbrok, um jovem que se considera descendente de Odin, é um guerreiro, fazendeiro e chefe de família.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Falcão', 'e o Soldado Invernal ', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg', 'Após os eventos de "Vingadores: Ultimato", Sam Wilson/Falcão e Bucky Barnes/Soldado Invernal se unem em uma aventura que testa suas habilidades - e a paciência.', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Alien', 'o 8º Passageiro', 1979, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/4t0KhAOOubY3wCvhXYEKUrG4ZGO.jpg', 'Quando a tripulação da sonda espacial Nostromo responde a um pedido de socorro vindo de um planeta inóspito, eles descobrem uma forma de vida mortal que se reproduz dentro de humanos.', 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Em Busca de Vingança', 'Em Busca de Vingança', 2017, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/j26eaJw2xjLuNctwG1TjywSMdzP.jpg', 'Um homem (Arnold Schwarzenegger) traumatizado busca vingança após ter perdido a esposa e o filho em acidente de avião causado por negligência de um controlador de tráfego aéreo (Scoot McNairy).', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Ponto Vermelho', 'Ponto Vermelho', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/bxZrG6wsmKMoUC1q4ByTWDRHaOh.jpg', 'Dois líderes icônicos emergem em um planeta arrasado pela guerra entre Autobots e Decepticons na história que conta a origem do universo Transformers.', 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Transformers:', 'War for Cybertron: O Cerco', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/gNIwh41v7Pe8hwF8XEu5JdH4s6B.jpg', 'Dois líderes icônicos emergem em um planeta arrasado pela guerra entre Autobots e Decepticons na história que conta a origem do universo Transformers.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Perigo na Montanha ', 'Perigo na Montanha', 2018, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/oTXIEUqVqGTtdpaNEaC8cJwDtfs.jpg', 'Joe Braven (Jason Momoa) é um madeireiro que mora na fronteira dos EUA com o Canadá. Ele será confrontado por um grupo de traficantes de drogas e fará o que for preciso para proteger sua família.', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Carga Explosiva 3', 'Carga Explosiva 3', 2008, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hZUWA2Ye6lTtqW2l0AuCAlrmxU0.jpg', 'Frank Martin é obrigado a conduzir Valentina, a filha de Leonid Vasilev, o chefe da Agência de Proteção Ambiental da Ucrânia.', 1);