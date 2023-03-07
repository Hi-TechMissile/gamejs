// Add counter variable conditions and the id selector for "Damage dealt".
let gold = 20;
let health = 100;
let currentWeapon = 0;
let xp = 0;
let hps = 50;
let hpb = 100;
let hpd = 200;
let mons = 0;
let power = 10;
let def;
let bef;
let man;
let t;
let temp;
let lol;
let count1 = 0;
let count2 = 0;
let count3 = 0;
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const stat = document.querySelector("#stat");
const p = document.querySelector("#p");
const x = document.querySelector("#xp");
const h = document.querySelector("#health");
const g = document.querySelector("#gold");
const text = document.querySelector("#text");
const slime = document.querySelector("#slime");
const hp1 = document.querySelector("#hp1");
const easy = document.querySelector('#easy');
const hard = document.querySelector('#hard');
const insane = document.querySelector('#insane');
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
const m = [
    {
        name: "Slime",
        mh: 50
    },
    {
        name: "Beast",
        mh: 100
    },
    {
        name: "Dragon",
        mh: 200
    }
];
const weapons = [
    {
        name: "Stick",
        "power": 10
    },
    {
        name: "Stone Sword",
        "power": 20,
    },
    {
        name: "Iron Sword",
        "power": 40,
    },
    {
        name: "Iron Axe",
        "power": 60,
    },
    {
        name: "Diamond Sword",
        "power": 80,
    }
];
function goStore()
{
    text.innerText = "You enter the store.\n";
    text.innerText += '\nCost of health: 1 Gold per 2 units\n';
    text.innerText += '\nWeapons available:\n 1. Stone Sword (20 Gold)\n2. Iron Sword (40 Gold)'
    text.innerText += '\n3. Iron Axe (60 Gold)\n4. Diamond Sword (80 Gold)'
    stat.innerText = weapons[currentWeapon].name;
    p.innerText = weapons[currentWeapon].power;
    button1.innerText = '\u2190';
    button2.innerText = 'Buy health';
    button3.innerText = 'Buy Weapon';
    button2.onclick = buyhealth;
    button3.onclick = buyweapon;
    button1.onclick = home;
}
function home()
{
    text.innerText = "You are in the town square now.";
    button2.style.display = "inline";
    button3.style.display = "inline";
    slime.style.display = "none"
    stat.innerText = weapons[currentWeapon].name;
    p.innerText = weapons[currentWeapon].power;
    button1.innerText = 'Go to Store';
    button2.innerText = 'Go to Cave';
    button3.innerText = 'Fight Dragon';
    g.innerText = gold;
    h.innerText = health;
    x.innerText = xp;
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;    
}
function buyhealth()
{
    if(gold>=1)
    {
        gold-=1;
        health+=2;
        h.innerText = health;
        g.innerText = gold;
    }
    else
        text.innerText = "Not enough Gold to buy Health!";    
}
function buyweapon()
{
    if(gold>=80 && currentWeapon!=4)
    {
        gold-=80
        g.innerText = gold
        currentWeapon = 4
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
        power = weapons[currentWeapon].power;
    }
    else if(gold>=60 && currentWeapon<3)
    {
        currentWeapon = 3
        gold-=60
        g.innerText = gold
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
        power = weapons[currentWeapon].power;
    }
    else if(gold>=40 && currentWeapon<2)
    {
        gold-=40
        g.innerText = gold
        currentWeapon = 2
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
        power = weapons[currentWeapon].power;
    }
    else if(gold>=20 && currentWeapon<1)
    {
        currentWeapon = 1
        gold-=20
        g.innerText = gold
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
        power = weapons[currentWeapon].power;
    }
    else
        text.innerText = "Not enough Gold to buy a better Weapon!"
}

function goCave()
{
    text.innerText = "Entering cave...\nChoose the Monster that you want to fight."
    button1.innerText = "\u2190";
    button2.innerText = "Fight Slime";
    button3.innerText = "Fight Beast"
    slime.style.display = "none"
    button1.onclick = home;
    button2.onclick = fightSlime;
    button3.onclick = fightBeast;
}

function diff()
{
    let fact;
    if(mons==0)
        fact = power/(m[mons].mh) + xp/200 + health/100
    else if(mons==1)
        fact = power/(m[mons].mh) + xp/200 + health/150
    else
        fact = power/(m[mons].mh) + xp/200 + health/200
    if(fact<0.50)
    {
        hard.style.display = "none"
        easy.style.display = "none"
        insane.style.display = "inline"
        
    }
    else if(fact>=0.50 && fact<0.75)
    {
        insane.style.display = "none"
        easy.style.display = "none"
        hard.style.display = "inline"
        
    }
    else
    {
        insane.style.display = "none"
        hard.style.display = "none"
        easy.style.display = "inline"
        
    }
}

function fightSlime()
{
    mons = 0;
    if(hps==0)
        hps = 50;
    def=0;
    button2.innerText = "Attack"
    button3.innerText = "Dodge"
    text.innerText = "Fighting Slime...\n";
    text.innerText += "\nTIP: Attacking can cause you to lose more health than you really should."
    text.innerText += "\nChoose between attacking and dodging!"
    text.innerText += "\nThe more you attack a monster, the stronger it becomes!"
    text.innerText += "\nTry to defeat the monster using the minimum number of moves possible!"
    slime.style.display = "block"
    diff();
    hp1.innerText = hps;
    button1.onclick =  goCave;
    button2.onclick = attack;
    button3.onclick = dodge;
}

function fightBeast()
{
    mons = 1;
    if(hpb==0)
        hpb = 100;
    bef = 0;
    button2.innerText = "Attack"
    button3.innerText = "Dodge"
    text.innerText = "Fighting Beast...\n";
    text.innerText += "\nTIP: Attacking can cause you to lose more health than you really should."
    text.innerText += "\nChoose between attacking and dodging!"
    text.innerText += "\nThe more you attack a monster, the stronger it becomes!"
    text.innerText += "\nTry to defeat the monster using the minimum number of moves possible!"
    slime.style.display = "block"
    diff();
    hp1.innerText = hpb;
    button1.onclick =  goCave;
    button2.onclick = attack;
    button3.onclick = dodge;
}

function fightDragon()
{
    mons = 2;
    if(hpd==0)
        hpd = 200;
    man = 0;
    button1.innerText = '\u2190';
    button2.innerText = "Attack"
    button3.innerText = "Dodge"
    text.innerText = "Fighting the Dragon...\nThe Dragon behaves unusually. It always deals a minimum amount of damage to you!";
    text.innerText += "\nTIP: Attacking can cause you to lose more health than you really should."
    text.innerText += "\nChoose between attacking and dodging!"
    text.innerText += "\nThe more you attack a monster, the stronger it becomes!"
    text.innerText += "\nTry to defeat the monster using the minimum number of moves possible!"
    slime.style.display = "block"
    diff();
    hp1.innerText = hpd;
    button1.onclick =  home;
    button2.onclick = attack;
    button3.onclick = dodge;
}

function attack()
{
    let damage = Math.floor(power/10 + Math.random()*(1/(0.40+health/100))) +  
                 Math.floor(xp/15 + (xp/10)*Math.random()) + Math.floor(power/5+(power/5)*Math.random());
    if(mons==0 && hps-damage>0 && def==0)
    {
        lol = Math.floor(damage/8 + Math.random()*2)
        if(health-lol>=0)
        {
            text.innerText += "\nDamage dealt: " + damage;
            hps-=damage;
            hp1.innerText = hps;
            health -= lol;
            h.innerText  = health;
        }
        else
        {
            health = 0;
            h.innerText = "0";
            revive();
        }
    }
    else if(mons==0 && def==0)        // XP and Gold rewards for Slime
    {
        lol = Math.floor(damage/8 + Math.random()*2)
        if(health-lol>=0)
        {
            hps = 0;
            hp1.innerText = hps;
            text.innerText = "Congratulations, you beat the " + m[mons].name + "!\nThe Monster died and dropped "
            t = Math.floor(15+Math.random()*11);
            temp = Math.floor(15+Math.random()*11);
            text.innerText += " " + t + " XP and " + temp + " Gold.";
            suck();
            xp += t;
            gold += temp;
            g.innerText = gold;
            x.innerText = xp;
            def++;
            health -= lol;
            h.innerText  = health;
        }
        else
        {
            health = 0;
            h.innerText = "0";
            revive();
        }
        slime.style.display = "none"
    }
    else if(mons==1 && hpb-damage>=0 && bef==0)
    {
        lol = Math.floor(damage/6 + Math.random()*3)
        if(health-lol>=0)
        {
            text.innerText += "\nDamage dealt: " + damage;
            hpb-=damage;
            hp1.innerText = hpb;
            health -= lol;
            h.innerText  = health;
        }
        else
        {
            health = 0;
            h.innerText = "0";
            revive();
        }
    }
    else if(mons==1 && bef==0)        // XP and Gold rewards for Beast 
    {
        //text.innerText += "\nDamage dealt: " + damage;
        lol = Math.floor(damage/6 + Math.random()*3)
        if(health-lol>=0)
        {
            hpb = 0;
            hp1.innerText = hpb;
            text.innerText = "Congratulations, you beat the " + m[mons].name + "!\nThe Dragon died and dropped "
            t = Math.floor(25+Math.random()*11);
            temp = Math.floor(25+Math.random()*11);
            text.innerText += " " + t + " XP and " + temp + " Gold.";
            suck();
            xp += t;
            gold += temp;
            g.innerText = gold;
            x.innerText = xp;
            bef++;
            health -=  lol;
            h.innerText  = health;
        }
        else
        {
            health = 0;
            h.innerText = "0";
            revive();
        }
        slime.style.display = "none"
    }
    else if(mons==2 && man==0 && hpd-damage>=0)
    {
        lol = Math.floor(damage/4 + 4)
        if(health-lol>=0)
        {
            text.innerText += "\nDamage dealt: " + damage;
            hpd-=damage;
            hp1.innerText = hpd;
            health -= lol;
            h.innerText  = health;
        }
        else
        {
            health = 0;
            h.innerText = "0";
            revive();
        }
    }
    else if(mons==2 && man==0)               // XP and rewards for the Dragon
    {
        //text.innerText += "\nDamage dealt: " + damage;
        lol = Math.floor(damage/4 + 4)
        if(health-lol>=0)
        {
            hpd = 0;
            hp1.innerText = hpd;
            text.innerText = "Congratulations, you beat the DRAGON!!!\nThe Dragon died and dropped "
            t = Math.floor(40+Math.random()*11);
            temp = Math.floor(40+Math.random()*11);
            text.innerText += " " + t + " XP and " + temp + " Gold.\nYOU WIN!";
            suck();
            xp += t;
            gold += temp;
            g.innerText = gold;
            x.innerText = xp;
            man++;
            health -= lol;
            h.innerText  = health;
        }
        else
        {
            health = 0;
            h.innerText = "0";
            revive();
        }
        slime.style.display = "none"
    }
    
}

