var texto = `<html>
<head>
   <title>Gulliver Traveller - Roteiros</title>
</head>
<body>
 <b>->1 - Roteiros para *São Paulo*</b>
 <br>
 A Terra da Garoa!
 <br>
 Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista
 <br>
   #Roteiro A | Região: Avenida Paulista
 <br>
 MASP; Parque Trianon; Rua Augusta
 <br>
 #Roteiro B | Região: Centro
 <br>
   Catedral da Sé; Pátio do Colégio; Rua Augusta
 <br>
   #Roteiro C | Região: Vila Madalena
 <br>
   Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila
 <br>
 <b>->2 - Roteiros para *Las Vegas*</b>
 <br>
   Viva Las Vegas!
 <br>
   A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!
 <br>
   #Roteiro A | Região: Las Vegas Boulevard South
 <br>
   Fonte do Bellagio; Principais Cassinos; Madame Tussauds
 <br>
   #Roteiro B | Região: Downtown;
 <br>
   Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado;
 <br>
   #Roteiro C | Região: Las Vegas Boulevard North
 <br>
    Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b>
 <br>
   Privet!
 <br>
   A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin
 <br>
 <br>
    #Roteiro A | Região: Praça Vermelha
    <br>
 Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin
 <br>
    #Roteiro B | Região: Centro
 <br>
    Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou
 <br>
    #Roteiro C | Região: Obras pela cidade
 <br>
    Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station 
 <br>
</body>
</html>`

var cidade1 = texto.substr(102, 9);
var cidade2 = texto.substr(695, 9);
var cidade3 = texto.substr(1394, 6);

var cidades = cidade1 + ", " + cidade2 + " e " + cidade3;

alert("As cidades citadas por gulliver foram " + cidades);

var roteirop = texto.substr(380, 38);
var roteirosp = texto.substr(424, 33);

alert("Cidade de São Paulo " + roteirop + roteirosp);

var roteirov = texto.substr(998, 46);
var roteirolv = texto.substr(1053, 55);

alert("Cidade de Las Vegas " + roteirov + roteirolv);

var roteiropv = texto.substr(1575, 34);
var roteirorv = texto.substr(1613, 70);

alert("Cidade de Privet " + roteiropv + `
` + roteirorv);

alert ("O roteiro A de cada cidade conta com 3 pontos turísticos");

var centrosp = texto.substr(502, 46);

alert("Os pontos turísticos encontrados no centro de São Paulo são: " + centrosp);

var dntw = texto.substr(1158, 65);

alert("Os pontos turísticos encontrados em Downtonwn Las Vegas são: " + dntw);

