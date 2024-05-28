kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
    font: "Madimi",
})

setGravity(3500);
//loading font
loadFont("Madimi", "ASSETS/MadimiOne-Regular.ttf")

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
})

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
let HS_PLAYER = 15;
let TIME_ENERGY = 0;
let isGamePaused = false;
let score;
let playerDelta = 0;
let curDialog = -1;
let isDialogDone = false;


let gameState = {
    currentLevel: null,
    nextLevel: null,
}

//points of scenarios 
let EQUALITY_POINTS = 0;
let POLITICS_POINTS = 0;
let MEDICINE_POINTS = 0;
let GREEN_EN_POINTS = 0;

//level dialogs

const dialogsLev1 = [
    ["scientifique", "Docteur ! Heureusement que tu es enfin arrivé. Quelqu'un a volé la machine à voyager dans le temps sur laquelle nous avons travaillé pendant des années !"],
    ["scientifique", "J'ai l'impression qu'il y a quelqu'un qui ne veut pas que nous voyions comment sera notre futur. Mais nous devons faire quelque chose pour le changer et nous avons maintenant la possibilité de voyager pour voir comment il sera !"],
    ["scientifique", "Essaie de trouver la machine à voyager dans le temps et charge-la avec l'énergie que tu as gagnée ! Elle se trouve quelque part dans ce niveau. Ce n'est qu'à cette condition que nous pouvons espérer changer ce qui nous attend dans le futur. "],
];

const dialogsLev2 = [
    ["android", "Oh ! Que voient mes yeux ?"],
    ["android", "Tu as l'air tout à fait humain ! Une personne faite en chair et en os, contrairement à moi ! Des gens comme toi n'ont pas été vus sur notre planète depuis des années."],
    ["android", "J'imagine que tu viens de très loin. Tu dois savoir que dans ce futur, il ne reste que très peu d'êtres humains. Tout est désormais contrôlé par des robots et il y a une guerre qui dure depuis des années."],
    ["android", "J'espère sincèrement que tu réussiras à atteindre ton objectif. Mais ne reste pas ici trop longtemps ! Voilà un conseil."]
];

const dialogsLev3 = [
    ["forestFriend", "..."],
    ["forestFriend", "..."],
    ["forestFriend", "Cette planète était auparavant florissante et pleine de vie."],
    ["forestFriend", "Ensuite, à cause d'un besoin égoïste, nous, les humains, avons tout gâché. Nous avons construit tous ces gratte-ciels que tu vois ici."],
    ["forestFriend", "Nous en avons réalisé beaucoup, mais il semblait qu'il n'y en avait jamais assez, tout devait être recouvert de ces constructions en acier et en béton."],
    ["forestFriend", "Et puis, un jour, nous avons tout simplement abandonné la terre. Les plus riches sont partis coloniser d'autres planètes, et les quelques uns d'entre nous qui sont restés ici ont dû faire face à une nature qui, miraculeusement, semblait vouloir reprendre sa place."],
    ["forestFriend", "..."],
    ["forestFriend", "Je ne sais pas d'où tu viens, voyageur étrange. Mais je te confie que j'aimerais pouvoir voyager dans le temps et essayer d'avertir les gens pour qu'ils essaient de changer les choses."],
    ["forestFriend", "Sois prudent !"]
]; 

const dialogsLev4 = [
    ["nul","..."],
    ["nul","L'espace cosmique t'accueille avec un grand silence."],
    ["nul","Il semble qu'il n'y ait plus personne."],
    ["nul","De loin, tu vois des ennemis s'approcher. Des milliers d'années se sont écoulées au cours de tes voyages dans le temps, mais ils t'en veulent toujours. Ils t'en veulent parce que tu as essayé de regarder dans le futur pour changer ton présent."],
    ["nul", "On dirait que c’est le point d’arrivée pour toi."]
];

//function for the movements (keyboard and gamepad) 

let isWalking = false;
let isShooting = false;
let isWalkingRight = false;
let isWalkingLeft = false;
let isStopped = true;
let walkStick = false;

//GAMEPAD

function gamepadControls(p) {
        onGamepadStick("left", (v) => {
            if(v.x < -0.5) {
                p.flipX = true;
                p.move(-PLAYER_SPEED,0);
                if(!walkStick){
                    p.play("walk");
                    walkStick = true;
                }
            } else if (v.x > 0.5) {
                p.flipX = false;
                p.move(PLAYER_SPEED, 0);
                if(!walkStick) {
                    p.play("walk");
                    walkStick = true;
                }
            }
            if(walkStick && v.x > -0.5 && v.x < 0.5 && v.x !== 0) {
                p.play("idle");
                walkStick = false;
            }
            console.log(walkStick);
            console.log(v);
    }) 

        onGamepadButtonPress("south", () => {
            p.doubleJump();
            p.jumpedOnce = true;
            if(p.jumpedOnce){
                p.play("jumpDown")
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
            p.play("shoot");
        });

        onGamepadButtonRelease("rshoulder", () => {
            if(walkStick) {
                p.play("walk");
            } else {
                p.play("idle");
            }
        })

    

        
}

    



function playerMovements(p){
    let playerYPos = p.pos.y
        if(!game.paused){
            onKeyDown("a", () => {
                    p.flipX = true;
                    p.move(-PLAYER_SPEED,0);
                    if(!isWalking){
                        p.play("walk");
                        isWalking = true;
                    }
            onKeyRelease("a", () => {
                p.move(0);
                if(isWalking){
                    p.play("idle");
                    isWalking = false;
                }
            })


            })
            onKeyDown("d", () => {
                p.flipX = false;
                p.move(PLAYER_SPEED, 0);
                if(!isWalking){
                    p.play("walk");
                    isWalking = true;
                }
        })

        onKeyRelease("d", () =>{
            p.move(0);
            if(isWalking) {
                p.play("idle");
                isWalking = false;
            }
        })

        onKeyPress("space", () => {
            p.doubleJump();
            p.jumpedOnce = true;
            if(p.jumpedOnce){
                p.play("jumpDown")
            }
        }) 
        onKeyRelease("space", ()  => {
            if(isWalking){
                p.play("walk");
            }
        })
        onKeyPress("y", () => {
            p.play("shoot");
        })
        onKeyRelease("y", () => {
            if(isWalking){
                p.play("walk")
            }
        })  
    }
}

//title scene

scene("title", () => {
        gameState.currentLevel = "title";
        gameState.nextLevel = "level1";

    const background = add([
        sprite("Title_Start", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ])

    let myText = add([
        text("Appuyer sur X pour jouer", {
            width: 600,
            size: 48, 
        }),
        pos(width()/2-300, height()-68)
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

    myText.color = rgb(120, 255 - glowIntensity * 10, 255 - glowIntensity * 10); // Adjust the color for glow
});
    onKeyPress("x", () => {
        go("level1");

    })
    
})


scene("level1", () => {
    gameState.currentLevel = "level1";
    gameState.nextLevel = "level2";
    HS_PLAYER = 15;

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
        text("0"),
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
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ',
        '                                                                                                                                                         @                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                        aa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                             b     a    a    b                                                                      b                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ',
        '                                                                                                                                                                             a                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ',
        '                                                                                                                                                                                        b                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                   a                                                                                                                                a                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                a                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ',
        '                                                                                                                                                                                                                                                                                                                                                                b a a  a a dd                                                                                                                                                                           @                                                                                                                                                                                       ',
        '             a                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          a                                                                                                                                                                                       ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b                                                                                                                                                                              ',
        '                                                                                                                                                                                                                                                                                                                                         a                                                                                                                                                                                                                                                                                                                                                                                                     ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',                                               
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               t                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                   =                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                     =                                                                                                                                                                        =                                                                                                                                                                                                                                                                                ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        =                                                                                                                                                                                      ',
        '=                                                                                                                                                                                      =                                                                                                                                                                                =                                                                                                                                                                                                                                                                                 =                                                                                    ',
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
                sprite("health", {
                    anim: "heart",
                }),
                body({isSolid: true}),
                area(),
                anchor("center"),
                "heart"
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
            scale(0.50),
            pos(600,height()-50),
        ])
    
        textbox = add([
            rect(width()-100, 200, { radius: 32}),
            anchor("center"),
            pos(width()/6-100, height()+200),
            outline(4),
            "textbox"
        ])
        
        // Text
        txt = add([
            text("", { size: 32, width: width() - 230, align: "center" }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
        ])
        txt2 = add([
            text("Appuyer sur la barre d'espace", {size: 18, width: width() - 230}),
            pos(width()/6+300, height()+260),
            color(255,0,0),
        ]) 
    }  
  
    
        function updateDialog() {
            if (curDialog < dialogsLev1.length ||   !isDialogDone) {
                if (!isGamePaused) {
                    isGamePaused = true;
                    game.paused = true;
                }   
                isDialogDone = true;  
                const [char, dialog] = dialogsLev1[curDialog];
                txt.text = dialog;
            } else if (curDialog === dialogsLev1.length) {
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
            curDialog = (curDialog + 1)
            updateDialog();
        });
    
    
    
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
        area({shape: new Rect(vec2(0,0), 50,50)}),
        "player", {
            jumpedOnce: false,
            doubleJumped: false,
        }       
    ])

    //player commandsd
    playerMovements(player);

    //function that produces enemies
    let enemy;
    let enemyWalk = false;

    function produceEnemy() {
        enemy = game.add([
                sprite("enemy", {
                    anim: "walk",
                }),
                pos(player.pos.x + 600, height()-150),
                area({shape: new Rect(vec2(0,0), 10, 10)}),
                body(),
                scale(3),
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
    
                if(!enemy.isShooting) {
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
                             
                if(player.pos > enemy.pos) {
                    enemy.flipX = false;
                } else if (player.pos <= enemy.pos){
                    enemy.flipX = true;
                }
            } 
        //}
        
        
    })

    
    let energy;


    onKeyPress("y", () => {
        dir1 = vec2(1,0);
        dir2 = vec2(-1,0)
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
    })

    onCollide("player", "time-machine", () => {
        go("machine");
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

    onCollide("energy-attack", "bullet", (energy, bullet) => {
        destroy(energy);
        destroy(bullet);
    })

    onCollide("heart", "player", (heart) => {
        HS_PLAYER +=1;
        updateHearts();
        destroy(heart);
    })



    onCollide("bullet", "player", (bullet) => {
        HS_PLAYER -= 1;
        console.log(HS_PLAYER);
        updateHearts();
        destroy(bullet);
        if(HS_PLAYER <= 0) {
            go("gameOver");
        }
    })

    //setting respawn logic 

    onUpdate("player", () => {
        if(player.pos.y > height() + height()/2 + 50){
            go(gameState.currentLevel);
            HS_PLAYER -=1;
            updateHearts();
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

})

scene("level2", () => {
    gameState.currentLevel = "level2";
    gameState.nextLevel = "level3";

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


    const lev = addLevel([
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              d                                    ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                        aa                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                             b     a    a    b                                                                      b                                                                                                                                                                                                                                                                                                                                                                                                                                                             ',
        '                                                                                                                                                                             a                                                                                                                                                                                                                                                                                                                                                                                                                                                    ',
        '                                                                                                                                                                                        b                                                                                                                                                                                                                                                                                                                                                                                                                                         ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                   a                                                                                                                                a                                                                                                                                                                                                                                                                                                                                                                                                                             ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                a                                                                                                                                                                                                                                                                                                                                                                                                                 ',
        '                                                                                                                                                                                                                                                                                                                                                                b a a  a a dd                                                                                                                                                                           @                                                                         ',
        '             a                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          a                                                                         ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b                                                                ',
        '                                                                                                                                                                                                                                                                                                                                         a                                                                                                                                                                                                                                                                                        ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',                                               
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   t                              ',
        '                                                 =                                                                                                                                                                                                                                                                                                       =                                                     =                                           =                                                                                                                                                                      ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         =                                                                                                                        ',
        '                                                                                                                                                                                                      =                                                                                                 =                                                                                                                                                                                                                                                                                                                         ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        =                                          =                              ',
        '=                                                                                                                                         =                                                                                                                 =                                                                                                                                                                                                                                                                                 =                                                                                   ',
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
                sprite("health", {
                    anim: "heart",
                }),
                body({isSolid: true}),
                area(),
                anchor("center"),
                "heart"
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
    
    //thing i don't know I did but I finally did...
    if(!isDialogDone){
        avatar = add([
            sprite("android"),
            anchor("center"),
            scale(0.50),
            pos(600,height()-50),
        ])
    
        textbox = add([
            rect(width()-100, 200, { radius: 32}),
            anchor("center"),
            pos(width()/6-100, height()+200),
            outline(4),
            "textbox"
        ])
        
        // Text
        txt = add([
            text("", { size: 32, width: width() - 230, align: "center" }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
        ])
        txt2 = add([
            text("Appuyer sur la barre d'espace", {size: 18, width: width() - 230}),
            pos(width()/6+300, height()+260),
            color(255,0,0),
        ]) 
    }  
  
    
        function updateDialog() {
            if (curDialog < dialogsLev2 .length ||   !isDialogDone) {
                if (!isGamePaused) {
                    isGamePaused = true;
                    game.paused = true;
                }   
                isDialogDone = true;  
                const [char, dialog] = dialogsLev2[curDialog];
                txt.text = dialog;
            } else if (curDialog === dialogsLev2.length) {
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
            curDialog = (curDialog + 1)
            updateDialog();
        });
    
    
    
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
        area({shape: new Rect(vec2(0,0), 50,50)}),
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
                area({shape: new Rect(vec2(0,0), 10, 10)}),
                body(),
                scale(3),
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



    //player commands
    playerMovements(player);  
    
    //gamepad

    gamepadControls(player);
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
    
                if(!enemy.isShooting) {
                    enemy.isShooting = true;
                    loop(5/2.5, () => {
                        if(enemy.isShooting && enemy.exists()) {
                            shootProjectile(enemy);
                        }
                    })
                    wait(5, () => {
                        enemy.isShooting = false;
                    })
                }
                             
                if(player.pos > enemy.pos) {
                    enemy.flipX = false;
                } else if (player.pos <= enemy.pos){
                    enemy.flipX = true;
                }
            } 
        //}
        
        
    })

    
    let energy;

    onKeyPress("y", () => {
        dir1 = vec2(1,0);
        dir2 = vec2(-1,0)
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
    })

    onCollide("player", "time-machine", () => {
        go("machine");
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

    onCollide("energy-attack", "bullet", (energy, bullet) => {
        destroy(energy);
        destroy(bullet);
    })

    onCollide("heart", "player", (heart) => {
        if(HS_PLAYER < 25){
            HS_PLAYER +=1;
            updateHearts();
            destroy(heart);
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
    })

    //setting game over logic 

    onUpdate("player", () => {
        if(player.pos.y > height() + height()/2 + 50){
            go(gameState.currentLevel);
            HS_PLAYER -=1;
            updateHearts();
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
})

scene("level3", () => {
    const background = add([
        sprite("level3", {
            width: width(),
            height: height(),
        }),
        fixed(),
    ])
    gameState.currentLevel = "level3";
    gameState.nextLevel = "level4";

    
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
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 t             ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                     aa                                                                                                                                                                                                                                                                                                                                                                                                                                        ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                      a                                                                                                                                                                                                                                                                                                                                                                                                                        ',
        '                                                                                                                                                                                         b                                                                                                                                                                                                                                                                                                                                                                                                                     ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                   a                                                                                                                                                                                                                                                                                                                                                                                                           ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                a                                                                                                                                             @@@@                                                                                                                                                                                                                                              ',
        '                                                                                                                                                                                                                                                                                                                                                          a a  a a                                                                                                                                                                                                                                             ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       a                                                       ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    =                   =      ',
        '                                                                                                                                                                                                                                                                                                                  a                      a                                                                                                                                                                                                                                                                     ',
        '                                                                       d                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ',
        '                                                                                                                       =                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',                                               
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             =                                                                 ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                    =                                      =                                                                                                                                                                                                                                                                                                                                        =                                      =                                                                             =                                                                                     ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                       =                                                                                                                                                                                                                                                                                                                       ',
        '                                                                                                   =                                                                                                                                                                                                                                                                                                                                                                              =                                                                                                                            ',
        '                                                                                                                                                                                                      =                                                                                                                                                                                                                                                                                                                                                                                                        ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
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
                sprite("health", {
                    anim: "heart",
                }),
                body({isSolid: true}),
                area(),
                anchor("center"),
                "heart"
            ]
        }
    })



    game = add([
        timer(),
    ])

    //avatar

    let textbox;
    let txt;
    let txt2;
    let avatar; 
 
    /*if(!isDialogDone){
        avatar = add([
            sprite("forestFriend"),
            anchor("center"),
            scale(0.50),
            pos(600,height()-50),
        ])
    
        textbox = add([
            rect(width()-100, 200, { radius: 32}),
            anchor("center"),
            pos(width()/6-100, height()+200),
            outline(4),
            "textbox"
        ])
        
        // Text
        txt = add([
            text("", { size: 32, width: width() - 230, align: "center" }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
        ])
        txt2 = add([
            text("Appuyer sur la barre d'espace", {size: 18, width: width() - 230}),
            pos(width()/6+300, height()+260),
            color(255,0,0),
        ]) 
    }  
  
    
        function updateDialog() {
            if (curDialog < dialogsLev3.length ||   !isDialogDone) {
                if (!isGamePaused) {
                    isGamePaused = true;
                    game.paused = true;
                }   
                isDialogDone = true;  
                const [char, dialog] = dialogsLev3[curDialog];
                txt.text = dialog;
            } else if (curDialog === dialogsLev3.length) {
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
            curDialog = (curDialog + 1)
            updateDialog();
        });*/ 
        

    
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
        area({shape: new Rect(vec2(0,0), 50,50)}),
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
                area({shape: new Rect(vec2(0,0), 10, 10)}),
                body(),
                scale(3),
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

    //GAMEPAD commands
    gamepadControls(player);

    //player commandsd
    playerMovements(player);

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
    
                if(!enemy.isShooting) {
                    enemy.isShooting = true;
                    loop(5/8, () => {
                        if(enemy.isShooting && enemy.exists()) {
                            shootProjectile(enemy);
                        }
                    })
                    wait(5, () => {
                        enemy.isShooting = false;
                    })
                }
                             
                if(player.pos > enemy.pos) {
                    enemy.flipX = false;
                } else if (player.pos <= enemy.pos){
                    enemy.flipX = true;
                }
            } 
        //}
        
        
    })

    
    let energy;

    onGamepadButtonPress("rshoulder", () => {
        dir1 = vec2(1,0);
        dir2 = vec2(-1,0)
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
    })

    onKeyPress("y", () => {
        dir1 = vec2(1,0);
        dir2 = vec2(-1,0)
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
    })

    onCollide("player", "time-machine", () => {
        go("machine");
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

    onCollide("energy-attack", "bullet", (energy, bullet) => {
        destroy(energy);
        destroy(bullet);
    })

    onCollide("heart", "player", (heart) => {
        HS_PLAYER +=1;
        updateHearts();
        destroy(heart);
    })

    /*onCollide("bullet", "player", (bullet) => {
        HS_PLAYER -= 1;
        console.log(HS_PLAYER);
        updateHearts();
        destroy(bullet);
        if(HS_PLAYER <= 0) {
            go("gameOver");
        }
    })*/

    //setting game over logic 

    onUpdate("player", () => {
        if(player.pos.y > height() + height()/2 + 50){
            go(gameState.currentLevel);
            HS_PLAYER -=1;
            updateHearts();
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
})

scene("level4", () =>{
    const background = add([
        sprite("level4", {
            width: width(),
            height: height(),
        }),
        fixed(),
    ])

    HS_PLAYER = 15;

    setGravity(1500);
    JUMP_FORCE = 1000;
    gameState.currentLevel = "level4";
    gameState.nextLevel = "end";

    
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
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            =                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                t             ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        t           ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  b                                                                                                                                                                     b           ',
        '                                                                                                                                                                    a                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ',
        '                                                                                                                                                                                                                                                                                                                                        b                                                                                                                                                                                                                                                                                                                           ',
        '                     a                                                                                                                                                                                                                                                                                                                                           b                                                                                                                                                                                                                                                                                                  ',
        '                                                                                                                                                                                          bbb                                                                      @@@@@@@                                                                          b                                                                                                                                    b                                                                                                                                                                          ',
        '                                                                                                                                                                             b                                                                                     bbbbbbb                                                                                     b                                                                                                                                                                                                                                                                                                    ',
        '                              b                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ',
        '                                                                                                                                                                                   b b                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                 bb                                                                                                                                                                                                                                 ',
        '                                 bbbb                                                                                                                                                                               b                                                                                                                                             @@@@                                                                                                                                                                                                                                                                                              ',
        '                 a                                                                                                                                                                                                                                                                                                                                         a a  a a                                                                       b                                                                                                                                                                                                                         ',
        '                                                                                                                                                                                                                                                                                                                               a                                                                                                                                                                                                                                                                                                                                    ',
        '                                                                                                                                                                                                                                                                                                                            a       aa  a                                                                                                                                                                                                                                                                                                                           ',
        '                                                                              =                                                                                                                                                                                                                                    a      a                a                                                 =                                                                =                                                                                                                                                                                                     ',
        '                                                                                                                                                                                                                                                                                                                                              a    a    a    a   a   a    a   a                                                                                                                                                                                  a a aa a a aa a                                      b b b                                         ',
        '                                                                                                                       =                                                                                                                                                                                                                                                                                                                                                                                                                                                        bbbb      a                     b                                                   ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    a    a                       b  b                                               ',                                               
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     b                                                                              ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      bbb                                                                           ',
        '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          =                                                                                         ',
        '=                                                   =                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           =                                                                                   ',
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
                sprite("health", {
                    anim: "heart",
                }),
                body({isSolid: true}),
                area(),
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

    if(!isDialogDone){
        textbox = add([
            rect(width()-100, 200, { radius: 32}),
            anchor("center"),
            pos(width()/6-100, height()+200),
            outline(4),
            "textbox"
        ])
        
        // Text
        txt = add([
            text("", { size: 32, width: width() - 230, align: "center" }),
            pos(textbox.pos),
            anchor("center"),
            color(0, 0, 0),
        ])
        txt2 = add([
            text("Appuyer sur la barre d'espace", {size: 18, width: width() - 230}),
            pos(width()/6+300, height()+260),
            color(255,0,0),
        ]) 
    }  
  
    
        function updateDialog() {
            if (curDialog < dialogsLev4.length ||   !isDialogDone) {
                if (!isGamePaused) {
                    isGamePaused = true;
                    game.paused = true;
                }   
                isDialogDone = true;  
                const [char, dialog] = dialogsLev4[curDialog];
                txt.text = dialog;
            } else if (curDialog === dialogsLev4.length) {
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
            curDialog = (curDialog + 1)
            updateDialog();
        });
    
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
        area({shape: new Rect(vec2(0,0), 50,50)}),
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
                area({shape: new Rect(vec2(0,0), 10, 10)}),
                body(),
                scale(3),
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



    //player commandsd
    playerMovements(player);


    
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
    
                if(!enemy.isShooting) {
                    enemy.isShooting = true;
                    loop(5/10, () => {
                        if(enemy.isShooting && enemy.exists()) {
                            shootProjectile(enemy);
                        }
                    })
                    wait(5, () => {
                        enemy.isShooting = false;
                    })
                }
                             
                if(player.pos > enemy.pos) {
                    enemy.flipX = false;
                } else if (player.pos <= enemy.pos){
                    enemy.flipX = true;
                }
            } 
        //}
        
        
    })

    
    let energy;

    onKeyPress("y", () => {
        dir1 = vec2(1,0);
        dir2 = vec2(-1,0)
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
    })

    onCollide("player", "time-machine", () => {
        go("machine");
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

    onCollide("energy-attack", "bullet", (energy, bullet) => {
        destroy(energy);
        destroy(bullet);
    })

    onCollide("heart", "player", (heart) => {
        HS_PLAYER +=1;
        updateHearts();
        destroy(heart);
    })

    onCollide("bullet", "player", (bullet) => {
        HS_PLAYER -= 1;
        console.log(HS_PLAYER);
        updateHearts();
        destroy(bullet);
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
})

scene("machine", () => {

    let energy = TIME_ENERGY;

    setBackground(120,255,120);
    add([
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
    
    const textEq = add([
        text(" ", {
            size: 48,
        }),
        pos(eq.pos.x, eq.pos.y),
        anchor("center"),

    ])

    textEq.color = rgb(0,0,0);

    //POLITCS
    const Po = add([
        sprite("gPolitics"),
        anchor("center"),
        pos(width() - 170,170),
        scale(0.30),
        area(),
        "Po",
    ]);

    const textPo = add([
        text(" ", {
            size: 48,
        }),
        pos(Po.pos.x, Po.pos.y),
        anchor("center"),

    ])

    textPo.color = rgb(0,0,0);

    //MEDICINE
    const Med = add([
        sprite("medicine"),
        anchor("center"),
        pos(170,height()-170),
        scale(0.30),
        area(),
        "Med"
    ]);

    const textMed = add([
        text("", {
            size: 48,
        }),
        pos(Med.pos.x, Med.pos.y),
        anchor("center"),

    ])

    textMed.color = rgb(0,0,0);


    //GREEN ENERGY
    const En = add([
        sprite("enel"),
        anchor("center"),
        pos(width()-170,height()-170),
        scale(0.30),
        area(),
        "En"
    ]);

    const textEn = add([
        text("", {
            size: 48,
        }),
        pos(En.pos.x, En.pos.y),
        anchor("center"),

    ]);

    textEn.color = rgb(0,0,0);

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
        text("appuie sur L\npour pursuivre", {
            size: 27,
        }),
        pos(width()-100, height()/2),
        anchor("center")
    ]);

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
    });

    textEn.text = GREEN_EN_POINTS;
    textMed.text = MEDICINE_POINTS;
    textPo.text = POLITICS_POINTS;
    textEq.text = EQUALITY_POINTS;
    
})

scene("end", () => {
    setBackground(50,50,50);

    let total = GREEN_EN_POINTS + MEDICINE_POINTS + POLITICS_POINTS + EQUALITY_POINTS;

    drawRect({
        width: 120,
        height: 240,
        pos: vec2(width(), height()/2),
        color: YELLOW,
        outline: { color: BLACK, width: 4 },
    });

    add([
        text(`Ton final score: \n ${total}`),
        pos(20,20),
    ]);

    if(total >= 0 && total <= 30){
        add([
            sprite("bronzestar", {
                anim: "bright"
            }),
            pos(20,100),
            scale(5),
        ])
    } else if(total >= 31 && total <=90) {
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
})

scene("gameOver", () => {
    add([
        text("Game Over :( \nAppuyer sur espace pour jouer encore"),
        
    ])

    onKeyPress("space", () => {
        go("title ");
    })
})

go("level3");