function dodge()
{
    //text.innerText += "hi\n";
    if(mons==0 && def==0)
    {
        //text.innerText += "\nDamage dealt: " + damage;
        //hps-=damage;
        //hp1.innerText = hps;
        lol = Math.floor(Math.random()*(hps+50)/health)
        if(health-lol>=0)
        {
            health -= lol;
            h.innerText  = health;
        }
        else
        {
            health = 0;
            h.innerText = "0";
            revive();
        }
        if(hps-2*lol>=0)
        {
            hps -= 2*lol;
            hp1.innerText = innerText = hps;
        }
        else
        {
            hps = 0;
            hp1.innerText = 0;
            text.innerText = "Congratulations, you beat the " + m[mons].name + "!\nThe Monster died and dropped "
            t = Math.floor(15+Math.random()*11);
            temp = Math.floor(15+Math.random()*11);
            text.innerText += " " + t + " XP and " + temp + " Gold.";
            xp += t;
            gold += temp;
            g.innerText = gold;
            x.innerText = xp;
            def++;
        }
    }
    else if(mons==1 && bef==0)
    {
        // text.innerText += "\nDamage dealt: " + damage;
        // hpb-=damage;
        // hp1.innerText = hpb;
        lol = Math.floor(Math.random()*(hpb+50)/health)
        if(health-lol>=0)
        {
            health -= lol;
            h.innerText  = health;
        }
        else
        {
            health = 0;
            h.innerText = "0";
            revive();
        }
        if(hpb-2*lol>=0)
        {
            hpb -= 2*lol;
            hp1.innerText = innerText = hpb;
        }
        else
        {
            hpb = 0;
            hp1.innerText = hpb;
            text.innerText = "Congratulations, you beat the " + m[mons].name + "!\nThe Dragon died and dropped "
            t = Math.floor(25+Math.random()*11);
            temp = Math.floor(25+Math.random()*11);
            text.innerText += " " + t + " XP and " + temp + " Gold.";
            xp += t;
            gold += temp;
            g.innerText = gold;
            x.innerText = xp;
            bef++;
        }
    }
    else if(mons==2 && man==0)
    {
        // text.innerText += "\nDamage dealt: " + damage;
        // hpd-=damage;
        // hp1.innerText = hpd;
        lol = Math.floor(Math.random()*(hpd+50)/health)
        if(health-lol>=0)
        {
            health -= lol;
            h.innerText  = health;
        }
        else
        {
            health = 0;
            h.innerText = "0";
            revive();
        }
        if(hpd-2*lol>=0)
        {
            hpd -= 2*lol;
            hp1.innerText = hpd;
        }
        else
        {
            hpd = 0;
            hp1.innerText = hpd;
            text.innerText = "Congratulations, you beat the DRAGON!!!\nThe Dragon died and dropped "
            t = Math.floor(40+Math.random()*11);
            temp = Math.floor(40+Math.random()*11);
            text.innerText += " " + t + " XP and " + temp + " Gold.\nYOU WIN!";
            xp += t;
            gold += temp;
            g.innerText = gold;
            x.innerText = xp;
            man++;
        }
    }

}

function revive()
{
    button3.style.display = "none";
    text.innerText = "You died!\nDo you want to revive (50 Gold)?";
    button2.innerText = "Revive (50 Gold)";
    button3.innerText = "Quit";
    button2.onclick = cost;
    button3.onclick = lose;
}

function cost()
{
    if(gold>=50)
    {
        gold -= 50;
        g.innerText = gold;
        text.innerText = "You revived! Best of luck!";
        health = 100;
        h.innerText = health;
    }
    else
    {
        slime.style.display = "none"; 
        button2.style.display = "none";
        button3.style.display = "none";
        button1.onclick = home;
        text.innerText = "Not enough Gold to revive.";
        text.innerText += "\nYou lose!\nBetter luck next time!";
        button1.innerText = "Restart";
        lose();
    }
}

function lose()
{
    gold = 20;
    health = 100;
    currentWeapon = 0;
    xp = 0;
    hps = 50;
    hpb = 100;
    hpd = 200;
    mons = 0;
    power = 10;
    stat.innerText = weapons[currentWeapon].name;
    p.innerText = weapons[currentWeapon].power;
    power = weapons[currentWeapon].power;
}

function badLuck()
{
    return Math.random()*11;
}

function suck()
{
    if(badLuck()<=3.0 && currentWeapon!=0)
    {
        text.innerText  += "\nYour " + weapons[currentWeapon].name + " breaks.\n"
        currentWeapon = 0
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
        power = weapons[currentWeapon].power;
    }
}