class Heroi {
    // Construtor da classe que inicializa as propriedades do herói
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método que define o ataque baseado no tipo do herói
    atacar() {
        let ataque;

        // Verifica o tipo do herói e define a descrição do ataque
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
                break;
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi

// Criando instâncias de heróis
const heroi1 = new Heroi('Gandalf', 150, 'Mago');
const heroi2 = new Heroi('Aragorn', 87, 'Guerreiro');
const heroi3 = new Heroi('Yoda', 900, 'Monge');
const heroi4 = new Heroi('Naruto', 17, 'Ninja');

// Realizando ataques
heroi1.atacar(); // O mago atacou usando magia
heroi2.atacar(); // O guerreiro atacou usando espada
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken
