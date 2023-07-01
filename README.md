# Jogo Pong 🎾
Esse código foi criado e executado utilizando a biblioteca do p5.js. O p5.js é uma biblioteca JavaScript criada para tornar o desenvolvimento algo acessível e inclusivo para artistas, designers, educadores e iniciantes, ou seja, para qualquer pessoa. Por conta dessa característica, a biblioteca vem com inúmeras funções prontas, que facilitam o processo de escrita do código. Sendo assim, a função ```draw()```, ```setup()```, ```preload()``` são alguns exemplos dessas soluções que já estão incluídas na biblioteca.

![Jogo Pong](/jogo%20pong.gif)

# Por dentro das funções 
- ```function draw()``` É responsável por mostrar os desenhos na tela de pré-visualização e atribuir comportamentos ao código. Além disso, o p5.js utiliza um sistema de coordenadas que atribui um valor em cada ponto da tela para que possamos identificar o local exato onde os desenhos aparecem. Um aspecto interessante da função é que ela funciona como se possuísse um loop, o que faz com que o código escrito em seu escopo seja executado continuamente e por isso que consegue desenhar os elementos no ambiente de visualização e fazê-los se movimentar.
    - ```A draw ()``` é chamada automaticamente após a ```setup()``` e nunca deve ser chamada explicitamente;
    - ```A draw ()``` executa continuamente as linhas de código contidas em seu bloco até que o programa seja interrompido ou ```noLoop ()``` seja chamada;
    - Dentro da ```draw()``` as ações são controladas com ```noLoop()```, ```redraw()``` e ```loop()```. Depois que ```noLoop()``` interrompe a execução do código em ```draw()```, a ```redraw()``` faz com que o código dentro de ```draw()``` seja executado uma vez e ```loop()``` fará com que o código dentro de ```draw()``` retome a execução continuamente;
    - Podemos inserir diretamente o código na ```draw()``` ou chamar as funções que apresentam o comportamento desejado (por questões de boas práticas, o instrutor trabalha com funções no curso);
    - Só pode haver uma função ```draw()``` para cada sketch, e ```draw()``` deve existir se quisermos que o código seja executado continuamente ou para processar eventos como ```mousePressed()```;
- ```constrain()```: limita um valor aos valores passados a ela. Caso o valor seja maior que o limite superior, a função retornará o limite superior. Se o valor for menor que o limite inferior, será retornado o valor do limite inferior.

# Sistema de coordenadas
Além de todas essas informações, um elemento super importante para compreender o posicionamento dos objetos em tela é o sistema de coordenadas do p5.js.

# Referências
- [P5 JS: Plano cartesiano](https://www.alura.com.br/artigos/p5-plano-cartesiano)
- [Explicação da função draw()](https://p5js.org/reference/#/p5/draw)
- [Home p5.js](https://p5js.org/)
- [A 2d collision detection library for p5.js](https://github.com/bmoren/p5.collide2D)
