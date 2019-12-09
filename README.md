## React Challenge 02

### Introdução

Este é um desafio para testar seus conhecimentos em JavaScript, React, Redux Next.js;

Neste desafio existem várias formas de desenvolver com qualidade e reuso este tipo de projeto. 

O objetivo é avaliar a sua forma de estruturação e autonomia em decisões para construir algo escalável.

### Desafio

Os portais de conteúdo que cliente possui atualmente impactam aproximadamente 120 milhões de pessoas mensalmente em 35 países e disponíveis em pelo menos 23 idiomas. 
Uma das principais características é o posicionamento de cada marca no Google (SEO). 
Desta forma todos os projetos devem ser muito bem estruturados pensando em SEO, fluidez, reuso (componentes reutilizados em vários projetos) e 
velocidade de exibição mensurados através do Google PageSpeed (https://developers.google.com/speed/pagespeed/insights/). 
O seu objetivo é criar um projeto que dê atenção aos requisitos acima. 

### Recursos

1. Verificar a documentação: https://developer.wordpress.org/rest-api/ 
2. Consumir a REST API Wordpress do Mejor Con Salud: https://mejorconsalud.com/wp-json/mc/v1/ 
3. O seu ambiente local rodando na porta 9045 (localhost:9045)
4. Webpack
5. React.js
6. NextJs (SSR)
7. Material UI: https://material-ui.com (poderá definir outro se achar mais conveniente). Exemplos de blogs do cliente:
- https://mejorconsalud.com/ 
- https://miviaje.com/
- https://misanimales.com/ 

### Passo a Passo
1. Ao abrir a Home deverá conter os 10 artigos mais relevantes consumindo o endpoint: https://mejorconsalud.com/wp-json/mc/v1/posts?orderby=relevance 
Ter um buscador no Header no projeto usando parâmetros como:

- http://mejorconsalud.com/wp-json/mc/v1/posts?search=tesasasas
14:43
- https://mejorconsalud.com/wp-json/mc/v1/posts?search=calabazas&page=1&orderby=relevance
14:44
- x-mc-total-items: 64
- x-mc-total-pages: 7 

2. Trabalhar com Listagem e Paginação no resultado das buscas.
3. A página single de um artigo deverá conter: título, categoria, data de publicação, conteúdo, tags, biografias, autor e descrição do autor. Exemplo de uma página completa: https://mejorconsalud.com/4-formas-de-preparar-banos-para-suavizar-los-pies/ 
4. A single de artigo deverá consumir o endpoint: baseURL/wp-json/mc/v1/posts/{{ID}} - exemplo: [GET] https://mejorconsalud.com/wp-json/mc/v1/posts/406721  
5. Usar Conceitos de Componentização. 
6. Adicionar recursos para trabalhar com meta-tags, keywords e og:tags na configuração do Server Side Rendering;
7. Configurar a página individual do artigo com as tags essenciais de SEO;
8. Trabalhar com carregamento lazyloading ao abrir a single de um artigo;   
9. Será um plus se a single de artigo conter a versão AMP;

