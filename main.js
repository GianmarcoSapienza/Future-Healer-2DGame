kaboom({
    width: window.Width,
    height: window.Height,
    font: "Madimi",
    backgroundAudio: true,
})

//loading font
loadFont("Madimi", "ASSETS/MadimiOne-Regular.ttf")

//loadingMusic

loadSound("title-screen", "ASSETS/music/TITLE-SCREEN-mastered.wav");
loadSound("level-1", "ASSETS/music/LEVEL-1-mastered.wav");
loadSound("level-2","ASSETS/music/LEVEL-2-mastered.wav");
loadSound("level-3", "ASSETS/music/LEVEL-3-mastered.wav");
loadSound("level-4", "ASSETS/music/LEVEL-4-mastered.wav");
loadSound("coin", "ASSETS/sounds/ Coin-sound.mp3");
loadSound("confirm-push", "ASSETS/sounds/confirm-sound.wav");
loadSound("jumpingSound", "ASSETS/sounds/jumping.mp3");
loadSound("hit", "ASSETS/sounds/8BIT_16 BIT 15/Hit 1.wav");
loadSound("gameOverSound", "ASSETS/sounds/8BIT_16 BIT 15/Game Over 1.wav")
loadSound("chargerSound", "ASSETS/sounds/sound-charger-machine.wav");
loadSound("timeMachineSound", "ASSETS/sounds/time-machine-sound.wav");
loadSound("laser","ASSETS/sounds/8BIT_16 BIT 15/Weapon 2.wav");
loadSound("pickUpHeart", "ASSETS/sounds/8BIT_16 BIT 15/Misc 1.wav");
loadSound("succes", "ASSETS/sounds/8BIT_16 BIT 15/Success 1.wav");
loadSound("yeah", "ASSETS/sounds/MO_TB_fx_hit_vintagepowerpunch.wav");
loadSound("ending-music", "ASSETS/sounds/FNF_EBA_120_keys_beach_party.wav");

//loading buttons

loadSprite("A-BUTTON","ASSETS/backgrounds/A-BUTTON.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
        buttonA: {
            from: 0,
            to: 3,
            loop: true,
        }
    }
});
loadSprite("B-BUTTON","ASSETS/backgrounds/B-BUTTON.png",{
    sliceX: 4,
    sliceY: 1,
    anims: {
        buttonB: {
            from: 0,
            to: 3,
            loop: true,
        }   
    }
});
loadSprite("L-STICK","ASSETS/backgrounds/L-STICK.png", {
    sliceX: 3,
    sliceY: 1,
    anims: {
        lstick: {
            from: 0, 
            to: 2,
            loop: true,
        }
    }
});
loadSprite("RB-BUTTON","ASSETS/backgrounds/RB-BUTTON.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
        buttonRB: {
            from: 0,
            to: 3,
            loop: true,
        }
    }
});
loadSprite("START-PAUSE-BUTTON", "ASSETS/backgrounds/START-PAUSE-BUTTON.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
        buttonStart: {
            from: 0,
            to: 3,
            loop: true,
        }
    }
});

//loading player + enemy sprites + friends

loadSprite("player", "ASSETS/tilesets-da-tagliare/spritesheet-player.png", {
    sliceX: 4,
    sliceY: 4,
    anims: {
        idle: {
            from: 0 ,
            to: 3,
            loop: true,
        },
        walk: {
            from: 4,
            to: 7,
            loop: true,
        }, 
        jumpDown: {
            from: 8,
            to: 11,
            loop: false,
        },
        shoot: {
            from: 12,
            to: 13,
            loop: false,
        }

    }
})

loadSprite("enemy", "ASSETS/tilesets-da-tagliare/enemy.png", {
    sliceX: 4,
    sliceY: 2,
    anims: {
        walk: {
            from: 0,
            to: 2,
            loop: true,
        },
        shoot: {
            from: 3,
            to: 3,
            speed: 5,
            loop: true,
        }
    }
})
loadSprite("enemyLev2", "ASSETS/tilesets-da-tagliare/enemy-level2.png", {
    sliceX: 4,
    sliceY: 2,
    anims: {
        walk: {
            from: 0,
            to: 2,
            loop: true,
        },
        shoot: {
            from: 3,
            to: 3,
            speed: 5,
            loop: true,
        }
    }
})
loadSprite("enemyLev3", "ASSETS/tilesets-da-tagliare/enemy-level3.png", {
    sliceX: 4,
    sliceY: 2,
    anims: {
        walk: {
            from: 0,
            to: 2,
            loop: true,
        },
        shoot: {
            from: 3,
            to: 3,
            speed: 5,
            loop: true,
        }
    }
})
loadSprite("enemyLev4", "ASSETS/tilesets-da-tagliare/enemy-level4.png", {
    sliceX: 4,
    sliceY: 2,
    anims: {
        walk: {
            from: 0,
            to: 2,
            loop: true,
        },
        shoot: {
            from: 3,
            to: 3,
            speed: 5,
            loop: true,
        }
    }
})

loadSprite("scientifique", "ASSETS/backgrounds/Friend-lev1.png");
loadSprite("android", "ASSETS/backgrounds/Friend-lev2.png");
loadSprite("forestFriend", "ASSETS/backgrounds/Friend-lev3.png");

//loading backgrounds
loadSprite("Title_Start", "ASSETS/backgrounds/future_healer_Title_Game.png");
loadSprite("level1", "ASSETS/backgrounds/background_level_1.png");
loadSprite("level2", "ASSETS/backgrounds/background_level_2.png");
loadSprite("level3", "ASSETS/backgrounds/background_level_3.png");
loadSprite("level4", "ASSETS/backgrounds/background_level_4.png");
loadSprite("time-machine", "ASSETS/tilesets-da-tagliare/Capsule-time-machine.png");
loadSprite("tm", "ASSETS/tilesets-da-tagliare/Capsule-time-machine-tiny.png");
loadSprite("pauseBoard", "ASSETS/tilesets-da-tagliare/ret3bordo0.png");
loadSprite("endEnergie", "ASSETS/backgrounds/EnergieRenouvelable.jpeg");
loadSprite("scieMed", "ASSETS/backgrounds/Sciences.jpeg");
loadSprite("poli", "ASSETS/backgrounds/Institutions.jpeg");
loadSprite("just", "ASSETS/backgrounds/Justice.jpeg");
loadSprite("sameValues", "ASSETS/backgrounds/same-values-ending.jpg");



//loading tilesets
loadSprite("level1-block", "ASSETS/tilesets-da-tagliare/level1-Tilesets/coddao.png");
loadSprite("level2-block", "ASSETS/tilesets-da-tagliare/level2-tilesets/level2-tileset.png");
loadSprite("metal-platform1", "ASSETS/backgrounds/Pack 01 (Pixel Art)/PNG/Metal wall 1.png");
loadSprite("metal-platform2", "ASSETS/backgrounds/Pack 01 (Pixel Art)/PNG/Wall pipes.png");
loadSprite("platform-lev2-1", "ASSETS/tilesets-da-tagliare/level2-tilesets/Floor-4.png");
loadSprite("platform-lev2-2", "ASSETS/tilesets-da-tagliare/level2-tilesets/Floor-5.png");
loadSprite("level3-block","ASSETS/tilesets-da-tagliare/level3-tilesets/level3-tileset.png");
loadSprite("platform-lev3", "ASSETS/tilesets-da-tagliare/level3-tilesets/Floor 6.png");
loadSprite("level4-block", "ASSETS/tilesets-da-tagliare/level4-tilesets/level4-tileset.png");
loadSprite("platform-lev4-1", "ASSETS/tilesets-da-tagliare/level4-tilesets/Calque 17.png");
loadSprite("platform-lev4-2", "ASSETS/tilesets-da-tagliare/level4-tilesets/Calque 18 copie 3.png")
loadSprite("platform-lev4-3", "ASSETS/tilesets-da-tagliare/level4-tilesets/Calque 18.png");

//loading attacks + items
loadSprite("energy-attack", "ASSETS/energy_attacks_items/GlowingBall_Blue_22frames_RPG.png", {
    sliceX : 5,
    sliceY: 5, 
    anims: {
        glow: {
            from: 0,
            to: 21, 
            loop: true,
            speed: 1,
        }
    }
})

loadSprite("enemy-bullet", "ASSETS/energy_attacks_items/enemy-bullet.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
        fire: {
            from: 0,
            to: 3,
            speed: 4,
            loop: true,
        }
    }
})

loadSprite("health", "ASSETS/energy_attacks_items/healthP.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
        heart: {
            from: 0,
            to: 3,
            speed: 5,
            loop: true,
        }
    }
});

loadSprite("health2", "ASSETS/energy_attacks_items/healthP2.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
        heart: {
            from: 0,
            to: 3,
            speed: 5,
            loop: true,
        }
    }
});

loadSprite("timeMachine-energy", "ASSETS/energy_attacks_items/enemy-coin.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
        glow: {
            from: 0,
            to: 3,
            loop: true,
        },
        idle: {
            from: 1,
            to: 1,
        }
    }
});

loadSprite("timeMachine-energy2", "ASSETS/energy_attacks_items/enemy-coin2.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
        glow: {
            from: 0,
            to: 3,
            loop: true,
        },
        idle: {
            from: 1,
            to: 1,
        }
    }
});

loadSprite("goldstar", "ASSETS/energy_attacks_items/GOLDEN-STAR.png", {
    sliceX: 7,
    sliceY: 1,
    anims: {
        bright: {
            from: 0,
            to: 6,
            loop: true,
            speed: 10,
        }
    }
});
loadSprite("silverstar", "ASSETS/energy_attacks_items/SILVER-STAR.png", {
    sliceX: 7,
    sliceY: 1,
    anims: {
        bright: {
            from: 0,
            to: 6,
            loop: true,
            speed: 7,
        }
    }
});
loadSprite("bronzestar", "ASSETS/energy_attacks_items/BRONZE-STAR.png", {
    sliceX: 7,
    sliceY: 1,
    anims: {
        bright: {
            from: 0,
            to: 6,
            loop: true,
            speed: 7,
        }
    }
});

loadSprite("equality", "ASSETS/energy_attacks_items/EQUALITY.png");
loadSprite("gPolitics", "ASSETS/energy_attacks_items/GPOLITICS.png");
loadSprite("medicine", "ASSETS/energy_attacks_items/HEALTH.png");
loadSprite("enel", "ASSETS/energy_attacks_items/RENEWABLE.png");

//variables

let glowIntensity = 0;
let maxGlow = 10;
let glowGrowing = true;
let PLAYER_SPEED = 300;
let JUMP_FORCE = 1200;
let ENEMY_SPEED = 100;
let HS_PLAYER = 10;
let TIME_ENERGY = 0;
let isGamePaused = false;
let score;
let munitions = 10;
let playerDelta = 0;
let curDialog1 = 0;
let curDialog2 = 0;
let curDialog3 = 0;
let curDialog4 = 0;
let isDialogDone = false;
let isDialog2Done = false;
let isDialog3Done = false;
let isDialog4Done = false;

let gameState = {
    currentLevel: null,
    nextLevel: null,
    currentSong: null,
}

//points of scenarios 
let EQUALITY_POINTS = 0;
let POLITICS_POINTS = 0;
let MEDICINE_POINTS = 0;
let GREEN_EN_POINTS = 0;

//level dialogs

const dialogsLev1 = [
    ["scientifique", "Heureusement que tu es enfin arrivée. Quelqu'un a volé la machine à voyager dans le temps sur laquelle nous avons travaillé pendant des années !"],
    ["scientifique", "J'ai l'impression qu'il y a quelqu'un qui ne veut pas que nous voyions comment sera notre futur. Mais nous devons faire quelque chose pour le changer et nous avons maintenant la possibilité de voyager pour voir comment il sera !"],
    ["scientifique", "Essaie de trouver la machine à voyager dans le temps et charge-la avec l'énergie que tu as gagné ! Elle se trouve quelque part dans ce niveau. Ce n'est qu'à cette condition que nous pouvons espérer changer ce qui nous attend dans le futur."],
];

const dialogsLev2 = [
    ["android", "Oh ! Que voient mes yeux ?"],
    ["android", "Tu as l'air tout à fait humain ! Une personne faite en chair et en os, contrairement à moi ! Des gens comme toi n'ont pas été vus sur notre planète depuis des années."],
    ["android", "J'imagine que tu viens de très loin. Tu dois savoir que dans ce futur, il ne reste que très peu d'êtres humains. Tout est désormais contrôlé par des robots et il y a une guerre qui dure depuis des années."],
    ["android", "J'espère sincèrement que tu réussiras à atteindre ton objectif. Mais ne reste pas ici trop longtemps ! Voilà un conseil."]
];

const dialogsLev3 = [
    ["forestFriend", "..."],
    ["forestFriend", "Cette planète était auparavant florissante et pleine de vie."],
    ["forestFriend", "Ensuite, à cause d'un besoin égoïste, nous, les humains, avons tout gâché. Nous avons construit tous ces gratte-ciels que tu vois ici."],
    ["forestFriend", "Et puis, un jour, nous avons tout simplement abandonné la terre. Les plus riches sont partis coloniser d'autres planètes, et les quelques uns d'entre nous qui sont restés ici ont dû faire face à une nature qui, miraculeusement, semblait vouloir reprendre sa place."],
    ["forestFriend", "..."],
    ["forestFriend", "Je ne sais pas d'où tu viens, voyageur étrange. Mais je te confie que j'aimerais pouvoir voyager dans le temps et essayer d'avertir les gens pour qu'ils essaient de changer les choses."],
    ["forestFriend", "Sois prudent !"]
]; 

const dialogsLev4 = [
    ["nul","L'espace cosmique t'accueille avec un grand silence."],
    ["nul","Il semble qu'il n'y ait plus personne."],
    ["nul","De loin, tu vois des ennemis s'approcher. Des milliers d'années se sont écoulées au cours de tes voyages dans le temps, mais ils t'en veulent toujours. Ils t'en veulent parce que tu as essayé de regarder dans le futur pour changer ton présent."],
    ["nul", "On dirait que c’est le point d’arrivée pour toi."]
];

const enDialog = [];
const poDialog = [];
const medDialog = [];

//function for the movements (keyboard and gamepad) 

let isWalking = false;
let isShooting = false;
let isWalkingRight = false;
let isWalkingLeft = false;
let isStopped = true;
let walkStick = false;

//GAMEPAD
let rectangleText;
let rectangleG;

function whenGamepadDisconnects() {
    onGamepadDisconnect(() => {
        if(!game.paused) {
            game.paused = true;
             rectangleG = add([
                rect(300,300, {radius: 32}),
                anchor("center"),
                pos(300, height()/2+150),
                outline(4),
                color(81, 87, 238),
                offscreen({destroy: true})
            ])
            rectangleText = add([
                text("Connecter une manette pour jouer!", {size: 36, width: width()/6, align: "center"}),
                anchor("center"),
                pos(rectangleG.pos),
                color(0,0,0),
                offscreen({destroy: true})
            ])
        } 
    })

    if(game.paused && getGamepads().length === 1) {
        destroy(rectangleG);
        destroy(rectangleText);
    }

}

//functions pour gérer limites des munitions
let spriteOfMunitions;

function spriteMunition() {
    for(let i = 0; i < munitions; i++) {
        add([
            spriteOfMunitions = sprite("energy-attack",),
            pos(60 * i/2, height()-40),
            scale(0.2),
            fixed(),
            "munition"
        ]) 
    }
}

function updateMunition() {
    destroyAll("munition");
    for(let i = 0; i < munitions; i++) {
        add([
            spriteOfMunitions = sprite("energy-attack",),
            pos(60 * i/2, height()-40),
            scale(0.2),
            fixed(),
            "munition"
        ]) 
    }
}

function restoreMunitions() {
    if(munitions <= 0){
        wait(10, () => {
            munitions = 10;
            updateMunition();
        })
    }
}

//functions pour le niveau 4 si certaines conditions sont respecté

function restoreMunitionLev4() {
    if(munitions <=0) {
        wait(5, () => {
            munitions = 15;
            updateMunition();
        })
    }
}

function gamepadControls(p) {
        onGamepadStick("left", (v) => {
            console.log(v);
            if(!game.paused){
                if(v.x < -0.5 && v.x !== 0) {
                    p.flipX = true;
                    p.move(-PLAYER_SPEED,0);
                    if(!walkStick){
                        p.play("walk");
                        walkStick = true;
                    }
                } else if (v.x > 0.5 && v.x !== 0) {
                    p.flipX = false;
                    p.move(PLAYER_SPEED, 0);
                    if(!walkStick) {
                        p.play("walk");
                        walkStick = true;
                    }
            }

            }
            if(!game.paused){
                if(walkStick && v.x > -0.5 && v.x < 0.5 && v.x == 0) {
                    p.play("idle");
                    walkStick = false;
                }
            }
    }) 

        onGamepadButtonPress("south", () => {
            if(!game.paused){
                p.doubleJump();
                p.jumpedOnce = true;
                if(p.jumpedOnce){
                    p.play("jumpDown")
                    play("jumpingSound", {
                        volume: 0.1,
                        loop: false,
                    })
                }
            }
        });
        
        onGamepadButtonRelease("south", () => {
            if(walkStick){
                p.play("walk");
            } else {
                p.play("idle");
            }
        });

        onGamepadButtonPress("rshoulder", () => {
            if(!game.paused){
                p.play("shoot");
            }
        });

        onGamepadButtonRelease("rshoulder", () => {
            if(!game.paused){
                if(walkStick) {
                    p.play("walk");
                } else {
                    p.play("idle");
                }
            }

        })
        
}

    

let game;

function playerMovements(p){
    let playerYPos = p.pos.y

    onKeyDown("a", () => {
        if(!game.paused) {
            p.flipX = true;
            p.move(-PLAYER_SPEED, 0);
            if(!isWalking) {
                p.play("walk");
                isWalking = true;
            }
        }
    });

    onKeyRelease("a", () => {
        if(!game.paused) {
            p.move(0);
            if(isWalking) {
                p.play("idle");
                isWalking = false;
            }
        }
    });

    onKeyDown("d", () => {
        if(!game.paused) {
            p.flipX = false;
            p.move(PLAYER_SPEED, 0);
            if(!isWalking) {
                p.play("walk");
                isWalking = true;
            }
        }
    });

    onKeyRelease("d", () => {
        if(!game.paused) {
            p.move(0);
            if(isWalking) {
                p.play("idle");
                isWalking = false;
            }
        }
    });

    onKeyPress("space", () => {
        if(!game.paused) {
            p.doubleJump();
            p.jumpedOnce = true;
            if(p.jumpedOnce) {
                p.play("jumpDown");
            }
            play("jumpingSound", {
                volume: 0.1,
                loop: false,
            })
        }
    });

    onKeyRelease("space", () => {
        if(!game.paused && isWalking) {
            p.play("walk");
        }
    });

    onKeyPress("y", () => {
        if(!game.paused) {
            p.play("shoot");
        }
    });

    onKeyRelease("y", () => {
        if(!game.paused && isWalking) {
            p.play("walk");
        }
    });
}

//title scene

let musicTitle;
let musicLevel1;
let musicLevel2;
let musicLevel3;
let musicLevel4;
let musicEnd;
let isMusicPlaying = false;


scene("title", () => {
    gameState.currentLevel = "title";
    gameState.nextLevel = "buttons";



    if(!isMusicPlaying){
        musicTitle = play("title-screen", {
            volume: 0.8,
            loop: true,
        });
        isMusicPlaying = true;
    }
   
    gameState.currentSong = musicTitle;

    const background = add([
        sprite("Title_Start", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ])

    //let rectangleText;
    /*if(getGamepads().length === 0){
        console.log(getGamepads());
       const rectangle = add([
            rect(300,300, {radius: 32}),
            anchor("center"),
            pos(width()/2, height()/2),
            outline(4),
            color(81, 87, 238)
        ])
        rectangleText = add([
            text("Connecter une manette pour jouer!", {size: 36, width: width()/6, align: "center"}),
            anchor("center"),
            pos(rectangle.pos),
            color(0,0,0)
        ])
    }*/

    let myText = add([
        text("Pour jouer appuyer ", {
            width: 600,
            size: 64, 
        }),
        pos(width()/2-300, height()-68)
    ])

    add([
        sprite("START-PAUSE-BUTTON", {
            anim: "buttonStart"
        }),
        pos(width()/2 + 260, height()-73),
        scale(3.8),
    ])

    //update functions

    myText.onUpdate(() => {

    // Glow animation
    if (glowIntensity >= maxGlow) {
        glowGrowing = false;
    } else if (glowIntensity <= 0) {
        glowGrowing = true;
    }

    if (glowGrowing) {
        glowIntensity += 0.20;
    } else {
        glowIntensity -= 0.20;
    }

    //rectangleText.color = rgb(120, 255 - glowIntensity * 10, 255 - glowIntensity * 10);
    myText.color = rgb(120, 255 - glowIntensity * 10, 255 - glowIntensity * 10);
});
    onKeyPress("x", () => {
        go(gameState.nextLevel);
        play("confirm-push", {
            volume: 0.4,
            loop: false,
        })
    })

    onGamepadButtonPress("start", () => {
        go(gameState.nextLevel);
        play("confirm-push", {
            volume: 0.4,
            loop: false,
        })
    })
    
})

scene("buttons", () => {

    gameState.currentLevel = "buttons";
    gameState.nextLevel = "level1";
    
    setBackground(0,0,0);
    add([
        sprite("pauseBoard"),
        anchor("center"),
        pos(width()/2, height()/2)
    ]);

    add([
        text("Start!", { size: 48}),
        anchor("center"),
        pos(width()-200, height()-40)
    ]);

    add([
        sprite("START-PAUSE-BUTTON", {
            anim: "buttonStart"
        }),
        anchor("center"),
        pos(width()-100, height()-45),
        scale(3)
    ])

    onGamepadButtonPress("start", () => {
        go(gameState.nextLevel);
        gameState.currentSong.paused = true;
        isMusicPlaying = false;
        play("confirm-push", {
            volume: 0.4,
            loop: false,
        })
    })

    onKeyPress("space", () => {
        go(gameState.nextLevel);
        gameState.currentSong.paused = true;
        isMusicPlaying = false;
        play("confirm-push", {
            volume: 0.4,
            loop: false,
        })
    })

})

scene("level1", () => {


    if(!isMusicPlaying){
        musicLevel1 = play("level-1", {
            volume: 0.8,
            loop: true,
        })
        isMusicPlaying = true;
    }
    gameState.currentSong = musicLevel1;

    camScale(1.3);
    load(new Promise((res) => {
        setTimeout(() => {
            res()
        }, 2000)
    }))

    setGravity(3500);

    gameState.currentLevel = "level1";
    gameState.nextLevel = "level2";

    const background = add([
        sprite("level1", {
            width: width(),
            height: height(),
            fixed: true,
        }),
        fixed(),
    ])
    


    //energy image
    const em = add([
        sprite("timeMachine-energy",{
            anim: "idle",
        }),
        pos(width()-200, 10),
        scale(5),
        fixed(),
    ]);

    //score
    score = add([
        text(TIME_ENERGY),
        pos(width()-140, 30),
        fixed(),
    ])

    for (let i = 0; i < HS_PLAYER; i++) {
        add([
            sprite("health", {
                anim: "heart",
            }),
            pos(45 * i, 20),
            scale(3),
            fixed(),
            "heart"
        ]) 
    }

    

    const lev = addLevel([                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        '                                                                                                                                      @                                                                                                                                                                                                                                                           ',
        '                                                                             b     a    a    b                                       b                                                                                                                                                                                                                                                            ',
        '                                                                                                                                               a                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                          b                                                                                                                                                                                                                                       ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                   a                                                                                                  a                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                  a                                                                                                                           x x  x x   x                                                                             ',
        '                                                                                                                                                                                                            @                                                                                               b a a  a a dd                                                                         ',
        '             a                                                                                                                                                                                            a                                                                                                                                                                                       ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                 b                                                                       a                                                                                                        ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',                                               
        '                                                                                                                                                                                                                                                                                                                                                                                       t          ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                   =                                                                                                                                                                                                                                                                                                              ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                  =                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '=                                                                                                                                                                                                                                                                                                                                                            =                                    ',
    ], {
        tileWidth: 20,
        tileHeight: 24,
        pos: vec2(0,height()/2+170),
        tiles: {
            "t": () => [
                sprite("tm"),
                area({shape: new Rect(vec2(0,0), 128,128)}),
                body({isSolid: true}),
                anchor("center"),
               "time-machine"
            ],
            "=": () => [
                sprite("level1-block"),
                body({isSolid: true, isStatic : true}),
                scale(1),
                area({shape: new Rect(vec2(0,0), 1650, 320)}),
                anchor("center")
            ],
            "a": () => [
                sprite("metal-platform1"),
                body({isSolid: true, isStatic: true}),
                scale(2),
                anchor("center"),
                area(),
            ],
            'b': () => [
                sprite("metal-platform2"),
                body({isSolid: true, isStatic: true}),
                scale(2),
                anchor("center"),
                area(),
            ],
            '@': () => [
                sprite("health2", {
                    anim: "heart",
                }),
                body({isSolid: true}),
                area({shape: new Rect(vec2(0,0), 32, 32)}),
                anchor("center"),
                "heart"
            ],
            'x': () => [
                sprite("timeMachine-energy2", {
                    anim: "glow",
                }),
                body({isSolid: true}),
                area(),
                anchor("center"),
                "timeMachine-energy"
            ]
        }
    })




    game = add([
        timer(),
    ])

    //variables for dialog
    let textbox;
    let txt;
    let txt2;
    let avatar; 


    if(!isDialogDone){
        avatar = add([
            sprite("scientifique"),
            anchor("center"),
            scale(0.35),
            pos(600,height()-100),
        ])
    
        textbox = add([
            rect(width()/3+600, 200, { radius: 32}),
            anchor("center"),
            pos(width()/6-120, height()+100),
            outline(4),
            "textbox"
        ])
        
        // Text
        txt = add([
            text("Heureusement que tu es enfin arrivée. Quelqu'un a volé la machine à voyager dans le temps sur laquelle nous avons travaillé pendant des années !", { size: 28, width: width()/2, align: "center" }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
        ])

        txt2 = add([
            //text("Appuyer sur la barre d'espace", {size: 18, width: width() - 230}),
            sprite("B-BUTTON", {
                anim: "buttonB",
            }),
            pos(width()/6+375, height()+140),
            scale(2),
        ]) 
    }  
        if(!isDialogDone) {
            wait(0.5, () => {
            game.paused = true;
            })
        }

        function updateDialog() {
            if (curDialog1 < dialogsLev1.length || !isDialogDone) {
                if (!isGamePaused) {
                    isGamePaused = true;
                    game.paused = true;
                }   
                isDialogDone = true;  
                const [char, dialog] = dialogsLev1[curDialog1];
                txt.text = dialog;
            } else if (curDialog1 === dialogsLev1.length) {
                // End of dialog
                if (isGamePaused) {
                    isGamePaused = false;
                    game.paused = false; 
                }
                destroy(txt);
                destroy(txt2); 
                destroy(textbox);
                destroy(avatar);
            }
        }
        
        onKeyPress("space", () => {
            curDialog1 = (curDialog1 + 1)
            updateDialog();
            if(curDialog1 <= dialogsLev1.length){
                play("confirm-push", {
                    volume: 0.4,
                    loop: false,
                })
            }   
        });
        
        onGamepadButtonPress("east", () => {
                curDialog1 = (curDialog1 + 1)
                updateDialog();
                if(curDialog1 <= dialogsLev1.length){
                    play("confirm-push", {
                        volume: 0.4,
                        loop: false,
                    })
                }   
        })
        
    
    
    //player
    const player = game.add([
        sprite("player", {
            anim: "idle",
        }),
        health(HS_PLAYER),
        body({jumpForce: JUMP_FORCE}),
        doubleJump(),
        pos(120, height()-100),
        anchor("center"),
        area({shape: new Rect(vec2(0,0), 45,45)}),
        "player", {
            jumpedOnce: false,
            doubleJumped: false,
        }       
    ])

    //player commandsd
    playerMovements(player);

    //controls gamepad
    gamepadControls(player);
    whenGamepadDisconnects();

    //function that produces enemies
    let enemy;
    let enemyWalk = false;

    function produceEnemy() {
        enemy = game.add([
                sprite("enemy", {
                    anim: "walk",
                }),
                pos(player.pos.x + 600, height()-150),
                area({shape: new Rect(vec2(0,0), 16, 16)}),
                body(),
                scale(4),
                anchor("center"),
                "enemy", {
                    walksTowardsPlayer: true,
                    isShooting: false,
                }
            ])
}

    loop(3, () => {
        if(!game.paused){
            produceEnemy();
            enemy.flipX = true;
        }

    })
    
    
    //create enemy attack and loop
    let bullet;
    function shootProjectile(enemy) {
        const direction = player.pos.sub(enemy.pos).unit(); 
            if(!game.paused) {
                bullet = game.add([
                    sprite("enemy-bullet", {
                        anim: "fire",
                    }),
                    scale(2),
                    area(),
                    pos(enemy.pos),
                    move(direction, 200),
                    offscreen({destroy: true}),
                    "bullet",
                ]);
            }       
    }

    
    //enemy movement

    onUpdate("enemy",(enemy) => {
        //if(!isGamePaused){
            const distance = enemy.pos.dist(player.pos);
            if (distance > 500 && enemy.walksTowardsPlayer) {
                const direction = player.pos.sub(enemy.pos).unit();
                enemy.move(direction.scale(ENEMY_SPEED));
            } else {
                enemy.walksTowardsPlayer = false;
                enemy.play("shoot", {loop: true});   
            
                if(!enemy.isShooting && distance < 500) {
                    enemy.isShooting = true;
                    loop(5/1, () => {
                        if(enemy.isShooting && enemy.exists()) {
                            shootProjectile(enemy);
                        }
                    })
                    wait(5, () => {
                        enemy.isShooting = false;
                    })
                }
                const flipThreshold = 50;
                          
                //chatGPT fixed the flip bug of enemies
                if (Math.abs(player.pos.x - enemy.pos.x) > flipThreshold) {
                    enemy.flipX = player.pos.x < enemy.pos.x;
                }

        }     
        
    })

    
    let energy;
    spriteMunition();

        onGamepadButtonPress("rshoulder", () => {
            if(!game.paused){
                munitions -=1;
                dir1 = vec2(1,0);
                dir2 = vec2(-1,0);
                updateMunition();
                restoreMunitions();
                if(munitions >= 0){
                    if(player.flipX) {
                        energy = game.add([
                            sprite("energy-attack"),
                            pos(player.pos.x-35, player.pos.y-10),
                            area(),
                            scale(0.25),
                            anchor("center"),
                            //move(enemy.pos.angle(player.pos), 700),
                            move(dir2,700),
                            offscreen({ destroy: true }),
                            "energy-attack"
                        ])
                    } else {
                        energy = game.add([
                            sprite("energy-attack"),
                            pos(player.pos.x+35, player.pos.y-10),
                            area(),
                            scale(0.25),
                            anchor("center"),
                            //move(enemy.pos.angle(player.pos), 700),
                            move(dir1,700),
                            offscreen({ destroy: true }),
                            "energy-attack"
                        ])
                    }
                    play("laser", {
                        volume: 0.4,
                        loop: false,
                    })
                }

    
            }


    
        })
    


    onKeyPress("y", () => {
        dir1 = vec2(1,0);
        dir2 = vec2(-1,0);
        console.log(munitions);
        munitions -=1;
        updateMunition();
        restoreMunitions();
        if(munitions >= 0) {
            if(player.flipX){
                energy = game.add([
                    sprite("energy-attack"),
                    pos(player.pos.x-35, player.pos.y-10),
                    area(),
                    scale(0.25),
                    anchor("center"),
                    //move(enemy.pos.angle(player.pos), 700),
                    move(dir2,700),
                    offscreen({ destroy: true }),
                    "energy-attack"
                ])
            } else{
                energy = game.add([
                    sprite("energy-attack"),
                    pos(player.pos.x+35, player.pos.y-10),
                    area(),
                    scale(0.25),
                    anchor("center"),
                    //move(enemy.pos.angle(player.pos), 700),
                    move(dir1,700),
                    offscreen({ destroy: true }),
                    "energy-attack"
                ])
            }
    
            play("laser", {
                volume: 0.4,
                loop: false,
            })
        }
 
    })




    //collide functions 
    let me;
    onCollide("enemy", "energy-attack", (enemy, energy) => {
        destroy(enemy);
        destroy(energy);
       me = add([
            sprite("timeMachine-energy", {
                anim: "glow",
            }),
            pos(enemy.pos),
            area(),
            scale(3),
            "timeMachine-energy"
        ])
    })

    onCollide("timeMachine-energy", "player", (me, player) => {
        destroy(me);
        TIME_ENERGY+=1;
        score.text = TIME_ENERGY;
        play("coin", {
            volume: 0.05,
            loop: false,
        })

    })

    onCollide("player", "time-machine", () => {
        go("machine");
        play("timeMachineSound", {
            volume: 0.4,
            loop: false,
        })
    })



    //function for resetting hearts on screen

    function updateHearts() {
        destroyAll("heart");
        for (let i = 0; i < HS_PLAYER; i++) {
            add([
                sprite("health", {
                    anim: "heart",
                }),
                pos(45 * i, 20),
                scale(3),
                fixed(),
                "heart"
            ])          
        }
    }

    /*onCollide("energy-attack", "bullet", (energy, bullet) => {
        destroy(energy);
        destroy(bullet);
    })*/

    onCollide("heart", "player", (heart) => {
        if(HS_PLAYER <= 25) {
            HS_PLAYER +=1;
            updateHearts();
            destroy(heart);
            play("pickUpHeart", {
                volume: 0.4,
                loop: false
            })
        }
    })



    player.onCollide("bullet", (bullet) => {
        HS_PLAYER -= 1;
        console.log(HS_PLAYER);
        updateHearts();
        destroy(bullet);
        if(HS_PLAYER <= 0) {
            go("gameOver");
        }
        play("hit", {
            volume: 0.4,
            loop: false,
        })
    })

    //setting respawn logic 

    onUpdate("player", () => {
        if(player.pos.y > height() + height()/2 + 50){
            go(gameState.currentLevel);
            HS_PLAYER -=1;
            updateHearts();
            play("hit",{
                volume: 0.4,
                loop: false,
            })
        }

        if(HS_PLAYER <= 0){
            go("gameOver");
        }
    })


    //setting player camera

    const cameraFixY = height() - 100;

    player.onUpdate(() => {
        camPos(player.pos.x, cameraFixY  );
        //camPos(player.pos.x, cameraFixY)
    })




   //implementing pause logic
    let cur = null;
    const pausedRect = add([
        sprite("pauseBoard"),
        pos(width()-700,height()-100),
        anchor("center"),
        scale(0.8)
    ])

    pausedRect.hidden = true;


    onKeyPress("p", () => {
        game.paused = !game.paused;
        if (cur) cur.cancel()
		cur = tween(
			pausedRect.pos,
			game.paused ? vec2(camPos().x - width()/4, height()-100) : camPos().add(0, 1000),
            1, //vec2(width()/8, height()-100) : center().add(0, 1000), 1,
			(p) => pausedRect.pos = p,
			easings.easeOutElastic,
		)
		if (game.paused) {
			pausedRect.hidden = false
			pausedRect.paused = false
		}
	})



    onGamepadButtonPress("start", () => {
        game.paused = !game.paused;
        if (cur) cur.cancel()
		cur = tween(
			pausedRect.pos,
			game.paused ? vec2(camPos().x - width()/4, height()-100) : camPos().add(0, 1000),
            1, //vec2(width()/8, height()-100) : center().add(0, 1000), 1,
			(p) => pausedRect.pos = p,
			easings.easeOutElastic,
		)
		if (game.paused) {
			pausedRect.hidden = false
			pausedRect.paused = false
            player.move(0);
		}
	})

})

scene(  "level2", () => {

    if(!isMusicPlaying) {
        musicLevel2 = play("level-2", {
            volume: 0.8,
            loop: true,
        })
        isMusicPlaying = true;
    }

    gameState.currentSong = musicLevel2;

    camScale(1.3)
    load(new Promise((res) => {
        setTimeout(() => {
            res()
        }, 2000)
    }))

    gameState.currentLevel = "level2";
    gameState.nextLevel = "level3";

    setGravity(3500);

    const background = add([
        sprite("level2", {
            width: width(),
            height: height(),
            fixed: true,
        }),
        fixed(),
    ])
    
    //energy image
    const em = add([
        sprite("timeMachine-energy",{
            anim: "idle",
        }),
        pos(width()-200, 10),
        scale(5),
        fixed(),
    ]);

    //score
    score = add([
        text(TIME_ENERGY),
        pos(width()-140, 30),
        fixed(),
    ])

    for (let i = 0; i < HS_PLAYER; i++) {
        add([
            sprite("health", {
                anim: "heart",
            }),
            pos(45 * i, 20),
            scale(3),
            fixed(),
            "heart"
        ]) 
    }

    if(GREEN_EN_POINTS >= 5){
        const level  = addLevel([
            '                                                                                       x            @                                                                                                                                                                                                                         x                             t                                                    ',
            '                                                              a  b   a   b             b    a   a        b  a                                                                                                                                                                                                                  a         b        a        b                                                   ',
            '                                                                                                                                                                                                                                                                                                                                                                                                               ',
            '                                                                                                                                                                                                                                                                                                                                                                                                               ',
            '                                                                                                                                                                                                                                                                                                                                                                                                                ',
            '                                           b                                                                                   a                                                           b                                                                   b                                                                                                                                                 ',
            '                                                                                                                                                                                                                                                                                                                                                                                                              ',
            '                                                                                                      b                                                                                                                                                                                                                                     a                                                                 ',
            '                                                                                                                                                                               a                                                                                                                                                 @       b a a a                                                                ',
            '                                                                                                                                                                                                                                 x    x                                                                                                                     a                                                      ',
            '                                                                                                                                                                     x                                                           b    b          b                                                                                                                                                                ',
            '                                                             b         a                                                                                             b                                            a                                                              b                           a                                 b        a                                                      ',
            '                                                                                                                                                                                                                                                                                                                                                                                                               ',
            '                                                                                                                                                                                                                                                                                                                                                                                                               ',
            '                                                                                                                                                                                                                                                                                                                                                                                                               ',
            '                                                                                                                                                                                                                                                                                                                                                                                                            ',
            '                                                                                                                                                                                                                                                                                                                                                                                                               ',
            '                                                                                                                                                                                                                                                     =                                                                                                                                                          ',
            '                                   =                                                                                                                                                                                                                                                          =                                                                                                               ',
            '                                                                                                                                                                                                                           =                                                                                                                                                                                    ',
            '                                                                                                                                                                             =                                                                                                                                                                                                                                 ',
            '                                                                                                                                                                                                                                                                                                                                                                                                               ',
            '                                                                                           =                       =                                                                                                                                                                                                                 =                                                                        ',
            '                                                                                                                                                                                                                                                                                                                                                                                                               ',
            '=                                                                                                                                                                                                                                                                                                                                                                                                              ',
        ], {
            tileWidth: 20,
            tileHeight: 24,
            pos: vec2(0, height()/2 + 100),
            tiles: {
                "t": () => [
                    sprite("tm"),
                    area({shape: new Rect(vec2(0, 0), 128, 128)}),
                    body({isSolid: true}),
                    anchor("center"),
                    "time-machine"
                ],
                "=": () => [
                    sprite("level2-block"),
                    body({isSolid: true, isStatic: true}),
                    scale(1),
                    area({shape: new Rect(vec2(0, 0), 785, 195)}),
                    anchor("center")
                ],
                "a": () => [
                    sprite("platform-lev2-1"),
                    body({isSolid: true, isStatic: true}),
                    scale(2),
                    anchor("center"),
                    area(),
                ],
                'b': () => [
                    sprite("platform-lev2-2"),
                    body({isSolid: true, isStatic: true}),
                    scale(2),
                    anchor("center"),
                    area(),
                ],
                '@': () => [
                    sprite("health2", {
                        anim: "heart",
                    }),
                    body({isSolid: true}),
                    area(),
                    scale(1),
                    anchor("center"),
                    "heart"
                ],
                'x': () => [
                    sprite("timeMachine-energy2", {
                        anim: "glow",
                    }),
                    body({isSolid: true}),
                    area(),
                    anchor("center"),
                    "timeMachine-energy"
                ]
            }
        });
    } else {
      const lev = addLevel([
        '                                                                                                                   @                    @                                                                                                                                                                                      ',
        '                                                                             b     a    a    b                     b         a          b                                                                                                                                                                                      ',
        '                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                               ',
        '                                                                   a                                                                                a                                                                                                                                                                          ',
        '                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                a                                                                                                                                                              ',
        '                                                                                                                                                                                        @                                                                 b a a  a a dd                                                        ',
        '             a                                                                                                                                                                          a                                                                                                                                      ',
        '                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                               b                                         a                                                                                     ',
        '                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                               ',                                               
        '                                                                                                                                                                                                                                                                                                                    t          ',
        '                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                      a  a   a a                                                                                                                                                                ',
        '                                         =                                                                                                                                                                                                                                                                                      ',
        '                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                          x  x     x  x x                                                                                                                                                                                          ',
        '                                                                                  a   a  a  a  a      a  a  a   a   a   a   a a    a  a  a    a                                                                                                                                                                                ',
        '                                                                                                                                                                                                                =                                                                                =                             ',
        '                                                                                                                                                                                                                                                                                                                               ',
        '=                                                                                                                                                                                                                                                                                                                              ',
    ], {
        tileWidth: 20,
        tileHeight: 24,
        pos: vec2(0,height()/2+100),
        tiles: {
            "t": () => [
                sprite("tm"),
                area({shape: new Rect(vec2(0,0), 128,128)}),
                body({isSolid: true}),
                anchor("center"),
               "time-machine"
            ],
            "=": () => [
                sprite("level2-block"),
                body({isSolid: true, isStatic : true}),
                scale(1),
                area({shape: new Rect(vec2(0,0), 785, 195)}),
                anchor("center")
            ],
            "a": () => [
                sprite("platform-lev2-1"),
                body({isSolid: true, isStatic: true}),
                scale(2),
                anchor("center"),
                area(),
            ],
            'b': () => [
                sprite("platform-lev2-2"),
                body({isSolid: true, isStatic: true}),
                scale(2),
                anchor("center"),
                area(),
            ],
            '@': () => [
                sprite("health2", {
                    anim: "heart",
                }),
                body({isSolid: true}),
                area(),
                scale(1),
                anchor("center"),
                "heart"
            ],
            'x': () => [
                sprite("timeMachine-energy2", {
                    anim: "glow",
                }),
                body({isSolid: true}),
                area(),
                anchor("center"),
                "timeMachine-energy"
            ]
        
    }
    })
}



    game = add([
        timer(),
    ])

    //variables for dialog
    let textbox;
    let txt;
    let txt2;
    let avatar; 
    
    //thing i don't know I did but I finally did...
    if(!isDialog2Done){
        avatar = add([
            sprite("android"),
            anchor("center"),
            scale(0.35),
            pos(600,height()-100),
        ])
    
        textbox = add([
            rect(width()/3+600, 200, { radius: 32}),
            anchor("center"),
            pos(width()/6-120, height()+100),
            outline(4),
            "textbox"
        ])
        
        // Text
        txt = add([
            text("Oh ! Que voient mes yeux ?", { size: 28, width: width()/2, align: "center" }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
        ])
        txt2 = add([
            //text("Appuyer sur la barre d'espace", {size: 18, width: width() - 230}),
            sprite("B-BUTTON", {
                anim: "buttonB",
            }),
            pos(width()/6+375, height()+140),
            scale(2),
        ]) 
    }  


        if(!isDialog2Done){
            wait(0.5, () => {
                game.paused = true;
            })
        }

        function updateDialog() {
            if (curDialog2 < dialogsLev2 .length || !isDialog2Done) {
                if (!isGamePaused) {
                    isGamePaused = true;
                    game.paused = true;
                }   
                isDialog2Done = true;  
                [char, dialog] = dialogsLev2[curDialog2];
                txt.text = dialog;
            } else if (curDialog2 === dialogsLev2.length) {
                // End of dialog
                if (isGamePaused) {
                    isGamePaused = false;
                    game.paused = false; 
                }
                destroy(txt);
                destroy(txt2); 
                destroy(textbox);
                destroy(avatar);
            }
        }
        
        onKeyPress("space", () => {
            curDialog2 = (curDialog2 + 1)
            updateDialog();
            if(curDialog2 <= dialogsLev2.length){
                play("confirm-push", {
                    volume: 0.4,
                    loop: false,
                })
            }   
        });

        onGamepadButtonPress("east", () => {
            curDialog2 = (curDialog2 + 1)
            updateDialog();
            if(curDialog2 <= dialogsLev2.length){
                play("confirm-push", {
                    volume: 0.4,
                    loop: false,
                })
            }   
        })
        
    
    
    
    //player
    const player = game.add([
        sprite("player", {
            anim: "idle",
        }),
        health(HS_PLAYER),
        body({jumpForce: JUMP_FORCE}),
        doubleJump(),
        pos(120, height()-100),
        anchor("center"),
        area({shape: new Rect(vec2(0,0), 45,45)}),
        "player", {
            jumped: false,
            doubleJumped: false,
        }       
    ])



    //function that produces enemies
    let enemy;
    let enemyWalk = false;

    function produceEnemy() {
        enemy = game.add([
                sprite("enemyLev2", {
                    anim: "walk",
                }),
                color(rgb(255,50,125)),
                pos(player.pos.x + 600, height()-150),
                area({shape: new Rect(vec2(0,0), 16, 16)}),
                body(),
                scale(4),
                anchor("center"),
                "enemy", {
                    walksTowardsPlayer: true,
                    isShooting: false,
                }
            ])
}

    loop(2.5, () => {
        if(!game.paused){
            produceEnemy();
            enemy.flipX = true;
        }

    })
    
    
    //create enemy attack and loop
    let bullet;
    function shootProjectile(enemy) {
        const direction = player.pos.sub(enemy.pos).unit(); 
            if(!game.paused) {
                bullet = game.add([
                    sprite("enemy-bullet", {
                        anim: "fire",
                    }),
                    scale(2),
                    area(),
                    pos(enemy.pos),
                    move(direction, 200),
                    offscreen({destroy: true}),
                    "bullet",
                ]);
            }       
    }



    //player commands
    playerMovements(player);  
    
    //gamepad

    gamepadControls(player);
    whenGamepadDisconnects();
    //enemy movement

    onUpdate("enemy",(enemy) => {
        const distance = enemy.pos.dist(player.pos);
        if (distance > 500 && enemy.walksTowardsPlayer) {
            const direction = player.pos.sub(enemy.pos).unit();
            enemy.move(direction.scale(ENEMY_SPEED));  
        } else {
            enemy.walksTowardsPlayer = false;
            enemy.play("shoot", {loop: true});   
        
            if(!enemy.isShooting && distance < 500) {
                enemy.isShooting = true;
                loop(5/1.5, () => {
                    if(enemy.isShooting && enemy.exists()) {
                        shootProjectile(enemy);
                    }
                })
                wait(5, () => {
                    enemy.isShooting = false;
                })
            }
            const flipThreshold = 50;
                      
            //chatGPT fixed the flip bug of enemies
            if (Math.abs(player.pos.x - enemy.pos.x) > flipThreshold) {
                enemy.flipX = player.pos.x < enemy.pos.x;
            }

        }     
    })

    
    let energy;
    spriteMunition();

    onGamepadButtonPress("rshoulder", () => {
        if(!game.paused){
            munitions -=1;
            dir1 = vec2(1,0);
            dir2 = vec2(-1,0);
            updateMunition();
            restoreMunitions();
            if(munitions >= 0){
                if(player.flipX) {
                    energy = game.add([
                        sprite("energy-attack"),
                        pos(player.pos.x-35, player.pos.y-10),
                        area(),
                        scale(0.25),
                        anchor("center"),
                        //move(enemy.pos.angle(player.pos), 700),
                        move(dir2,700),
                        offscreen({ destroy: true }),
                        "energy-attack"
                    ])
                } else {
                    energy = game.add([
                        sprite("energy-attack"),
                        pos(player.pos.x+35, player.pos.y-10),
                        area(),
                        scale(0.25),
                        anchor("center"),
                        //move(enemy.pos.angle(player.pos), 700),
                        move(dir1,700),
                        offscreen({ destroy: true }),
                        "energy-attack"
                    ])
                }
                play("laser", {
                    volume: 0.4,
                    loop: false,
                })
            }


        }



    })



onKeyPress("y", () => {
    dir1 = vec2(1,0);
    dir2 = vec2(-1,0);
    console.log(munitions);
    munitions -=1;
    updateMunition();
    restoreMunitions();
    if(munitions >= 0) {
        if(player.flipX){
            energy = game.add([
                sprite("energy-attack"),
                pos(player.pos.x-35, player.pos.y-10),
                area(),
                scale(0.25),
                anchor("center"),
                //move(enemy.pos.angle(player.pos), 700),
                move(dir2,700),
                offscreen({ destroy: true }),
                "energy-attack"
            ])
        } else{
            energy = game.add([
                sprite("energy-attack"),
                pos(player.pos.x+35, player.pos.y-10),
                area(),
                scale(0.25),
                anchor("center"),
                //move(enemy.pos.angle(player.pos), 700),
                move(dir1,700),
                offscreen({ destroy: true }),
                "energy-attack"
            ])
        }

        play("laser", {
            volume: 0.4,
            loop: false,
        })
    }

})





    //collide functions 
    let me;
    onCollide("enemy", "energy-attack", (enemy, energy) => {
        destroy(enemy);
        destroy(energy);
       me = add([
            sprite("timeMachine-energy", {
                anim: "glow",
            }),
            pos(enemy.pos),
            area(),
            scale(3),
            "timeMachine-energy"
        ])
    })

    onCollide("timeMachine-energy", "player", (me, player) => {
        destroy(me);
        TIME_ENERGY+=1;
        score.text = TIME_ENERGY;
        play("coin", {
            volume: 0.05,
            loop: false,
        })
    })

    onCollide("player", "time-machine", () => {
        go("machine");
        play("timeMachineSound", {
            volume: 0.4,
            loop: false,
        })
    })



    //function for resetting hearts on screen

    function updateHearts() {
        destroyAll("heart");
        for (let i = 0; i < HS_PLAYER; i++) {
            add([
                sprite("health", {
                    anim: "heart",
                }),
                pos(45 * i, 20),
                scale(3),
                fixed(),
                "heart"
            ])          
        }
    }

    /*onCollide("energy-attack", "bullet", (energy, bullet) => {
        destroy(energy);
        destroy(bullet);
    })*/

    onCollide("heart", "player", (heart) => {
        if(HS_PLAYER <= 25){
            HS_PLAYER +=1;
            updateHearts();
            destroy(heart);
            play("pickUpHeart", {
                volume: 0.4,
                loop: false,
            })
        }
    })

    onCollide("bullet", "player", (bullet) => {
        HS_PLAYER -= 1;
        console.log(HS_PLAYER);
        updateHearts();
        destroy(bullet);
        if(HS_PLAYER <= 0) {
            go("gameOver");
        }
        play("hit", {
            volume: 0.4,
            loop: false,
        })
    })

    //setting game over logic 

    onUpdate("player", () => {
        if(player.pos.y > height() + height()/2 + 50){
            go(gameState.currentLevel);
            HS_PLAYER -=1;
            updateHearts();
            play("hit",{
                volume: 0.4,
                loop: false,
            })
        }

        if(HS_PLAYER <= 0){
            go("gameOver");
        }
    })


    //setting player camera

    const cameraFixY = height() - 100;

    player.onUpdate(() => {
        camPos(player.pos.x, cameraFixY  );
        //camPos(player.pos.x, cameraFixY)
    })




    //implementing pause logic
    let cur = null;
    const pausedRect = add([
        sprite("pauseBoard"),
        pos(width()-700,height()-100),
        anchor("center")
    ])


    pausedRect.hidden = true;

    onKeyPress("p", () => {
        game.paused = !game.paused;
        if (cur) cur.cancel()
		cur = tween(
			pausedRect.pos,
			game.paused ? vec2(camPos().x - width()/4, height()-100) : camPos().add(0, 1000),
            1, //vec2(width()/8, height()-100) : center().add(0, 1000), 1,
			(p) => pausedRect.pos = p,
			easings.easeOutElastic,
		)
		if (game.paused) {
			pausedRect.hidden = false
			pausedRect.paused = false
		}
	})

    onGamepadButtonPress("start", () => {
        game.paused = !game.paused;
        if (cur) cur.cancel()
		cur = tween(
			pausedRect.pos,
			game.paused ? vec2(camPos().x - width()/4, height()-100) : camPos().add(0, 1000),
            1, //vec2(width()/8, height()-100) : center().add(0, 1000), 1,
			(p) => pausedRect.pos = p,
			easings.easeOutElastic,
		)
		if (game.paused) {
			pausedRect.hidden = false
			pausedRect.paused = false
		}
	})
})

scene("level3", () => {

    if(!isMusicPlaying){
        musicLevel3 = play("level-3", {
            volume: 0.8,
            loop: true,
        })
        isMusicPlaying = true;
    }
    camScale(1.3);
    const background = add([
        sprite("level3", {
            width: width(),
            height: height(),
        }),
        fixed(),
    ])
    gameState.currentLevel = "level3";
    gameState.nextLevel = "level4";
    gameState.currentSong = musicLevel3;

    setGravity(3500);

    
    //energy image
    const em = add([
        sprite("timeMachine-energy",{
            anim: "idle",
        }),
        pos(width()-200, 10),
        scale(5),
        fixed(),
    ]);

    //score
    score = add([
        text(TIME_ENERGY),
        pos(width()-140, 30),
        fixed(),
    ])

    for (let i = 0; i < HS_PLAYER; i++) {
        add([
            sprite("health", {
                anim: "heart",
            }),
            pos(45 * i, 20),
            scale(3),
            fixed(),
            "heart"
        ]) 
    }

    if(GREEN_EN_POINTS > POLITICS_POINTS){
        const lev = addLevel([
            '                                      d                                                                                                                      a   a                                                                                                                                                                                                                                                                                                                          ',
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                              t             ',
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
            '                                                                                                                                                            a    a                                                                                                                                                                                                                                                                                                                         ',
            '                                                                                                                                                                                                   x x                                                                                                                                                                                                                                                                                       ',
            '                                                                                                                                                                                                   a a                                                                                                                                                                                                                                                                                     ',
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
            '                                                                                                                                                                                                                                                                                                                                                          a a  a a                                                                                                                         ',
            '                                                                                                                                                                                                                                                                                                                                                                                                                                   a                                                       ',
            '                                                                                                                                                                                                                                   x                                                                                                 a                                                                                                                                                     ',
            '                                                                                                                                                                                                                               x   a                                                                                                                                                                  a                                                                                     ',
            '                                                                                                                                                                                                                              a                                                                                                                                                                                                                                                             ',
            '                                                                                                                                                                                                                                                                                                                                         a                                                                                                                                                  ',
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',                                               
            '                                                                                                                                                                                                                                                                                      a                                                                                                                                                                                                     ',
            '                                                                                                                                                                                                                                                           @@@@                                                                                a                           a a a                                      x   x    x                                                              ',
            '                                                     a          a                                                                                                                                                                                  a a     a a  a                                                                                                                                                     a   a    a                                                            ',
            '                                                                                                              x x                                                                                                                                                                                                          a                                                                                                                                                                  ',
            '                                                                                              a               a a                     =                                                                                                                                                                                                                                                                                                                                                     ',
            '                    =                                                                                                                                                                                     x                                                                                    x                                                                                                                                                                 =           =                ',
            '                                                                                                                                                                                    =                    a                                                                                     =                                                                                                                                                                                            ',
            '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ',
            '=                                                        a  a      =                                  a    a                                                                                                                                                                                                                                                                                                                                                                                   ',
        ], {
            tileWidth: 20,
            tileHeight: 24,
            pos: vec2(0, height()/2 + 100),
            tiles: {
                "t": () => [
                    sprite("tm"),
                    area({shape: new Rect(vec2(0, 0), 128, 128)}),
                    body({isSolid: true}),
                    anchor("center"),
                    "time-machine"
                ],
                "=": () => [
                    sprite("level3-block"),
                    body({isSolid: true, isStatic: true}),
                    scale(1),
                    area({shape: new Rect(vec2(0, 0), 390, 658)}),
                    anchor("center")
                ],
                "a": () => [
                    sprite("platform-lev3"),
                    body({isSolid: true, isStatic: true}),
                    scale(2),
                    anchor("center"),
                    area(),
                ],
                '@': () => [
                    sprite("health2", {
                        anim: "heart",
                    }),
                    body({isSolid: true}),
                    area(),
                    scale(1),
                    anchor("center"),
                    "heart"
                ],
                'x': () => [
                    sprite("timeMachine-energy2", {
                        anim: "glow",
                    }),
                    body({isSolid: true}),
                    area(),
                    anchor("center"),
                    "timeMachine-energy"
                ]
            }
        });
    } else if (POLITICS_POINTS > GREEN_EN_POINTS || GREEN_EN_POINTS === 0 ) {
    const lev = addLevel([
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       t   ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                      x                                                                                                                                                                                                                                                                                                                     ',
        '                                                                                                                                                                     aa                                                                                                                                                                                                                                                                                                                    ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                      a  x                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                         b                                                                                                                                                                                                                                                                                                 ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                   a                                                                                                                                                                                                                                                                                       ',
        '                                                                                                                                                                                                                x                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                                a                                                                                                                                             @@@@                                                                                                                         ',
        '                                                                                                                                                                                                                                                                                                                                                          a a  a a                                                                 x                                                        ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                   a                                                       ',
        '                                                                                                                                                                                                                                                                                                                                         xx                                                                                                                      =                   =      ',
        '                                                                                                                                                                                                                                                                                                                  a                      a                                                                                                                                                 ',
        '                                                                       d                                                                                                                                                                                                                                                                                                                                                                                                                   ',
        '                                                                                                                       =                                                                                                                                                                                                                                                                                                                                                                   ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',                                               
        '                                                                                                                                                                                                                                                                                                                                                                                                                         =                                                                 ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                    =                                      =                                                                                                                                                                                                                                                                                                                                        =                                                                                       ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                                                                                                       =                                                                                                                                                                                                   ',
        '                                                                                                   =                                                                                                                                                                                                                                                                                                                                                                                       ',
        '                                                                                                                                                                                                      =                                                                                                                                                                                                                                                                                    ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '=                                                                                                                                         =                                                                                                     =                                                                                                                                                                                                                                                                                                                                                              ',
    ], {
        tileWidth: 20,
        tileHeight: 24,
        pos: vec2(0,height()/2+100),
        tiles: {
            "t": () => [
                sprite("tm"),
                area({shape: new Rect(vec2(0,0), 128,128)}),
                body({isSolid: true}),
                anchor("center"),
               "time-machine"
            ],
            "=": () => [
                sprite("level3-block"),
                body({isSolid: true, isStatic : true}),
                scale(1),
                area({shape: new Rect(vec2(0,0), 390, 658)}),
                anchor("center")
            ],
            "a": () => [
                sprite("platform-lev3"),
                body({isSolid: true, isStatic: true}),
                scale(2),
                anchor("center"),
                area(),
            ],
            '@': () => [
                sprite("health2", {
                    anim: "heart",
                }),
                body({isSolid: true}),
                area(),
                scale(1),
                anchor("center"),
                "heart"
            ],
            'x': () => [
                sprite("timeMachine-energy2", {
                    anim: "glow",
                }),
                body({isSolid: true}),
                area(),
                anchor("center"),
                "timeMachine-energy"
            ]
        }
    })
    }

    




    game = add([
        timer(),
    ])

    //avatar

    let textbox;
    let txt;
    let txt2;
    let avatar; 
 
    if(!isDialog3Done){
        avatar = add([
            sprite("forestFriend"),
            anchor("center"),
            scale(0.35),
            pos(600,height()-100),
        ])
    
        textbox = add([
            rect(width()/3+600, 200, { radius: 32}),
            anchor("center"),
            pos(width()/6-120, height()+100),
            outline(4),
            "textbox"
        ])
        
        // Text
        txt = add([
            text("...", { size: 28, width: width()/2, align: "center" }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
        ])
        txt2 = add([
            //text("Appuyer sur la barre d'espace", {size: 18, width: width() - 230}),
            sprite("B-BUTTON", {
                anim: "buttonB",
            }),
            pos(width()/6+375, height()+140),
            scale(2),
        ]) 
    }  
        if(!isDialog3Done){
            wait(0.5, () => {
                game.paused = true;
            })
        }

        function updateDialog() {
            if (curDialog3 < dialogsLev3.length || !isDialog3Done) {
                if (!isGamePaused) {
                    isGamePaused = true;
                    game.paused = true;
                }   
                isDialog3Done = true;  
                [char, dialog] = dialogsLev3[curDialog3];
                txt.text = dialog;
            } else if (curDialog3 === dialogsLev3.length) {
                // End of dialog
                if (isGamePaused) {
                    isGamePaused = false;
                    game.paused = false; 
                }
                destroy(txt);
                destroy(txt2); 
                destroy(textbox);
                destroy(avatar);
            }
        }
        
        onKeyPress("space", () => {
            curDialog3 = (curDialog3 + 1)
            updateDialog();
            if(curDialog3 <= dialogsLev3.length){
                play("confirm-push", {
                    volume: 0.4,
                    loop: false,
                })
            }
        }); 

        onGamepadButtonPress("east", () => {
            curDialog3 = (curDialog3 + 1)
            updateDialog();
            if(curDialog3 <= dialogsLev3.length){
                play("confirm-push", {
                    volume: 0.4,
                    loop: false,
                })
            }
            
        })
        

    
    //player
    const player = game.add([
        sprite("player", {
            anim: "idle",
        }),
        health(HS_PLAYER),
        body({jumpForce: JUMP_FORCE}),
        doubleJump(),
        pos(120, height()-100),
        anchor("center"),
        area({shape: new Rect(vec2(0,0), 45,45)}),
        "player", {
            jumped: false,
            doubleJumped: false,
            isWalking: false,
            isShooting: false,
        }       
    ])



    //function that produces enemies
    let enemy;
    let enemyWalk = false;

    function produceEnemy() {
        enemy = game.add([
                sprite("enemyLev3", {
                    anim: "walk",
                }),
                pos(player.pos.x + 600, height()-150),
                area({shape: new Rect(vec2(0,0), 16, 16)}),
                body(),
                scale(4),
                anchor("center"),
                "enemy", {
                    walksTowardsPlayer: true,
                    isShooting: false,
                }
            ])
}

    loop(2, () => {
        if(!game.paused){
            produceEnemy();
            enemy.flipX = true;
        }

    })
    
    
    //create enemy attack and loop
    let bullet;
    function shootProjectile(enemy) {
        const direction = player.pos.sub(enemy.pos).unit(); 
            if(!game.paused) {
                bullet = game.add([
                    sprite("enemy-bullet", {
                        anim: "fire",
                    }),
                    scale(2),
                    area(),
                    pos(enemy.pos),
                    move(direction, 200),
                    offscreen({destroy: true}),
                    "bullet",
                ]);
            }       
    }

    //GAMEPAD commands
    gamepadControls(player);
    whenGamepadDisconnects();

    //player commandsd
    playerMovements(player);

    //enemy movement

    onUpdate("enemy",(enemy) => {
        const distance = enemy.pos.dist(player.pos);
        if (distance > 500 && enemy.walksTowardsPlayer) {
            const direction = player.pos.sub(enemy.pos).unit();
            enemy.move(direction.scale(ENEMY_SPEED));  
        } else {
            enemy.walksTowardsPlayer = false;
            enemy.play("shoot", {loop: true});   
        
            if(!enemy.isShooting && distance < 500) {
                enemy.isShooting = true;
                loop(5/1.7, () => {
                    if(enemy.isShooting && enemy.exists()) {
                        shootProjectile(enemy);
                    }
                })
                wait(5, () => {
                    enemy.isShooting = false;
                })
            }
            const flipThreshold = 50;
                      
            //chatGPT fixed the flip bug of enemies
            if (Math.abs(player.pos.x - enemy.pos.x) > flipThreshold) {
                enemy.flipX = player.pos.x < enemy.pos.x;
            }

        }     
    })

    
    let energy;
    spriteMunition();

    onGamepadButtonPress("rshoulder", () => {
        if(!game.paused){
            munitions -=1;
            dir1 = vec2(1,0);
            dir2 = vec2(-1,0);
            updateMunition();
            restoreMunitions();
            if(munitions >= 0){
                if(player.flipX) {
                    energy = game.add([
                        sprite("energy-attack"),
                        pos(player.pos.x-35, player.pos.y-10),
                        area(),
                        scale(0.25),
                        anchor("center"),
                        //move(enemy.pos.angle(player.pos), 700),
                        move(dir2,700),
                        offscreen({ destroy: true }),
                        "energy-attack"
                    ])
                } else {
                    energy = game.add([
                        sprite("energy-attack"),
                        pos(player.pos.x+35, player.pos.y-10),
                        area(),
                        scale(0.25),
                        anchor("center"),
                        //move(enemy.pos.angle(player.pos), 700),
                        move(dir1,700),
                        offscreen({ destroy: true }),
                        "energy-attack"
                    ])
                }
                play("laser", {
                    volume: 0.4,
                    loop: false,
                })
            }

        }


    })



onKeyPress("y", () => {
    dir1 = vec2(1,0);
    dir2 = vec2(-1,0);
    console.log(munitions);
    munitions -=1;
    updateMunition();
    restoreMunitions();
    if(munitions >= 0) {
        if(player.flipX){
            energy = game.add([
                sprite("energy-attack"),
                pos(player.pos.x-35, player.pos.y-10),
                area(),
                scale(0.25),
                anchor("center"),
                //move(enemy.pos.angle(player.pos), 700),
                move(dir2,700),
                offscreen({ destroy: true }),
                "energy-attack"
            ])
        } else{
            energy = game.add([
                sprite("energy-attack"),
                pos(player.pos.x+35, player.pos.y-10),
                area(),
                scale(0.25),
                anchor("center"),
                //move(enemy.pos.angle(player.pos), 700),
                move(dir1,700),
                offscreen({ destroy: true }),
                "energy-attack"
            ])
        }

        play("laser", {
            volume: 0.4,
            loop: false,
        })
    }

})



    //collide functions 
    let me;
    onCollide("enemy", "energy-attack", (enemy, energy) => {
        destroy(enemy);
        destroy(energy);
       me = add([
            sprite("timeMachine-energy", {
                anim: "glow",
            }),
            pos(enemy.pos),
            area(),
            scale(3),
            "timeMachine-energy"
        ])
    })

    onCollide("timeMachine-energy", "player", (me, player) => {
        destroy(me);
        TIME_ENERGY+=1;
        score.text = TIME_ENERGY;
        play("coin", {
            volume: 0.05,
            loop: false,
        })
    })

    onCollide("player", "time-machine", () => {
        go("machine");
        play("timeMachineSound", {
            volume: 0.4,
            loop: false,
        })
    })



    //function for resetting hearts on screen

    function updateHearts() {
        destroyAll("heart");
        for (let i = 0; i < HS_PLAYER; i++) {
            add([
                sprite("health", {
                    anim: "heart",
                }),
                pos(45 * i, 20),
                scale(3),
                fixed(),
                "heart"
            ])          
        }
    }

    /*onCollide("energy-attack", "bullet", (energy, bullet) => {
        destroy(energy);
        destroy(bullet);
    })*/ 
  
    onCollide("heart", "player", (heart) => {
        if(HS_PLAYER <= 25) {
            HS_PLAYER +=1;
            updateHearts();
            destroy(heart);
            play("pickUpHeart", {
                volume: 0.4,
                loop: false
            })
        }
    })

    onCollide("bullet", "player", (bullet) => {
        HS_PLAYER -= 1;
        console.log(HS_PLAYER);
        updateHearts();
        destroy(bullet);
        play("hit", {
            volume: 0.4,
            loop: false,
        })
        if(HS_PLAYER <= 0) {
            go("gameOver");
        }
    })

    //setting game over logic 

    onUpdate("player", () => {
        if(player.pos.y > height() + height()/2 + 50){
            go(gameState.currentLevel);
            HS_PLAYER -=1;
            updateHearts();
            play("hit", {
                volume: 0.4,
                loop: false,
            })
        }

        if(HS_PLAYER <= 0){
            go("gameOver");
        }
    })


    //setting player camera

    const cameraFixY = height() - 100;

    player.onUpdate(() => {
        camPos(player.pos.x, cameraFixY  );
        //camPos(player.pos.x, cameraFixY)
    })




    //implementing pause logic
    let cur = null;
    const pausedRect = add([
        sprite("pauseBoard"),
        pos(width()-700,height()-100),
        anchor("center")
    ])


    pausedRect.hidden = true;

    onKeyPress("p", () => {
        game.paused = !game.paused;
        if (cur) cur.cancel()
		cur = tween(
			pausedRect.pos,
			game.paused ? vec2(camPos().x - width()/4, height()-100) : camPos().add(0, 1000),
            1, //vec2(width()/8, height()-100) : center().add(0, 1000), 1,
			(p) => pausedRect.pos = p,
			easings.easeOutElastic,
		)
		if (game.paused) {
			pausedRect.hidden = false
			pausedRect.paused = false
		}
	})

    onGamepadButtonPress("start", () => {
        game.paused = !game.paused;
        if (cur) cur.cancel()
		cur = tween(
			pausedRect.pos,
			game.paused ? vec2(camPos().x - width()/4, height()-100) : camPos().add(0, 1000),
            1, //vec2(width()/8, height()-100) : center().add(0, 1000), 1,
			(p) => pausedRect.pos = p,
			easings.easeOutElastic,
		)
		if (game.paused) {
			pausedRect.hidden = false
			pausedRect.paused = false
		}
	})
})

scene("level4", () =>{

    if(!isMusicPlaying) {
        musicLevel4 = play("level-4", {
            volume: 0.8,
            loop: true,
        })
        isMusicPlaying = true;
    }

    gameState.currentSong = musicLevel4;

    camScale(1.3);
    const background = add([
        sprite("level4", {
            width: width(),
            height: height(),
        }),
        fixed(),
    ])


    if(GREEN_EN_POINTS > 25){
        HS_PLAYER = 15;
    }

    setGravity(1500);
    JUMP_FORCE = 1000;
    gameState.currentLevel = "level4";
    gameState.nextLevel = "end";
    gameState.currentSong = musicLevel4;

    
    //energy image
    const em = add([
        sprite("timeMachine-energy",{
            anim: "idle",
        }),
        pos(width()-200, 10),
        scale(5),
        fixed(),
    ]);

    //score
    score = add([
        text(TIME_ENERGY),
        pos(width()-140, 30),
        fixed(),
    ])

    for (let i = 0; i < HS_PLAYER; i++) {
        add([
            sprite("health", {
                anim: "heart",
            }),
            pos(45 * i, 20),
            scale(3),
            fixed(),
            "heart"
        ]) 
    }


    const lev = addLevel([
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                  b                                              ',
        '                                                                                                                                   a                                                                                            @@@@@@@                                                                                                                                                                                                                                           t              ',
        '                                                                                                                                                                                                                                bbbbbbb                                                                       b                                                                                                                                                                                  ',
        '                     a                                                                                                                                                                                                                                                                                                          b                                                                                                                                                 b              ',
        '                                                                                                                                                         bbb                                                                                                                                                       b                                                                                                                                    b                                        ',
        '                                                                                                                                            b                                                                                                                                                                                b                                                                                                                                                                   ',
        '                              b                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                   b b                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                                                                                                                                                                                                                bb                                                                                               ',
        '                                 bbbb                                                                                                                                             b                                                                                                                                                                                                                                                                                                              ',
        '                 a                                                                                                                                                                                                                                                                                                        a a  a a                                                                       b                                                                                       ',
        '                                                                                                                                                                                                                                                                                                a                                                                                                                                                                                                ',
        '                                                                                                                                                                                                                                                                                            a       aa  a                                                                                                                                                                                        ',
        '                                              =                                                                                                                                                                                                                                    a      a                a                                                 =                                                                =                                                                  ',
        '                                                                                                                                                                                                                                                                                                              a    a    a    a   a   a    a   a                                                                                                                                                  ',
        '                                                                                       =                                                                                                                                                                                                                                                                                                                                                                                                         ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ',                                               
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ',
        '=                                                   =  =  =   =   =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =  =    =      =   =  =        =                                                                                      =  =  =   =   =  =    =                                                                                                                                                                                                                   ',
    ], {
        tileWidth: 20,
        tileHeight: 24,
        pos: vec2(0,height()/2+100),
        tiles: {
            "t": () => [
                sprite("tm"),
                area({shape: new Rect(vec2(0,0), 128,128)}),
                body({isSolid: true}),
                anchor("center"),
               "time-machine"
            ],
            "=": () => [
                sprite("level4-block"),
                body({isSolid: true, isStatic : true}),
                scale(1),
                area({shape: new Rect(vec2(0,0), 285, 9)}),
                anchor("center"),
                scale(2),
            ],
            "a": () => [
                sprite("platform-lev4-1"),
                body({isSolid: true, isStatic: true}),
                scale(2),
                anchor("center"),
                area(),
            ],
            "b": () => [
                sprite("platform-lev4-3"),
                body({isSolid: true, isStatic: true}),
                scale(2),
                anchor("center"),
                area(),
            ],
            '@': () => [
                sprite("health2", {
                    anim: "heart",
                }),
                body({isSolid: true}),
                area(),
                scale(1),
                anchor("center"),
                "heart"
            ]
        }
    })



    game = add([
        timer(),
    ])

    let textbox;
    let txt;
    let txt2;

    if(!isDialog4Done){
        textbox = add([
            rect(width()/3+600, 200, { radius: 32}),
            anchor("center"),
            pos(width()/6-120, height()+100),
            outline(4),
            "textbox"
        ])
        
        // Text
        txt = add([
            text("...", { size: 28, width: width()/2, align: "center" }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
        ])
        txt2 = add([
            //text("Appuyer sur la barre d'espace", {size: 18, width: width() - 230}),
            sprite("B-BUTTON", {
                anim: "buttonB",
            }),
            pos(width()/6+375, height()+140),
            scale(2),
        ]) 
    }  

    if(!isDialog4Done){
        wait(0.5, () => {
            game.paused = true;
        })
    }

        function updateDialog() {
            if (curDialog4 < dialogsLev4.length ||   !isDialog4Done) {
                if (!isGamePaused) {
                    isGamePaused = true;
                    game.paused = true;
                }   
                isDialog4Done = true;  
                let [char, dialog] = dialogsLev4[curDialog4];
                txt.text = dialog;
            } else if (curDialog4 === dialogsLev4.length) {
                // End of dialog
                if (isGamePaused) {
                    isGamePaused = false;
                    game.paused = false; 
                }
                destroy(txt);
                destroy(txt2); 
                destroy(textbox);
            }
        }

        onKeyPress("space", () => {
            curDialog4 = (curDialog4 + 1)
            updateDialog();
            if(curDialog4 <= dialogsLev4.length){
                play("confirm-push", {
                    volume: 0.4,
                    loop: false,
                })
            }
        });

        onGamepadButtonPress("east", () => {
            curDialog4 = (curDialog4 + 1)
            updateDialog();
            if(curDialog4 <= dialogsLev4.length){
                play("confirm-push", {
                    volume: 0.4,
                    loop: false,
                })
            }
        })
        
    
    //player
    const player = game.add([
        sprite("player", {
            anim: "idle",
        }),
        health(HS_PLAYER),
        body({jumpForce: JUMP_FORCE}),
        doubleJump(),
        pos(120, height()-100),
        anchor("center"),
        area({shape: new Rect(vec2(0,0), 45,45)}),
        "player", {
            jumped: false,
            doubleJumped: false,
        }       
    ])



    //function that produces enemies
    let enemy;
    let enemyWalk = false;

    function produceEnemy() {
        enemy = game.add([
                sprite("enemyLev4", {
                    anim: "walk",
                }),
                pos(player.pos.x + 600, height()-150),
                area({shape: new Rect(vec2(0,0), 16, 16)}),
                body(),
                scale(4),
                anchor("center"),
                "enemy", {
                    walksTowardsPlayer: true,
                    isShooting: false,
                }
            ])
}

    loop(1.5, () => {
        if(!game.paused){
            produceEnemy();
            enemy.flipX = true;
        }

    })
    
    
    //create enemy attack and loop
    let bullet;
    function shootProjectile(enemy) {
        const direction = player.pos.sub(enemy.pos).unit(); 
            if(!game.paused) {
                bullet = game.add([
                    sprite("enemy-bullet", {
                        anim: "fire",
                    }),
                    scale(2),
                    area(),
                    pos(enemy.pos),
                    move(direction, 200),
                    offscreen({destroy: true}),
                    "bullet",
                ]);
            }       
    }



    //player commandsd
    playerMovements(player);

    //gamepad controls
    gamepadControls(player);
    whenGamepadDisconnects();
    
    //enemy movement

    onUpdate("enemy",(enemy) => {
        const distance = enemy.pos.dist(player.pos);
        if (distance > 500 && enemy.walksTowardsPlayer) {
            const direction = player.pos.sub(enemy.pos).unit();
            enemy.move(direction.scale(ENEMY_SPEED));  
        } else {
            enemy.walksTowardsPlayer = false;
            enemy.play("shoot", {loop: true});   
        
            if(!enemy.isShooting && distance < 500) {
                enemy.isShooting = true;
                loop(5/2, () => {
                    if(enemy.isShooting && enemy.exists()) {
                        shootProjectile(enemy);
                    }
                })
                wait(5, () => {
                    enemy.isShooting = false;
                })
            }
            const flipThreshold = 50;
                      
            //chatGPT fixed the flip bug of enemies
            if (Math.abs(player.pos.x - enemy.pos.x) > flipThreshold) {
                enemy.flipX = player.pos.x < enemy.pos.x;
            }

        }     
    })

    
    let energy;
    spriteMunition();

    onGamepadButtonPress("rshoulder", () => {
        if(!game.paused){
            munitions -=1;
            dir1 = vec2(1,0);
            dir2 = vec2(-1,0);
            updateMunition();
            if(EQUALITY_POINTS > 15) {
                restoreMunitionLev4();
            } else {
                restoreMunitions();
            }
            if(munitions >= 0){
                if(player.flipX) {
                    energy = game.add([
                        sprite("energy-attack"),
                        pos(player.pos.x-35, player.pos.y-10),
                        area(),
                        scale(0.25),
                        anchor("center"),
                        //move(enemy.pos.angle(player.pos), 700),
                        move(dir2,700),
                        offscreen({ destroy: true }),
                        "energy-attack"
                    ])
                } else {
                    energy = game.add([
                        sprite("energy-attack"),
                        pos(player.pos.x+35, player.pos.y-10),
                        area(),
                        scale(0.25),
                        anchor("center"),
                        //move(enemy.pos.angle(player.pos), 700),
                        move(dir1,700),
                        offscreen({ destroy: true }),
                        "energy-attack"
                    ])
                }
                play("laser", {
                    volume: 0.4,
                    loop: false,
                })
            }


        }

        play("laser", {
            volume: 0.4,
            loop: false,
        })

    })



onKeyPress("y", () => {
    dir1 = vec2(1,0);
    dir2 = vec2(-1,0);
    console.log(munitions);
    munitions -=1;
    updateMunition();
    if(EQUALITY_POINTS > 15) {
        restoreMunitionLev4();
    } else {
        restoreMunitions();  
    }
    if(munitions >= 0) {
        if(player.flipX){
            energy = game.add([
                sprite("energy-attack"),
                pos(player.pos.x-35, player.pos.y-10),
                area(),
                scale(0.25),
                anchor("center"),
                //move(enemy.pos.angle(player.pos), 700),
                move(dir2,700),
                offscreen({ destroy: true }),
                "energy-attack"
            ])
        } else{
            energy = game.add([
                sprite("energy-attack"),
                pos(player.pos.x+35, player.pos.y-10),
                area(),
                scale(0.25),
                anchor("center"),
                //move(enemy.pos.angle(player.pos), 700),
                move(dir1,700),
                offscreen({ destroy: true }),
                "energy-attack"
            ])
        }

        play("laser", {
            volume: 0.4,
            loop: false,
        })
    }

})



    //collide functions 
    let me;
    onCollide("enemy", "energy-attack", (enemy, energy) => {
        destroy(enemy);
        destroy(energy);
       me = add([
            sprite("timeMachine-energy", {
                anim: "glow",
            }),
            pos(enemy.pos),
            area(),
            scale(3),
            "timeMachine-energy"
        ])
    })

    onCollide("timeMachine-energy", "player", (me, player) => {
        destroy(me);
        TIME_ENERGY+=1;
        score.text = TIME_ENERGY;
        play("coin", {
            volume: 0.05,
            loop: false,
        })
    })

    onCollide("player", "time-machine", () => {
        go("machine");
        play("timeMachineSound", {
            volume: 0.4,
            loop: false,
        })

    })

    //function for resetting hearts on screen

    function updateHearts() {
        destroyAll("heart");
        for (let i = 0; i < HS_PLAYER; i++) {
            add([
                sprite("health", {
                    anim: "heart",
                }),
                pos(45 * i, 20),
                scale(3),
                fixed(),
                "heart"
            ])          
        }
    }

    if(MEDICINE_POINTS >= 30) {
        onCollide("energy-attack", "bullet", (energy, bullet) => {
            destroy(energy);
            destroy(bullet);
        })
    }


    onCollide("heart", "player", (heart) => {
        if(HS_PLAYER <= 25) {
            HS_PLAYER +=1;
            updateHearts();
            destroy(heart);
            play("pickUpHeart", {
                volume: 0.4,
                loop: false,
            })
        }
    })

    onCollide("bullet", "player", (bullet) => {
        HS_PLAYER -= 1;
        console.log(HS_PLAYER);
        updateHearts();
        destroy(bullet);
        play("hit", {
            volume: 0.4,
            loop: false,
        })
        if(HS_PLAYER <= 0) {
            go("gameOver");
        }
    })

    //setting game over logic 

    onUpdate("player", () => {
        if(player.pos.y > height() + height()/2 + 50){
            go(gameState.currentLevel);
            HS_PLAYER -=1;
            updateHearts();
            play("hit", {
                volume: 0.4,
                loop: false,
            })
        }

        if(HS_PLAYER <= 0){
            go("gameOver");
        }
    })


    //setting player camera

    const cameraFixY = height() - 100;

    player.onUpdate(() => {
        camPos(player.pos.x, cameraFixY  );
        //camPos(player.pos.x, cameraFixY)
    })




    //implementing pause logic
    let cur = null;
    const pausedRect = add([
        sprite("pauseBoard"),
        pos(width()-700,height()-100),
        anchor("center")
    ])


    pausedRect.hidden = true;

    onKeyPress("p", () => {
        game.paused = !game.paused;
        if (cur) cur.cancel()
		cur = tween(
			pausedRect.pos,
			game.paused ? vec2(camPos().x - width()/4, height()-100) : camPos().add(0, 1000),
            1, //vec2(width()/8, height()-100) : center().add(0, 1000), 1,
			(p) => pausedRect.pos = p,
			easings.easeOutElastic,
		)
		if (game.paused) {
			pausedRect.hidden = false
			pausedRect.paused = false
		}
	})

    onGamepadButtonPress("start", () => {
        game.paused = !game.paused;
        if (cur) cur.cancel()
		cur = tween(
			pausedRect.pos,
			game.paused ? vec2(camPos().x - width()/4, height()-100) : camPos().add(0, 1000),
            1, //vec2(width()/8, height()-100) : center().add(0, 1000), 1,
			(p) => pausedRect.pos = p,
			easings.easeOutElastic,
		)
		if (game.paused) {
			pausedRect.hidden = false
			pausedRect.paused = false
		}
	})
})
scene("machine", () => {

    let energy = TIME_ENERGY;
    const back = setBackground(120,255,120);

    add([
        text("Qu'est-ce que tu voudrais changer dans ton futur?", { size: 28, width: width()/2, align: "center"}),
        pos(width()/2, 30),
        anchor("center"),
        color(0,0,0)
    ])

    const machineDuTemps = add([
        sprite("time-machine"),
        anchor("center"),
        pos(width()/2, height()/2),
        scale(0.75),
    ]);

    //EQUALITY
    const eq = add([
        sprite("equality"),
        anchor("center"),
        pos(170,170),
        scale(0.30),
        area(),
        "Eq"
    ]);

    add([
        circle(40),
        pos(170,165),
        color(0,0,0)
    ])
    
    const textEq = add([
        text(" ", {
            size: 48,
        }),
        pos(eq.pos.x, eq.pos.y),
        anchor("center"),

    ])

    textEq.color = rgb(255,255,255);

    //POLITCS
    const Po = add([
        sprite("gPolitics"),
        anchor("center"),
        pos(width() - 170,170),
        scale(0.30),
        area(),
        "Po",
    ]);

    add([
        circle(40),
        pos(width() - 170,165),
        color(0,0,0)
    ])

    const textPo = add([
        text(" ", {
            size: 48,
        }),
        pos(Po.pos.x, Po.pos.y),
        anchor("center"),
    ])

    textPo.color = rgb(255,255,255);

    //MEDICINE



    const Med = add([
        sprite("medicine"),
        anchor("center"),
        pos(170,height()-170),
        scale(0.30),
        area(),
        "Med"
    ]);

    add([
        circle(40),
        pos(170,height()-175),
        color(0,0,0)
    ])

    const textMed = add([
        text("", {
            size: 48,
        }),
        pos(Med.pos.x, Med.pos.y),
        anchor("center"),

    ])



    textMed.color = rgb(255,255,255);




    //GREEN ENERGY
    const En = add([
        sprite("enel"),
        anchor("center"),
        pos(width()-170,height()-170),
        scale(0.30),
        area(),
        "En"
    ]);

    add([
        circle(40),
        pos(width()-170,height()-175),
        color(0,0,0)
    ])

    const textEn = add([
        text("", {
            size: 48,
        }),
        pos(En.pos.x, En.pos.y),
        anchor("center"),
    ]);

    textEn.color = rgb(255,255,255);

    const gem = add([
        sprite("timeMachine-energy", {
            anim: "glow",
        }),
        pos(width()/3-100, height()/2),
        anchor("center"),
        scale(12),
        "timeMachine-energy"
    ]);

    const next = add([
        text("Niveau Suivant ", {
            size: 27,
        }),
        pos(width()-190, height()/2),
        anchor("center")
    ]);

    add([
        sprite("START-PAUSE-BUTTON", {
            anim: "buttonStart"
        }),
        pos(width()-75, height()/2-30),
        scale(3)
    ])

    next.color = rgb(0,0,0);

    score = add([
        text("0", {
            size: 48,
        }),
        pos(gem.pos.x - 50, height()/2+15),
        anchor("botright")
    ]);

    score.color = rgb(0,0,0);
    score.text = TIME_ENERGY;

    const c = add([
        circle(20),
        pos(300,400),
        color(255,0,0),
        area(),
        "c"
    ])
    

    //Mouse events when Gamepad's not connected

    onClick("Eq", () => {
        if(TIME_ENERGY >0){
            TIME_ENERGY -=1;
            EQUALITY_POINTS +=1;
            score.text = TIME_ENERGY;
            //ça marche???
            console.log(EQUALITY_POINTS);
            textEq.text = EQUALITY_POINTS;
        }
    });

    onClick("Po", () => {
        if(TIME_ENERGY > 0){
            TIME_ENERGY -=1;
            POLITICS_POINTS +=1;
            score.text = TIME_ENERGY;
            textPo.text = POLITICS_POINTS;
        }
    });

    onClick("Med", () => {
        if(TIME_ENERGY > 0){
            TIME_ENERGY -=1;
            MEDICINE_POINTS +=1;
            score.text = TIME_ENERGY;
            textMed.text = MEDICINE_POINTS;
        }
    });

    onClick("En", () => {
        if(TIME_ENERGY > 0){
            TIME_ENERGY -=1;
            GREEN_EN_POINTS +=1;
            score.text = TIME_ENERGY;
            textEn.text = GREEN_EN_POINTS;
        }
    });

    onKeyPress("l", () => {
        go(gameState.nextLevel);
        if(isMusicPlaying){
            gameState.currentSong.paused = true;
            isMusicPlaying = false;
        }
    });

    //ceci sert à attirer l'attention au fait qu'il faut pas continuer sans charger la machine du temps
    let warning;
    let warningText;
    let aButton;
    let lStick;
    if(gameState.currentLevel == "level1") {
        warning = add([
            rect(400,300),
            color(255,255,255),
            outline(4),
            anchor("center"),
            pos(width()/2, height()/2)
        ])
    
        warningText = add([
            text("Bravo ! Tu as réussi à trouver la machine à voyager dans le temps ! Avant de continuer, charge-la avec les points que tu as collectés ! \n \n Déplace le cercle rouge avec        et appuie       sur l'un des scénarios suivants.", {size: 25, align: "center", width: width()/5}),
            anchor("center"),
            color(0,0,0),
            pos(warning.pos)
        ])
    
        aButton = add([
            sprite("A-BUTTON"),
            pos(width()/2+65, height()/2+60),
            scale(1.4)
        ])
    
        lStick = add([
            sprite("L-STICK"), 
            scale(1.4),
            pos(width()/2-80, height()/2+60),
        ])    
    } else if(gameState.currentLevel == "level2" || "level3" || "level4") {
        warning = add([
            rect(400,300),
            color(255,255,255),
            outline(4),
            anchor("center"),
            pos(width()/2, height()/2)
        ])
    
        warningText = add([
            text("Déplace le cercle rouge avec        et appuie       sur l'un des scénarios.", {size: 25, align: "center", width: width()/5}),
            anchor("center"),
            color(0,0,0),
            pos(warning.pos)
        ])
    
        aButton = add([
            sprite("A-BUTTON"),
            pos(width()/2+65, height()/2-15),
            scale(1.4)
        ])
    
        lStick = add([
            sprite("L-STICK"), 
            scale(1.4),
            pos(width()/2-80, height()/2-15),
        ])    
    }

   let warningElements = [warning, warningText, aButton, lStick];

   if(gameState.currentLevel === "level1") {
    wait(10, () => {
        for (let i = 0; i < warningElements.length; i++) {
            destroy(warningElements[i]);
        }
    })
   } else if (gameState.currentLevel === "level2" || "level3" || "level4") {
    wait(5, () => {
        for (let i = 0; i < warningElements.length; i++) {
            destroy(warningElements[i]);
        }
    })
   }


    //GAMEPADEVENTS

    let buttonPressed = false;
    let eqTxtBox = null;
    let eqText = null;
    let enTxtBox = null;
    let enText = null;
    let poTxtBox = null;
    let poText = null;
    let medTxtBox = null;
    let medText = null;


    onUpdate(() => {
        eqTxtBox;
        if(c.isColliding(eq)) {
            console.log("isColliding");
            if(!eqTxtBox){
                eqTxtBox = add([
                    rect(width()/3+600, 200, {radius: 32}),
                    anchor("center"),
                    color(255,255,255),
                    pos(width()/2,height()-150),
                    outline(4),
                    "textOfEq"
                ])
                eqText = add([
                    text("Justice : appuie pour changer la justice. Il faut créer un monde juste où tous sont égaux et traités de la même manière, malgré le fait que parfois cela n’est pas le cas.", 
                        { size: 28, width: width()/2, align: "center"}
                    ),
                    pos(eqTxtBox.pos),
                    anchor("center"),
                    color(0,0,0),
                ])
            }
        } else {
            if(eqTxtBox) {
                destroy(eqTxtBox);
                destroy(eqText);
                eqTxtBox = null;
                eqText = null;
            }
        }
    })

    onUpdate(() => {
        if(c.isColliding(En)) {
            console.log("isColliding");
            if(!enTxtBox){
                enTxtBox = add([
                    rect(width()/3+600, 200, {radius: 32}),
                    anchor("center"),
                    color(255,255,255),
                    pos(width()/2,170),
                    outline(4),
                    "textOfEq"
                ])
                enText = add([
                    text("Ressources : appuie pour changer les ressources. Actuellement, la plupart de l’énergie que nous utilisons dérive des énergies fossiles (presque 80% !), ce qui est très néfaste pour l’environnement. De cette façon, tu peux mettre ton énergie dans la recherche pour plus de ressources renouvelables, afin de sauvegarder notre planète du rechauffement climatique.",
                        { size: 24, width: width()/2, align: "center"}
                    ),
                    pos(enTxtBox.pos),
                    anchor("center"),
                    color(0,0,0),
                ])
            }
        } else {
            if(enTxtBox) {
                destroy(enTxtBox);
                destroy(enText);
                enTxtBox = null;
                enText = null;
            }
        }
    })

    onUpdate(() => {
        if(c.isColliding(Po)) {
            console.log("isColliding");
            if(!poTxtBox){
                poTxtBox = add([
                    rect(width()/3+600, 200, {radius: 32}),
                    anchor("center"),
                    color(255,255,255),
                    pos(width()/2,height()-150),
                    outline(4),
                    "textOfEq"
                ]),
                poText = add([
                    text("Institutions : appuie pour changer les institutions. Nos pays sont guidés et organisés par des personnes de confiance choisies par la population. De cette façon, tu peux décider de choisir les meilleures personnes pour ce rôle, afin qu’elles guident nos pays et notre planète vers la paix.",
                        { size: 24, width: width()/2, align: "center"}
                    ),
                    pos(poTxtBox.pos),
                    anchor("center"),
                    color(0,0,0),
                ])
            }
        } else {
            if(poTxtBox) {
                destroy(poTxtBox);
                destroy(poText);
                poText = null;
                poTxtBox = null;
            }
        }
    })

    onUpdate(() => {
        if(c.isColliding(Med)) {
            console.log("isColliding");
            if(!medTxtBox){
                medTxtBox = add([
                    rect(width()/3+600, 200, {radius: 32}),
                    anchor("center"),
                    color(255,255,255),
                    pos(width()/2,170),
                    outline(4),
                    "textOfEq"
                ]),
                medText = add([
                    text("Sciences : appuie pour changer les sciences. De cette façon, tu permets aux médecins et aux scientifiques comme toi de créer des technologies sûres et responsables qui aident notre planète à devenir un lieu meilleur.",
                        { size: 24, width: width()/2, align: "center"}
                    ),
                    pos(medTxtBox.pos),
                    anchor("center"),
                    color(0,0,0),
                ])
            }
        } else {
            if(medTxtBox) {
                destroy(medTxtBox);
                destroy(medText);
                medText = null;
                medTxtBox = null;
            }
        }
    })

    onGamepadButtonPress("south", () => {
        if (c.isColliding(eq) && !buttonPressed) {
            if(TIME_ENERGY > 0){
                play("chargerSound", {
                    volume: 0.2,
                    loop: false,
                })
            }
            console.log("iscolliding");
            if (TIME_ENERGY > 0) {
                TIME_ENERGY -= 1;
                EQUALITY_POINTS += 1;
                score.text = TIME_ENERGY;
                console.log(EQUALITY_POINTS);
                textEq.text = EQUALITY_POINTS;
                buttonPressed = true;
            }
        }

        if (c.isColliding(Po) && !buttonPressed) {
            if(TIME_ENERGY > 0){
                play("chargerSound", {
                    volume: 0.2,
                    loop: false,
                })
            }
            console.log("iscolliding");
            if (TIME_ENERGY > 0) {
                TIME_ENERGY -= 1;
                POLITICS_POINTS += 1;
                score.text = TIME_ENERGY;
                console.log(POLITICS_POINTS);
                textPo.text = POLITICS_POINTS;
                buttonPressed = true; 
            }
        }

        if (c.isColliding(Med) && !buttonPressed) {
            if(TIME_ENERGY > 0){
                play("chargerSound", {
                    volume: 0.2,
                    loop: false,
                })
            }
            console.log("iscolliding");
            if (TIME_ENERGY > 0) {
                TIME_ENERGY -= 1;
                MEDICINE_POINTS += 1;
                score.text = TIME_ENERGY;
                console.log(MEDICINE_POINTS);
                textMed.text = MEDICINE_POINTS;
                buttonPressed = true; 
            }
        }

        if (c.isColliding(En) && !buttonPressed) {
            if(TIME_ENERGY > 0){
                play("chargerSound", {
                    volume: 0.2,
                    loop: false,
                })
            }
            console.log("iscolliding");
            if (TIME_ENERGY > 0) {
                TIME_ENERGY -= 1;
                GREEN_EN_POINTS += 1;
                score.text = TIME_ENERGY;
                console.log(GREEN_EN_POINTS);
                textEn.text = GREEN_EN_POINTS;
                buttonPressed = true; 
            }
        }


    });

    onGamepadButtonRelease("south", () => {
        buttonPressed = false; 
    });




    onGamepadStick("left", (v) => {
        if(v.x > 0.5){
            c.move(700,0);
        } else if(v.x < -0.5) {
            c.move(-700, 0)
        }

        if(v.y > 0.5) {
            c.move(0,700);
        } else if(v.y < -0.5) {
            c.move(0,-700);
        }

    })


    //events with Gamepad

    onGamepadButtonPress("start", () => {
        go(gameState.nextLevel);
        if(isMusicPlaying){
            gameState.currentSong.paused = true;
            isMusicPlaying = false;
        }
    })

    textEn.text = GREEN_EN_POINTS;
    textMed.text = MEDICINE_POINTS;
    textPo.text = POLITICS_POINTS;
    textEq.text = EQUALITY_POINTS;
    if(gameState.currentLevel === "level3" && EQUALITY_POINTS > 15) {
        munitions = 15;
    } else {
        munitions = 10;
    }

    
})

   scene("end", () => {

    if(!isMusicPlaying){
        musicEnd = play("ending-music", {
            volume: 0.8,
            loop: true,
        })
        isMusicPlaying = true;
    }

    gameState.currentSong = musicEnd;

    setBackground(255,250,205);

    let total = GREEN_EN_POINTS + MEDICINE_POINTS + POLITICS_POINTS + EQUALITY_POINTS;

    if (GREEN_EN_POINTS > MEDICINE_POINTS && GREEN_EN_POINTS > POLITICS_POINTS && GREEN_EN_POINTS > EQUALITY_POINTS) {
        console.log("Displaying Green Energy ending");
        wait(2, () => {
            add([
                sprite("endEnergie"),
                fixed(),
                anchor("center"),
                pos(width() / 2, height() / 2),
                scale(0.5),
            ]);

            play("succes", {
                volume: 0.4,
                loop: false,
            });
        });

        wait(4, () => {
            const rectangle = add([
                rect(400, 400, { radius: 32 }),
                anchor("center"),
                color(255, 250, 205),
                pos(width() - 340, height() / 2),
                outline(4),
            ]);

            add([
                text(`Félicitations ! Tu es arrivé à la fin, ton score est de ${total}. Dans ton avenir, tu as encouragé le développement de ressources non polluantes en plaçant un total de ${GREEN_EN_POINTS} points.`, { align: "center", width: width() / 4 }),
                anchor("center"),
                pos(rectangle.pos),
                color(0, 0, 0),
            ]);

            play("yeah", {
                volume: 0.4,
                loop: false
            });
        });

    } else if (MEDICINE_POINTS > GREEN_EN_POINTS && MEDICINE_POINTS > POLITICS_POINTS && MEDICINE_POINTS > EQUALITY_POINTS) {
        console.log("Displaying Medicine ending");
        wait(2, () => {
            add([
                sprite("scieMed"),
                fixed(),
                anchor("center"),
                pos(width() / 2, height() / 2),
                scale(0.5),
            ]);

            play("succes", {
                volume: 0.4,
                loop: false,
            });
        });

        wait(4, () => {
            const rectangle = add([
                rect(400, 400, { radius: 32 }),
                anchor("center"),
                color(255, 250, 205),
                pos(width() - 340, height() / 2),
                outline(4),
            ]);

            add([
                text(`Félicitations ! Tu es arrivé à la fin, ton score est de ${total}. Dans ton avenir, tu as encouragé le développement la science en plaçant un total de ${MEDICINE_POINTS} points.`, { align: "center", width: width() / 4 }),
                anchor("center"),
                pos(rectangle.pos),
                color(0, 0, 0),
            ]);

            play("yeah", {
                volume: 0.4,
                loop: false,
            });
        });

    } else if (POLITICS_POINTS > GREEN_EN_POINTS && POLITICS_POINTS > MEDICINE_POINTS && POLITICS_POINTS > EQUALITY_POINTS) {
        console.log("Displaying Politics ending");
        wait(2, () => {
            add([
                sprite("poli"),
                fixed(),
                anchor("center"),
                pos(width() / 2, height() / 2),
                scale(0.5),
            ]);

            play("succes", {
                volume: 0.4,
                loop: false,
            });
        });

        wait(4, () => {
            const rectangle = add([
                rect(400, 400, { radius: 32 }),
                anchor("center"),
                color(255, 250, 205),
                pos(width() - 340, height() / 2),
                outline(4),
            ]);

            add([
                text(`Félicitations ! Tu es arrivé à la fin, ton score est de ${total}. Dans ton avenir, tu as encouragé le développement des institutions en plaçant un total de ${POLITICS_POINTS} points.`, { align: "center", width: width() / 4 }),
                anchor("center"),
                pos(rectangle.pos),
                color(0, 0, 0),
            ]);

            play("yeah", {
                volume: 0.4,
                loop: false,
            });

        });

    } else if (EQUALITY_POINTS > GREEN_EN_POINTS && EQUALITY_POINTS > MEDICINE_POINTS && EQUALITY_POINTS > POLITICS_POINTS) {
        console.log("Displaying Equality ending");
        wait(2, () => {
            add([
                sprite("just"),
                fixed(),
                anchor("center"),
                pos(width() / 2, height() / 2),
                scale(0.5),
            ]);

            play("succes", {
                volume: 0.4,
                loop: false,
            });
        });

        wait(4, () => {
            const rectangle = add([
                rect(400, 400, { radius: 32 }),
                anchor("center"),
                color(255, 250, 205),
                pos(width() - 340, height() / 2),
                outline(4),
            ]);

            add([
                text(`Félicitations ! Tu es arrivé à la fin, ton score est de ${total}. Dans ton avenir, tu as encouragé le développement de la justice en plaçant un total de ${EQUALITY_POINTS} points.`, { align: "center", width: width() / 4 }),
                anchor("center"),
                pos(rectangle.pos),
                color(0, 0, 0),
            ]);

            play("yeah", {
                volume: 0.4,
                loop: false,
            });
        });
    }

    add([
        text(`Ton final score: \n ${total}`),
        pos(20,20),
        color(0,0,0)
    ]);


    if(total >= 0 && total <= 30){
        add([
            sprite("bronzestar", {
                anim: "bright"
            }),
            pos(20,100),
            scale(5),
        ])
    } else if(total >= 31 && total <100) {
        add([
            sprite("silverstar", {
                anim: "bright",
            }),
            pos(20,100),
            scale(5),
        ])
    } else if(total >= 100){
        add([
            sprite("goldstar", {
                anim: "bright",
            }),
            pos(20,100),
            scale(5),
        ])
    }

    add([
        text("Jouer encore", {
            size: 48,
        }),
        pos(width()/2+300, height()-100),
        color(0,0,0),
    ])

    add([
        sprite("START-PAUSE-BUTTON", {
            anim: "buttonStart"
        }),
        pos(width()/2+600, height()-107),
        scale(3.5),
    ])


    //il y avait le problème que rien ne s'affichait si quelques variables étaient égales, alors chatGPT a sorti ce code qui semble très clean et très fonctionnelles pour créer (avec une petite révision)

    // Storing values in an array for easier comparison
let points = [
    {name: 'EQUALITY_POINTS', value: EQUALITY_POINTS},
    {name: 'POLITICS_POINTS', value: POLITICS_POINTS},
    {name: 'MEDICINE_POINTS', value: MEDICINE_POINTS},
    {name: 'GREEN_EN_POINTS', value: GREEN_EN_POINTS}
];

let equalities = [];

// Check for equalities
for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
        if (points[i].value === points[j].value && points[i].value !== 0) {
            equalities.push([points[i].name, points[j].name]);
            console.log(equalities)

        }
    }
}

// Output results
 if (equalities.length >= 1) {
    wait(2, () => {
        add([
            sprite("sameValues"),
            fixed(),
            anchor("center"),
            pos(width()/2, height()/2),
            scale(0.5),
        ]);
        
        play("succes", {
            volume: 0.4,
            loop: false,
        })
    })
   
    wait(4, () => {
        const rectangle = add([
            rect(400, 400, {radius: 32}),
            anchor("center"),
            color(255,250,205),
            pos(width()-340,height()/2),
            outline(4),
        ])

        add([
            text(`Félicitations ! Tu es arrivé à la fin, ton score est de ${total}. Dans ton avenir, tu as encouragé le développement de plusieurs scenarios au même temps. L'equilibre est la force de ton futur.`, {align: "center", width: width()/4,}),
            anchor("center"),
            pos(rectangle.pos),
            color(0,0,0),
        ])

        play("yeah", {
            volume: 0.4,
            loop: false,
        })
    })

}
    console.log(equalities);

    //replay
    onKeyPress("space", () => {
        go("title")
        play("confirm-push", {
            volume: 0.4,
            loop: false,
        })
        isDialogDone = false;
        isDialog2Done = false;
        isDialog3Done = false;
        isDialog4Done = false;
        isMusicPlaying = false;
        curDialog1 = 0;
        curDialog2 = 0;
        curDialog3 = 0;
        curDialog4 = 0;
        HS_PLAYER = 10;
        munitions = 10;
        TIME_ENERGY = 0;
        EQUALITY_POINTS = 0;
        MEDICINE_POINTS = 0;
        GREEN_EN_POINTS = 0;
        POLITICS_POINTS = 0;
        gameState.currentSong.paused = true;
        if(isMusicPlaying){
            isMusicPlaying = false;    
        }
    })

    onGamepadButtonPress("start", () => {
        go("title");
        play("confirm-push", {
            volume: 0.4,
            loop: false,
        })
        isDialogDone = false;
        isDialog2Done = false;
        isDialog3Done = false;
        isDialog4Done = false;
        isMusicPlaying = false;
        curDialog1 = 0;
        curDialog2 = 0;
        curDialog3 = 0;
        curDialog4 = 0;
        HS_PLAYER = 10;
        TIME_ENERGY = 0;
        munitions = 10;
        EQUALITY_POINTS = 0;
        MEDICINE_POINTS = 0;
        GREEN_EN_POINTS = 0;
        POLITICS_POINTS = 0;
        gameState.currentSong.paused = true;
        if(isMusicPlaying){
            isMusicPlaying = false;    
        } 
    })
})

scene("gameOver", () => {

    gameState.currentSong.paused = true;
    play("gameOverSound", {
        volume: 0.8,
        loop: false,
    })
    setBackground(0,0,0);
    const gameOvertxt = add([
        text("Game Over :(", {size: 64}),
        anchor("center"),
        pos(width()/2, height()/2),

    ]);

    let txt = add([
        text("pour jouer encore appuyer sur "),
        anchor("center"),
        pos(width()/2,height()/2 + 100),
    ])

    add([
        sprite("START-PAUSE-BUTTON", {
            anim: "buttonStart",
        }),
        anchor("center"),
        scale(2.5),
        pos(width()/2 + 275,height()/2 + 100),
    ]);

    onKeyPress("space", () => {
        go("title");
        isDialogDone = false;
        isDialog2Done = false;
        isDialog3Done = false;
        isDialog4Done = false;
        isMusicPlaying = false;
        curDialog1 = 0;
        curDialog2 = 0;
        curDialog3 = 0;
        curDialog4 = 0;
        HS_PLAYER = 10;
        TIME_ENERGY = 0;
        munitions = 10;
        EQUALITY_POINTS = 0;
        MEDICINE_POINTS = 0;
        GREEN_EN_POINTS = 0;
        POLITICS_POINTS = 0;
        if(isMusicPlaying) {
            gameState.currentSong.paused = true;
            isMusicPlaying = false;
        }
    });

    onGamepadButtonPress("start", () => {
        go("title");
        isDialogDone = false;
        isDialog2Done = false;
        isDialog3Done = false;
        isDialog4Done = false;
        isMusicPlaying = false;
        curDialog1 = 0;
        curDialog2 = 0;
        curDialog3 = 0;
        curDialog4 = 0;
        HS_PLAYER = 10;
        TIME_ENERGY = 0;
        munitions = 10;
        EQUALITY_POINTS = 0;
        MEDICINE_POINTS = 0;
        GREEN_EN_POINTS = 0;
        POLITICS_POINTS = 0;
        if(isMusicPlaying){
            gameState.currentSong.paused = true;
            isMusicPlaying = false;    
        }
    });


})

go("title"); 

//CHIEDI AL PROF SE è NECESSARIO METTERE UNA CONTRAINTE PRIMA DI CONTINUARE 
//AL LIVELLO SUCCESSIVO
