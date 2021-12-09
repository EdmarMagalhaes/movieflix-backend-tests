
INSERT INTO tb_user (name, email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana Green', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Joao Victor', 'vitor@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Eric Anderson', 'ericanderson@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Davi Augusto', 'davi@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Rosy Magalhães', 'rosy@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Marli Pires', 'marli@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Edgard Magalhães', 'edgardmagalhaes@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Aparecida Rosa', 'aparecidarosa@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Gleicy Pires', 'gleicy@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Maeda Cavalcante', 'maeda@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Fabio Reges', 'fabio@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');


INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (5, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (6, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (7, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (8, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (9, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (10, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (11, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (12, 2);

INSERT INTO tb_genre (name) VALUES ('Ação');
INSERT INTO tb_genre (name) VALUES ('Aventura');
INSERT INTO tb_genre (name) VALUES ('Drama');
INSERT INTO tb_genre (name) VALUES ('Crime');
INSERT INTO tb_genre (name) VALUES ('Romance');
INSERT INTO tb_genre (name) VALUES ('Suspense');
INSERT INTO tb_genre (name) VALUES ('Comédia');
INSERT INTO tb_genre (name) VALUES ('Ficção');


INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Flash', 'Flash', 2014, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg', 'Barry enfrenta diversos assassinos que invadem a premiação onde ele acompanha Iris, mas os efeitos colaterais de seus novos superpoderes representam uma ameaça.', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Zona de Combate', 'Zona de Combate', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg', 'Em um futuro próximo, um piloto de drone e um androide ultrassecreto trabalham lado a lado no campo de batalha para evitar um ataque nuclear.', 1);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('American Pie Apresenta', 'Meninas ao Ataque', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dHFskXdLIjbuFLttyD46CgLc6o5.jpg', 'Um grupo de mulheres decide aproveitar seu poder feminino e se unir para conseguir o que querem no último ano do ensino médio.', 7);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Aves de Rapina', 'Arlequina e sua Emancipação Fantabulosa', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg', 'Arlequina, Canário Negro, Caçadora, Cassandra Cain e a policial Renée Montoya formam um grupo inusitado de heroínas. Quando um perigoso criminoso começa a causar destruição em Gotham, as cinco mulheres precisam se unir para defender a cidade.', 8);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Zumbilândia', 'Atire Duas Vezes', 2019, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/e7tMI0zVKJB2TS74TaBifIZIkCp.jpg', 'Os guerreiros pós-apocalípticos Tallahassee, Columbus, Wichita e Little Rock devem confiar ainda mais em sua inteligência. Agora, eles se encontram em uma batalha implacável contra zumbis mais inteligentes, rápidos e aparentemente indestrutíveis.', 7);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Shazam!', 'Apenas diga a palavra mágica.', 2019, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/qwgGtdlLMKYvT2tV8hLY22syRHN.jpg', 'Billy Batson (Asher Angel) tem apenas 14 anos de idade, mas recebeu de um antigo mago o dom de se transformar num super-herói adulto chamado Shazam (Zachary Levi). Ao gritar a palavra SHAZAM!, o adolescente se transforma nessa sua poderosa versão adulta para se divertir e testar suas habilidades. Contudo, ele precisa aprender a controlar seus poderes para enfrentar o malvado Dr. Thaddeus Sivana (Mark Strong).', 1);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('X-Men: Fênix Negra', 'Surge a Fênix Negra!', 2019, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/soeSIqIuetoq8yxRIxbFPqFEgQW.jpg', 'Ambientado em 1992, Charles Xavier (James McAvoy) está lidando com o fato dos mutantes serem considerados heróis nacionais. Com o orgulho a flor da pele, ele envia sua equipe para perigosas missões, mas a primeira tarefa dos X-Men no espaço gera uma explosão solar, que acende uma força malévola e faminta por poder dentro de Jean Grey (Sophie Turner).', 8);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Vikings', 'Vikings', 2013, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/gNIwh41v7Pe8hwF8XEu5JdH4s6B.jpg', 'Ragnar Lothbrok, um jovem que se considera descendente de Odin, é um guerreiro, fazendeiro e chefe de família. Visionário e sonhando viver diversas aventuras, ele acredita que as riquezas sonhadas por seu povo encontram-se além do mar Báltico. Mas para conseguir conquistá-las ele precisa convencer Earl Haraldson, o líder de seu povo, a permitir que ele e seus guerreiros viagem em direção à Inglaterra.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Falcão', 'e o Soldado Invernal ', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg', 'Após os eventos de "Vingadores: Ultimato", Sam Wilson/Falcão e Bucky Barnes/Soldado Invernal se unem em uma aventura que testa suas habilidades - e a paciência.', 3);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Cherry - Inocência Perdida', 'A vida deixa marcas.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uQtqiAu2bBlokqjlURVLEha6zoi.jpg', 'Cherry deixa a faculdade para se tornar médico no Iraque, apoiado por sua amada, Emily. Ao voltar da guerra com estresse pós-traumático, se envolve com crime e drogas enquanto luta para reconquistar seu lugar no mundo.', 3);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Batman: O Cavaleiro das Trevas', 'Por que está tão sério?', 2008, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lHhZrxYk8pi25UYKgHVJSbGCwI9.jpg', 'Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.', 8);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Medo da Chuva', 'Some voices you cant outrun', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/eKwKQ9fqtYaX39yIROZ3397tFoR.jpg ', 'Uma adolescente que vive com esquizofrenia começa a suspeitar que o vizinho sequestrou uma criança. Seus pais tentam desesperadamente ajudá-la a viver uma vida normal, sem expor seus próprios segredos trágicos, e a única pessoa que acredita nela é Caleb – um menino que ela nem tem certeza de que existe.', 6);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Creed II', 'Há mais a perder do que um título.', 2018, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8yqLPNwNCtpOPc3XkOlkSMnghzw.jpg', 'Adonis Creed (Michael B. Jordan) saiu mais forte do que nunca de sua luta contra - Pretty - Ricky Conlan (Tony Bellew) e segue sua trajetória rumo ao campeonato mundial de boxe, contra toda a desconfiança que acompanha a sombra de seu pai e com o apoio de Rocky (Sylvester Stallone). Sua próxima luta não será tão simples: Ele precisa enfrentar um adversário que possui uma forte ligação com o passado de sua família, o que torna tudo ainda mais complexo.', 3);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Missão: Impossível - Efeito Fallout', 'Algumas missões não são uma escolha.', 2018, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/aw4FOsWr2FY373nKSxbpNi3fz4F.jpg', 'Em uma perigosa tarefa para recuperar plutônio roubado, Ethan Hunt opta por salvar sua equipe em vez de completar a missão. Com isso, armas nucleares caem nas mãos de agentes altamente qualificados e que pertencem a uma rede mortal que deseja destruir a civilização. Agora, com o mundo em risco, Ethan e sua equipe da IMF são forçados a aliar-se a um obstinado agente da CIA.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Alien', 'o 8º Passageiro', 1979, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/4t0KhAOOubY3wCvhXYEKUrG4ZGO.jpg', 'Quando a tripulação da sonda espacial Nostromo responde a um pedido de socorro vindo de um planeta inóspito, eles descobrem uma forma de vida mortal que se reproduz dentro de humanos. Agora, a tripulação deve lutar para permanecer viva e impedir que a criatura chegue até a Terra.', 6);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Em Busca de Vingança', 'Em Busca de Vingança', 2017, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/j26eaJw2xjLuNctwG1TjywSMdzP.jpg', 'Um homem (Arnold Schwarzenegger) traumatizado busca vingança após ter perdido a esposa e o filho em acidente de avião causado por negligência de um controlador de tráfego aéreo (Scoot McNairy). Inspirado no acidente de Überlingen, no qual os passageiros eram em sua maioria crianças.', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Ponto Vermelho', 'Ponto Vermelho', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg', 'Com o relacionamento em crise e um bebê a caminho, um casal decide passar uns dias nas montanhas para reacender a paixão, mas acaba na mira de assassinos impiedosos.', 6);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Transformers:', 'War for Cybertron: O Cerco', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/bxZrG6wsmKMoUC1q4ByTWDRHaOh.jpg', 'Dois líderes icônicos emergem em um planeta arrasado pela guerra entre Autobots e Decepticons na história que conta a origem do universo Transformers.', 1);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('O Poderoso Chefão', 'O maior mafioso de todos', 1972, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg', 'Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.', 3);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('O Senhor dos Anéis', 'O Retorno do Rei', 2003, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg', 'O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.', 2);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Cidade de Deus', 'A vida na favela era o purgatório. Virou inferno.', 2002,'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/194dso1hBwQEgIU3fgS7mXHtFAj.jpg', 'Buscapé (Alexandre Rodrigues) é um jovem pobre, negro e muito sensível, que cresce em um universo de muita violência. Buscapé vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos da cidade. Amedrontado com a possibilidade de se tornar um bandido, Buscapé acaba sendo salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É através de seu olhar atrás da câmera que Buscapé analisa o dia-a-dia da favela onde vive, onde a violência aparenta ser infinita.', 4);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Eu Sou a Lenda', 'O último homem na Terra não está sozinho', 2007, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lhVVIWKR13khBvjFz8XyZ2GM0JS.jpg', 'Um terrível vírus incurável, criado pelo homem, dizimou a população de Nova York. Robert Neville (Will Smith) é um cientista brilhante que, sem saber como, tornou-se imune ao vírus. Há 3 anos ele percorre a cidade enviando mensagens de rádio, na esperança de encontrar algum sobrevivente. Robert é sempre acompanhado por vítimas mutantes do vírus, que aguardam o momento certo para atacá-lo. Paralelamente ele realiza testes com seu próprio sangue, buscando encontrar um meio de reverter os efeitos do vírus.', 6);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Amizade Colorida', 'Amigos com beneficios', 2011, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/sADMOwdhVQp0LXvNj0CGogVEjXy.jpg','Jamie (Mila Kunis) é uma jovem recrutadora de Nova York que convence um cliente em potencial (Justin Timberlake) a deixar seu emprego em Los Angeles para trás e aceitar um emprego na Big Apple. Ele aceita a proposta e logo os dois se tornam bons amigos. Um dia, após assistir um filme na casa dela, surge o papo do quanto a carência sexual incomoda ambos. Eles fazem um pacto de que terão apenas sexo, sem qualquer envolvimento emocional. Só que, aos poucos, a intimidade faz com que eles se tornem cada vez mais próximos e interessados um no outro.',5);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Mortal Kombat Legends', 'A Vingança de Scorpion', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/Abc1FK3Zn6PJCaKh46D9ZvwaX5a.jpg', 'Após o massacre cruel de sua família pelo mercenário Sub-Zero, Hanzo Hasashi é exilado no tortuoso Netherrealm, lá, em troca de sua servidão ao sinistro Quan Chi, ele tem a chance de vingar sua família - e ressuscita como Scorpion, uma alma perdida e vingativa. De volta ao Earthrealm, Lord Raiden reúne uma equipe de guerreiros de elite - o monge Shaolin Liu Kang, a oficial das Forças Especiais Sonya Blade e o ator de ação Johnny Cage - um grupo improvável de heróis com uma chance de salvar a humanidade. Para fazer isso, eles devem derrotar a horda de gladiadores do Outworld de Shang Tsung e vencer o torneio Mortal Kombat.',1);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Minha Mãe é Uma Peça', 'E você ainda achava que mãe era tudo igual', 2013, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7Q17u4EdXuPhZWfA7QiYFObkwhA.jpg', 'Dona Hermínia, uma mulher de meia idade, aposentada e sozinha, tem como preocupação maior cuidar dos filhos. Mas agora que eles cresceram e não param de confrontá-la, a solução será dar um gelo e sair de casa. Sem um trabalho ou um companheiro, a dona de casa resolve desabafar com a tia idosa.', 7);
INSERT INTO tb_movie (title, sub_title, year, img_Uri, synopsis, genre_id) VALUES ('Mulher-Maravilha 1984', 'Uma nova era de maravilhas começa.', 2020, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/srYya1ZlI97Au4jUYAktDe3avyA.jpg', 'Em 1984, Diana Prince entra em conflito com dois inimigos formidáveis, Maxwell Lord e a Mulher-Leopardo, enquanto reencontra misteriosamente com seu antigo interesse amoroso Steve Trevor.', 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Perigo na Montanha', 'Perigo na Montanha', 2018, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/oTXIEUqVqGTtdpaNEaC8cJwDtfs.jpg', 'Joe Braven (Jason Momoa) é um madeireiro que mora na fronteira dos EUA com o Canadá. Ele será confrontado por um grupo de traficantes de drogas e fará o que for preciso para proteger sua família.', 6);
INSERT INTO tb_movie (title, sub_Title, year, img_Uri, synopsis, genre_id) VALUES ('Carga Explosiva 3', 'Carga Explosiva 3', 2008, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hZUWA2Ye6lTtqW2l0AuCAlrmxU0.jpg', 'Frank Martin é obrigado a conduzir Valentina, a filha de Leonid Vasilev, o chefe da Agência de Proteção Ambiental da Ucrânia. Ela foi sequestrada por Jonas Johnson, contratado por uma empresa de gerenciamento internacional de resíduos que deseja operar na Ucrânia. Para ter Frank e Valentina sob controle, Jonas prende em seus pulsos um dispositivo que determina que não possam se afastar muito do carro que os conduz, caso contrário o bracelete explode. Contando com a ajuda do inspetor Tarconi, Frank busca um meio de deixar a armadilha.', 1);


INSERT INTO tb_review (text, movie_id, user_id) values ('Ótimo filme, recomendo a todos', 4, 1);
INSERT INTO tb_review (text, movie_id, user_id) values ('Série maravilhosa, garanto que irão gostar', 2, 2);
INSERT INTO tb_review (text, movie_id, user_id) values ('Esse filme é um classico, uma obra de arte', 6, 7);
INSERT INTO tb_review (text, movie_id, user_id) values ('Esse filme é bem legal, curti muito', 8, 6);
INSERT INTO tb_review (text, movie_id, user_id) values ('Sou super fã dessa serie de filmes', 10, 12);
INSERT INTO tb_review (text, movie_id, user_id) values ('Amei, ficou demais', 2, 2);
INSERT INTO tb_review (text, movie_id, user_id) values ('Não achei graça, filme muito sem sentido', 2, 3);
INSERT INTO tb_review (text, movie_id, user_id) values ('Filme excelente, o enredo é muito bem elaborado', 12, 3);
INSERT INTO tb_review (text, movie_id, user_id) values ('Retrata muito bem a realidade das favelas', 6, 6);
INSERT INTO tb_review (text, movie_id, user_id) values ('Esse filme muito massa, nunca perde a graça', 8, 7);
INSERT INTO tb_review (text, movie_id, user_id) values ('Esse filme nunca perde a graça, já assiti varias vezes', 4, 2);
INSERT INTO tb_review (text, movie_id, user_id) values ('Muito bom, queria que tivesse uma continuidade', 4, 7);
INSERT INTO tb_review (text, movie_id, user_id) values ('Will muito bom ator, ótimo filme', 4, 3);
INSERT INTO tb_review (text, movie_id, user_id) values ('Bacana o filme!', 10, 3);
INSERT INTO tb_review (text, movie_id, user_id) values ('Adoro esse tipo de cómedia romantica.', 8, 2);
INSERT INTO tb_review (text, movie_id, user_id) values ('Esse filme me faz lembrar um antigo relacionamento', 12, 4);
INSERT INTO tb_review (text, movie_id, user_id) values ('Legal, esse filme me faz lembrar minha ex namorada ;(', 6, 12);
INSERT INTO tb_review (text, movie_id, user_id) values ('Muito fera !!! recomendo !!', 4, 3);
INSERT INTO tb_review (text, movie_id, user_id) values ('Ri muito, super recomendo', 8, 2);
INSERT INTO tb_review (text, movie_id, user_id) values ('Esse filme é pala kkkkkk', 12, 4);
INSERT INTO tb_review (text, movie_id, user_id) values ('Achei muito legal, cheio de animações legais', 12, 12);
INSERT INTO tb_review (text, movie_id, user_id) values ('Não gostei, achei sem graça', 10, 2);
INSERT INTO tb_review (text, movie_id, user_id) values ('Até que é legal, dou nota 7', 10, 3);
INSERT INTO tb_review (text, movie_id, user_id) values ('Esse filme é bom, só não gostei muito do final', 8, 2);
INSERT INTO tb_review (text, movie_id, user_id) values ('Esse filme é bem legal, curti muito.', 8, 3);
INSERT INTO tb_review (text, movie_id, user_id) values ('Não gostei achei bem sem graça', 6, 4);
INSERT INTO tb_review (text, movie_id, user_id) values ('Esperava mais do filme.', 12, 6);








