class Team {
  constructor() {
    this.team = new Set();
  }

  add(hero) {
    if (this.team.has(hero)) {
      throw new Error(`${hero.type} ${hero.name} уже есть в команде`);
    }
    this.team.add(hero);
  }

  addAll(...heroes) {
    heroes.forEach((hero) => this.team.add(hero));
  }

  toArray() {
    return [...this.team];
  }

  *[Symbol.iterator]() {

    //Думаю так
    // yield this.team.values()

    //или так
    const teamArray = [...this.team];
    for(let i =0; i < teamArray.length; i++) {
      yield teamArray[i];
    }
  }
}


const zombie = {
  name: 'Shon',
  type: 'Zombie',
  level: 2,
  health: 100,
  attack: 48,
  defence: 12,
};

const undead = {
  name: 'Fred',
  type: 'Undead',
  level: 2,
  health: 100,
  attack: 48,
  defence: 12,
};

const bowman = {
  name: 'Legolas',
  type: 'Bowman',
  level: 2,
  health: 100,
  attack: 25,
  defence: 25,
};

const myTeam = new Team();

myTeam.add(zombie);
myTeam.add(bowman);
myTeam.add(undead);

for (current of myTeam) {
  console.log(current);
}
