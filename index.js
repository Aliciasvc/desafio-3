class Hero 
{
  constructor(name, age, typeGamer){
    this.name = name || prompt('Qual seu nome?');
    this.age = age || prompt('Qual sua idade?');
    this.typeGamer = typeGamer || prompt('Qual o seu tipo de jogador?');
  }
  
  attack(typeGamer)
  {
    let typeAttack;
    if (this.typeGamer.toLowerCase() == 'guerreiro'){
      typeAttack = 'Espada';
      console.log(`O ${this.typeGamer} atacou usando ${typeAttack}`);
    }
    
    else if (this.typeGamer.toLowerCase() == 'mago'){
      typeAttack = 'Magia';
      console.log(`O ${this.typeGamer} atacou usando ${typeAttack}`);
    }
    
    else if (this.typeGamer.toLowerCase() == 'Monge'){
      typeAttack = 'Artes marciais';
      console.log(`O ${this.typeGamer} atacou usando ${typeAttack}`);
  }
    else if (this.typeGamer.toLowerCase() == 'Ninja'){
      typeAttack = 'Shuriken';
      console.log(`O ${this.typeGamer} atacou usando ${typeAttack}`);
  }
    
    else{
      console.log(`O jogador ${this.name} do tipo ${this.typeGamer} Usou um ataque desconhecido`);
    }
  }
}
  
const hero = new Hero();
hero.attack();